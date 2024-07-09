
const content = document.querySelector(".textContent");

function plus(){
    let value = parseInt(content.innerText);
    value = value + 1;
    content.innerText = value;
};
function minus(){
    let value = parseInt(content.innerText);
    value = value - 1;
    content.innerText = value;
}
function reset(){
    let value  = parseInt(content.innerText);
    // value = "";
    content.innerText = "0";
   
}





