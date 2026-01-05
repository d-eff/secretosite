function drawEllipse(ctx, posX, posY, width, height) {
  ctx.beginPath();
  //x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise
  ctx.ellipse(posX, posY, height, width, Math.PI/2, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.stroke();
}

function drawCircle(ctx, x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, 2 * Math.PI);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.stroke();
}

function drawLine(ctx, startX, startY, endX, endY) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
}

function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function getPupilPos(clientXpos, clientYpos, xPos, yPos, xRadius, yRadius) {
  const clientX = clientXpos - xPos;
  const clientY = clientYpos - yPos;
  const angle = Math.atan(clientX/clientY);
  const xAng = xRadius * Math.sin(angle);
  const yAng = yRadius * Math.cos(angle);
  let x = xPos;
  let y = yPos;
  // if ((clientX > xRadius && clientX <= 2 * xRadius) && (clientY > -yRadius && clientY < yRadius)) {
    //CROSS-EYED PREVENTION
    // x = xPos;
    // y = yPos;
  if(clientX >= 0 && clientY >= 0) {
    //BOTTOM RIGHT (+,+)
    x = clamp(clientX, 0, xAng) + xPos;
    y = clamp(clientY, 0, yAng) + yPos;
  } else if (clientX < 0 && clientY >= 0) {
    //BOTTOM LEFT (-,+)
    x = clamp(clientX, xAng, 0) + xPos;
    y = clamp(clientY, 0, yAng) + yPos;
  } else if(clientX >= 0 && clientY < 0) {
    //TOP RIGHT (+,-)
    x = clamp(clientX, 0, -xAng) + xPos;
    y = clamp(clientY, -yAng, 0) + yPos;
  } else if(clientX < 0 && clientY < 0) {
    //TOP LEFT (-,-)
    x = clamp(clientX, -xAng, 0) + xPos;
    y = clamp(clientY, -yAng, 0) + yPos;
  }
  console.log(clientX, clientY, x, y)
  return {x, y};
}

function drawEye(ctx, e, xPos, yPos, xRadius, yRadius) {
  const {x, y} = getPupilPos(e.clientX, e.clientY, xPos, yPos, xRadius, yRadius);
  ctx.clearRect(xPos - (25 + xRadius), yPos - (25 + yRadius), xPos + xRadius, yPos + yRadius);
  drawEllipse(ctx, xPos, yPos, xRadius, yRadius);
  drawCircle(ctx, x, y)
}

function main() {
  const canvas = document.querySelector('#secreto')
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  let rect = canvas.getBoundingClientRect();
  let ctx = canvas.getContext('2d');

  const secretoHead = document.getElementById("secretoHead");
  ctx.drawImage(secretoHead, 0, 0)
  
  canvas.addEventListener('mousemove', (e) => {
    // drawEye(ctx, e, 300, 300, 75, 50);
    drawEye(ctx, e, 324, 410, 33.5, 20.5);
    drawEye(ctx, e, 500, 409, 36.5, 22);
    ctx.drawImage(secretoHead, 0, 0);
  });

  window.addEventListener('resize', () => {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    rect = canvas.getBoundingClientRect();
  });
}

main();