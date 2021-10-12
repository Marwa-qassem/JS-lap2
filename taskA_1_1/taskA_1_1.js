var x = 0, y = 0;  
var dx = 5, dy = 5;                 
var interval = 100;              


var win = window.open('child.html', "", 
          "width=200  ,height=200" );

win.moveTo(x,y);

var intervalID  = window.setInterval("bounce()", interval);

function bounce() {
    if (document.getElementById("btn1")===true)
    {
        clearInterval(intervalID);
        win.focus;
        return;
    }

    if ((x+dx > (screen.availWidth - 200)) || (x+dx < 0)) 
    {
        dx = -dx;
    }

    if ((y+dy > (screen.availHeight - 200)) || (y+dy < 0)) 
    {
           dy = -dy;
 
    }

    x += dx;
    y += dy;

    win.moveTo(x,y);
}