var win;

function openWin() {
    win = window.open('child.html', '', 'width=200,height=5000');




    setInterval(function(){


        
        win.focus; win.scrollBy(0, 100);
    }, 100)
}