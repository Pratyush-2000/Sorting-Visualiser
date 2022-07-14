let randomize_array_btn = document.getElementById("randomize_array_btn");
let sort_btn = document.getElementById("sort_array_btn");   
let bars_container = document.getElementById("bars_container")

// height range

let minRange = 0 ;
let maxRange = 200 ;

// Bar Count and Creating Array of same length

let numOfBars = 10 ;
let unsorted_array = new Array(numOfBars);

// Returns a random number between minRange and maxRange with both corners included
function randomNum(min , max) {

    return Math.floor(Math.random()*(max-min+1)) + min ;
}

// Modifies the unsorted array by untilising the randomNum function
function createRandomArray() {

    for(let i=0 ; i < numOfBars ; i++){

        unsorted_array[i] = randomNum(minRange,maxRange) ;
        console.log(unsorted_array[i]) ;
    }
}

// 
function renderBars(array){

    for(let i=0 ; i < array.length ; i++){

        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${array[i]}px` ;

        bars_container.appendChild(bar);

    }

}

document.addEventListener("DOMContentLoaded",function(){

    createRandomArray() ;
    renderBars(unsorted_array);
}) ;    


randomize_array_btn.addEventListener("click",function(){

    createRandomArray() ;
    bars_container.innerHTML = "" ;
    renderBars(unsorted_array);
}) ;   

