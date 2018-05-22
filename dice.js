var canvas, ctx;
var diceColor = "#D77";
var dotColor = "#332";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
canvas.width = 100;
canvas.height = 100;

function resetCanvas(){
    canvas.width += 0;
    canvasDom.style.display ='none'
    loaderDom.style.display = 'block';
}

/*
This function draws a dice to the canvas.
ctx is the canvas context
x, y are the coordinates of the top left corner of the dice
size is the length of the dice size in px
value is the value of the dice. It shall be between 1 and 6
diceColor and DotColor are color of the dice body and of the dots on it respectively
the roundRect function is not part of the function but it shall be in the code as well
*/
function drawDice(value) {
  
    // ctx, x, y, size, value, diceColor, dotColor
    let size = 100;


    dots = [];
    ctx.save();
    ctx.fillStyle = diceColor;
    ctx.translate(x, y);
    roundRect(ctx, 0, 0, size, size, size * 0.1, true, false);

    //define dot locations
    var padding = 0.25;
    var x, y;
    x = padding * size;
    y = padding * size;
    dots.push({ x: x, y: y });
    y = size * 0.5;
    dots.push({ x: x, y: y });
    y = size * (1 - padding);
    dots.push({ x: x, y: y });
    x = size * 0.5;
    y = size * 0.5;
    dots.push({ x: x, y: y });
    x = size * (1 - padding);
    y = padding * size;
    dots.push({ x: x, y: y });
    y = size * 0.5;
    dots.push({ x: x, y: y });
    y = size * (1 - padding);
    dots.push({ x: x, y: y });
    //for(var i=0; i<dots.length; i++) console.log(dots[i]);

    var dotsToDraw;
    if (value == 1) dotsToDraw = [3];
    else if (value == 2) dotsToDraw = [0, 6];
    else if (value == 3) dotsToDraw = [0, 3, 6];
    else if (value == 4) dotsToDraw = [0, 2, 4, 6];
    else if (value == 5) dotsToDraw = [0, 2, 3, 4, 6];
    else if (value == 6) dotsToDraw = [0, 1, 2, 4, 5, 6];
    else console.log("Dice value shall be between 1 and 6");

    ctx.fillStyle = dotColor;
    for (var i = 0; i < dotsToDraw.length; i++) {
        ctx.beginPath();
        var j = dotsToDraw[i];
        ctx.arc(dots[j].x, dots[j].y, size * 0.07, 0, 2 * Math.PI);
        ctx.fill();
    }
}

// I took the roundRect function below from here:
// http://stackoverflow.com/questions/1255512/how-to-draw-a-rounded-rectangle-on-html-canvas

/**
 * Draws a rounded rectangle using the current state of the canvas.
 * If you omit the last three params, it will draw a rectangle
 * outline with a 5 pixel border radius
 * @param {CanvasRenderingContext2D} ctx
 * @param {Number} x The top left x coordinate
 * @param {Number} y The top left y coordinate
 * @param {Number} width The width of the rectangle
 * @param {Number} height The height of the rectangle
 * @param {Number} [radius = 5] The corner radius; It can also be an object 
 *                 to specify different radii for corners
 * @param {Number} [radius.tl = 0] Top left
 * @param {Number} [radius.tr = 0] Top right
 * @param {Number} [radius.br = 0] Bottom right
 * @param {Number} [radius.bl = 0] Bottom left
 * @param {Boolean} [fill = false] Whether to fill the rectangle.
 * @param {Boolean} [stroke = true] Whether to stroke the rectangle.
 */
function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    if (typeof stroke == 'undefined') {
        stroke = true;
    }
    if (typeof radius === 'undefined') {
        radius = 5;
    }
    if (typeof radius === 'number') {
        radius = { tl: radius, tr: radius, br: radius, bl: radius };
    } else {
        var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
        for (var side in defaultRadius) {
            radius[side] = radius[side] || defaultRadius[side];
        }
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    if (fill) {
        ctx.fill();
    }
    if (stroke) {
        ctx.stroke();
    }

}