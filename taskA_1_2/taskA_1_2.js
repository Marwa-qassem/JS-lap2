function openingandclosing() {
    var win = open('child.html', 'anyname', 'width=10,height=1,left=5,top=3');    setTimeout(function () {
        win.close();
    }, 9000);
}
