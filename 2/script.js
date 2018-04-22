//Tell the browser to run this script when the page has finished loading 

window.onload = applyBehaviour;

//Apply Behaviour to the button 
function applyBehaviour(){

    //Ensure DOM aware user agent
    var Button = document.getElementById('clicker');

    // if the DOM Element Exists 
    if(Button){
        Button.onclick = behave; // Calling the behave function
    }
    else{
        alert("DOM Element not found");
    }
}


// Function That will be executed when the button will be clicked
function behave(){
    alert('You Clicked Me!!!');
}