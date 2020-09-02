//Set initial count
let count = 0;

//Get value and all buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


//Add event listener to all buttons
btns.forEach( function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        value.textContent = setCounter(styles);      
        setCounterColor();       
    });
});

function setCounter(styles){
     if (styles.contains("decrease")){
            count--;
        } else if (styles.contains("increase")){
            count++;
        } else if (styles.contains("reset")){
            count = 0;
        }
    return count;
}

function setCounterColor(){
    if (count > 0){
        value.style.color = "green";
    } else if (count < 0 ){
           value.style.color = "red";
    } else if (count == 0){
        value.style.color = "black";
    }
}