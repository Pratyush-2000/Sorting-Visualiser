let randomize_array_btn = document.getElementById("randomize_array_btn");
let sort_btn = document.getElementById("sort_array_btn");   
let bars_container = document.getElementById("bars_container")

// height range

let minRange = 1 ;
let maxRange = 20;
let height_factor = 20 ;

// Bar Count and Creating Array of same length

let numOfBars = 100;
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
        bar.style.height = array[i]*height_factor + "px" ;

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

function sleep(ms) {

    return new Promise (
        (resolve) => setTimeout(resolve,ms));
}

async function bubbleSort(array) {

    let bars = document.getElementsByClassName("bar");

    for ( let i = 0 ; i < array.length ; i++) {

        for (let j=0 ; j < array.length - i - 1 ; j++){

            for(let k=0 ; k < array.length ;k++){

                if(k!=j || k!=j+1)
                    bars[k].style.backgroundColor = "aqua" ;
            }

            if(array[j] > array[j+1]){

                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp ;

                bars[j].style.height = array[j]*height_factor + "px";
                bars[j].style.backgroundColor = "lightgreen";

                bars[j + 1].style.height = array[j + 1]*height_factor + "px";
                bars[j + 1].style.backgroundColor = "lightgreen";

                await sleep(30);
            }
        }
    }

    return array ;

}

sort_btn.addEventListener("click" ,function(){

    bubbleSort(unsorted_array);
})
