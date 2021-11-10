canvas=document.getElementById("micanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line =2;
var ultimaposicionX,ultimaposicionY;
var width=screen.width;
new_width =screen.width - 70;
new_height =screen.height - 300;
if(width < 992){
    document.getElementById("micanvas").width = new_width;
    document.getElementById("micanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", mitouchstart);
function mitouchstart(e){
    console.log("mitouchstart")
    ultimaposicionX = e.touches[0].clientX - canvas.offsetLeft;
    ultimaposicionY = e.touches[0].clientY - canvas.offsetTop;
    color=document.getElementById("color").value;
    width_of_line =document.getElementById("width_of_line").value;
}
canvas.addEventListener("touchmove", mitouchmove);
function mitouchmove(e){
    console.log("mitouchmove");
    actualposicionmouseX = e.touches[0].clientX - canvas.offsetLeft;
    actualposicionmouseY = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth =width_of_line;
    console.log("ultima posicion de las coordenadas x, y= ");
    console.log("x =" + ultimaposicionX + "y = " + ultimaposicionY);
    ctx.moveTo(ultimaposicionX, ultimaposicionY);
    console.log("actual posicion de las coordenadas x, y= ");
    console.log("x =" + actualposicionmouseX + "y = " + actualposicionmouseY);
    ctx.lineTo(actualposicionmouseX, actualposicionmouseY);
    ctx.stroke();
    ultimaposicionX = actualposicionmouseX;
    ultimaposicionY = actualposicionmouseY;
}
function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}