const wordInput = document.querySelector('#problem-5 #rhyme-with-input');
const showRhymesButton = document.querySelector('#problem-5 #show-rhymes-button');
const clearButton = document.querySelector('#problem-5 #clear-rhymes-button');
const rhymesOutput = document.querySelector('#problem-5 #rhymes');

function getRhymes(rel_rhy, callback) {
    fetch(`https://api.datamuse.com/words?${(new URLSearchParams({rel_rhy})).toString()}`)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        }, (err) => {
            console.error(err);
        });
}

// Write your code here

// getRhymes('giraffe', (out) => {
//     let words = [];
//     for(i in out){
//         words.push(out[i]['word'])
//         console.log(out[i]['word']);
//     }
//     if (words){
//         return words
//     } else {
//         return ['no rhymes'];
//     }
// });

let rhyme_words = [];

showRhymesButton.addEventListener('click', ()=>{
    rhyme_words = [];
    rhymesOutput.textContent = "";
    getRhymes(wordInput.value, (out) =>{
        for(i in out){
            rhyme_words.push(out[i]['word']);
        };

        if(rhyme_words.length === 0){
            rhyme_words = ['no rhymes'];
        };

        for(let i = 0; i < rhyme_words.length; i++){
        const li_node = document.createElement('li');
        const li_text = document.createTextNode(rhyme_words[i])

        li_node.className = "list-group-item";

        li_node.appendChild(li_text);
        rhymesOutput.appendChild(li_node);
        }
    })
})

clearButton.addEventListener('click', ()=>{
    wordInput.textContent = "";
    rhymesOutput.textContent = "";
})