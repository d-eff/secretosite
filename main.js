function drawEllipse(ctx, posX, posY) {
  ctx.beginPath();
  //x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise
  ctx.ellipse(posX, posY, 50, 75, Math.PI/2, 0, 2 * Math.PI);
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


function main() {
  const canvas = document.querySelector('#secreto')
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  let rect = canvas.getBoundingClientRect();
  let ctx = canvas.getContext('2d');

  drawEllipse(ctx, 300, 300);
  // drawEllipse(ctx, 500, 300);

  drawCircle(ctx, 300, 300);
  // drawCircle(ctx, 500, 300);

  
  canvas.addEventListener('mousemove', (e) => {
    //if y > 
    // 300,300 is center of ellipse
    const ellipseXPos = 300;
    const ellipseYPos = 300;
    const ellipseXLength = 75;
    const ellipseYLength = 50;
    // don't need to offset from rect.left/rect.top bc it's always fullscreen
    const clientX = e.clientX - ellipseXPos;
    const clientY = e.clientY - ellipseYPos;
    const angle = Math.atan(clientX/clientY);
    const xAng = ellipseXLength * Math.sin(angle);
    const yAng = ellipseYLength * Math.cos(angle);
    // const y = yAng + 300
    let x = ellipseXPos;
    let y =ellipseYPos;
    // const x = clientX > ellipseXLength ? ellipseXPos + xAng : ellipseXPos - xAng;
    // const y = clientY < ellipseYLength ? ellipseYPos - yAng : yAng + ellipseYPos;

    if(clientX > 0 && clientY > 0) {
      //BOTTOM RIGHT
      // console.log("BOTTOM RIGHT")
      x = 300 + xAng;
      y = 300 + yAng;
    } else if (clientX < 0 && clientY > 0) {
      //BOTTOM LEFT
      // console.log("BOTTOM LEFT")
      x = 300 + xAng;
      y = 300 + yAng;
    } else if(clientX > 0 && clientY < 0) {
      // console.log("TOP RIGHT");
      x = 300 - xAng;
      y = 300 - yAng;
    } else if(clientX < 0 && clientY < 0) {
      // console.log("TOP LEFT")
      x = 300 - xAng;
      y = 300 - yAng;
    } else {
      x = 300;
      y = 300;
    }
    // console.log('----------')
    // console.log("clientleft, clienttop:", clientX, clientY);
    // console.log("xr, yr:", xAng, yAng)
    
    // console.log("compX, compY", x, y)
    // console.log("x, y:", x, y)
    
    // const xMax = 300 + 75
    // const xMin = 300 - 75;
    // const yMax = 300 + 50;
    // const yMin = 300 - 50;
    
    // clamp - Math.min(Math.max(Number, min), max);
    // const xPos = Math.min(Math.max(left, xMin), xMax);
    // const yPos = Math.min(Math.max(top, yMin), yMax);
    ctx.clearRect(0, 0, rect.width, rect.height);
    
    drawEllipse(ctx, 300, 300);
    drawLine(ctx, 300, 300, clientX + 300, clientY + 300);
    drawCircle(ctx, x, y)
  });

  window.addEventListener('resize', () => {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    rect = canvas.getBoundingClientRect();
  });
}



main();