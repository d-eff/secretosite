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

function getPupilPos(clientXpos, clientYpos, ellipseXPos, ellipseYPos, ellipseXLength, ellipseYLength) {
  const clientX = clientXpos - ellipseXPos;
  const clientY = clientYpos - ellipseYPos;
  const angle = Math.atan(clientX/clientY);
  const xAng = ellipseXLength * Math.sin(angle);
  const yAng = ellipseYLength * Math.cos(angle);
  let x = ellipseXPos;
  let y = ellipseYPos;
  if(clientX >= 0 && clientY >= 0) {
    //BOTTOM RIGHT
    x = clamp(clientX, 0, xAng) + ellipseXPos;
    y = clamp(clientY, 0, yAng) + ellipseYPos;
  } else if (clientX < 0 && clientY >= 0) {
    //BOTTOM LEFT
    x = clamp(clientX, xAng, 0) + ellipseXPos;
    y = clamp(clientY, 0, yAng) + ellipseYPos;
  } else if(clientX >= 0 && clientY < 0) {
    //TOP RIGHT
    x = clamp(clientX, 0, -xAng) + ellipseXPos;
    y = clamp(clientY, -yAng, 0) + ellipseYPos;
  } else if(clientX < 0 && clientY < 0) {
    //TOP LEFT
    x = clamp(clientX, -xAng, 0) + ellipseXPos;
    y = clamp(clientY, -yAng, 0) + ellipseYPos;
  }
  return {x, y};
}

function drawEye(ctx, e, ellipseXPos, ellipseYPos, ellipseXLength, ellipseYLength) {
  const {x, y} = getPupilPos(e.clientX, e.clientY, ellipseXPos, ellipseYPos, ellipseXLength, ellipseYLength);
  ctx.clearRect(ellipseXPos - (25 + ellipseXLength), ellipseYPos - (25 + ellipseYLength), ellipseXPos + ellipseXLength, ellipseYPos + ellipseYLength);
  drawEllipse(ctx, ellipseXPos, ellipseYPos, ellipseXLength, ellipseYLength);
  drawCircle(ctx, x, y)
}

function main() {
  const canvas = document.querySelector('#secreto')
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  let rect = canvas.getBoundingClientRect();
  let ctx = canvas.getContext('2d');

  drawEllipse(ctx, 300, 300, 75, 50);
  drawEllipse(ctx, 500, 300, 75, 50);

  drawCircle(ctx, 300, 300);
  drawCircle(ctx, 500, 300);
  
  canvas.addEventListener('mousemove', (e) => {
    //left - 291, 370, 33.5, 20.5
    // right - 466, 372, 36.5, 22
    drawEye(ctx, e, 300, 300, 75, 50)
    drawEye(ctx, e, 500, 300, 75, 50)
  });

  window.addEventListener('resize', () => {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    rect = canvas.getBoundingClientRect();
  });
}



main();