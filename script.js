const btnIncrement = document.querySelector(".btn-increment");
const btnDecrement = document.querySelector(".btn-decrement");

const textValue = document.querySelector("h2");
const changedBackground = document.querySelector(".btn-changeBackground")

changedBackground.addEventListener("click",function() {
    textValue.style.backgroundColor = "lightgreen";
});

let counter = 0;

btnIncrement.addEventListener("click", function(){
    counter++;
    textValue.textContent = counter;
});

btnDecrement.addEventListener("click", function(){
    
    if(counter > 0) {

        counter--;
        textValue.textContent = counter;
    }


})
