Canvas = document.getElementById("cs");
vtx = Canvas.getContext("2d");

demo_x = 50;
demo_y = 50;

demo_width = 120;
demo_height = 120;

background_image = "earth.jpg";
alien_image = "demogorgon.png";

function add() {
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;

    alien_imageTag = new Image();
    alien_imageTag.onload = uploadAlien;
    alien_imageTag.src = alien_image;
}

function uploadBackground() {
    vtx.drawImage(background_imageTag,0,0,Canvas.width,Canvas.height);
}
function uploadAlien() {
    vtx.drawImage(alien_imageTag,demo_x,demo_y,demo_width,demo_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == "38")
        {
            up();
            console.log("up");
        }
        if(keyPressed == '40')
        {
            down();
            console.log("down");
        }
        if(keyPressed == '37')
        {
            left();
            console.log("left");
        }
        if(keyPressed == '39')
        {
            right();
            console.log("right");
        }
}

function up()
{
    if(demo_y >=0)
    {
        demo_y = demo_y - 10;
        console.log("When up arrow is pressed,  x = " + demo_x + " | y = " +demo_y);
         uploadBackground();
         uploadrover(); 
    }
}
function down()
{
    if(demo_y <=500)
    {
        demo_y =demo_y+ 10;
        console.log("When down arrow is pressed,  x = " + demo_x + " | y = " +demo_y);
        uploadBackground();
         uploadrover();
    }
}
function left()
{
    if(demo_x >= 0)
    {
        demo_x =rover_x - 10;
        console.log("When left arrow is pressed,  x = " + demo_x + " | y = " +demo_y);
        uploadBackground();
         uploadrover();
    }
}
function right()
{
    if(demo_x <= 700)
    {
        demo_x =rover_x + 10;
        console.log("When right arrow is pressed,  x = " + demo_x + " | y = " +demo_y);
        uploadBackground();
        uploadrover();
   }
}
    
