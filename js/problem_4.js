const messageInput = document.querySelector('#problem-4 #message-input');
const messageFeedback = document.querySelector('#problem-4 #message-feedback')

const MAX_CHARACTERS = 50;

// Write your code here

function addS(num) {
    if(num === 1) {
        return '';
    } else {
        return 's';
    }
}


function showRemainingChars(msg){
    if(msg.value.length <= MAX_CHARACTERS){
        let left = MAX_CHARACTERS - msg.value.length;
        if (msg.classList.contains('is-invalid')){
            msg.classList.add('is-valid');
            msg.classList.remove('is-invalid');
        };
        if (messageFeedback.classList.contains('invalid-feedback')){
            messageFeedback.classList.add('valid-feedback');
            messageFeedback.classList.remove('invalid-feedback')
        };
        return parseInt(left) + " character" + addS(left) + " left";
    }
    else{
        let over = Math.abs(MAX_CHARACTERS - msg.value.length);
        if (msg.classList.contains('is-valid')){
            msg.classList.remove('is-valid');
            msg.classList.add('is-invalid');
        };
        if (messageFeedback.classList.contains('valid-feedback')){
            messageFeedback.classList.add('invalid-feedback');
            messageFeedback.classList.remove('valid-feedback')
        };
        return parseInt(over) + " character" + addS(over) + " too long";
    };
}

messageFeedback.textContent = showRemainingChars(messageInput);

messageInput.addEventListener("input", ()=>{
    messageFeedback.textContent = showRemainingChars(messageInput);
})