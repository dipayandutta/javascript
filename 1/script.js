//initialize when the page is loaded

addEvent(window,'load',addText);

function addText(){

  //Ensure the DOM aware user agent
  if(!document.appendChild || !document.createTextNode) return ;

  //Create the Text node
  var oNewText = document.createTextNode("Only DOMuntitled aware user agent will reval this ");

  //Create a Paragraph
  var oParagraph = document.createElement("p");

  //Insert the Text (which just created ) into the Paragraph
  oParagraph.appendChild(oNewText);

  //Insert the Paragraph at the end of the document
  document.body.appendChild(oParagraph);
}
