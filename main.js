// Add an Event Element

function addEvent(elem , evtType ,func){

    if (elem && typeof(elem)=="object"){
        if(elem.addEventListner){
            elem.addEventListner(evtType,func,false);
        }
        else{
            elem["on" + evtType] = func;
        }
    }
}