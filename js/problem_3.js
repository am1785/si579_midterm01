const clickCountButton = document.querySelector('#problem-3 #click-count');

function addS(num) {
    if(num === 1) {
        return '';
    } else {
        return 's';
    }
}

// write your code here
let counter = 0

clickCountButton.addEventListener('click', ()=>{
    counter++;
    clickCountButton.textContent = "You clicked the button " + parseInt(counter) + " time" + addS(counter);
})