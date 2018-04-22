function reWrite(){

    var newContent = "<html>";
    newContent += "<p>";
    newContent += "Hello";
    newContent += "</p>"
    newContent += "</html>";

    document.write(newContent);
    document.close();
}

function initialize(){
    if(document.getElementById){
        var ButtonRewrite = document.getElementById('rewritePage');
        if (ButtonRewrite){
            addEvent(ButtonRewrite,'click',reWrite);
        }
    }
}

addEvent(window,'load',initialize);