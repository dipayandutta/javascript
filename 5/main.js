

function initialize(){

    if(document.getElementById){
        var windowCreate = document.getElementById('create_window');
        var closeWindow  = document.getElementById('close_window');

        if(windowCreate & closeWindow){
            windowCreate.onclick = makeNewWindow;
            closeWindow.onclick  = closeWindow;
        }
    }
}

var newWindow ;

function makeNewWindow(){
    newWindow = window.open("","","height=300,width=300");

}

function closeWindow(){
    if(newWindow){
        newWindow.close();
        newWindow = null;
    }
    else{
        console.log("No Window is created")
    }
}
addEvent(window,'load',initialize);