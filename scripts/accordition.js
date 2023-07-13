const q1 = document.querySelector('.question-one');
const q2 = document.querySelector('.question-two');
const q3 = document.querySelector('.question-three');
const q4 = document.querySelector('.question-four');
const q5 = document.querySelector('.question-five');

function isclicked(question) {
    if(!question.classList.contains('isactive')){
        prevquestion();
        question.classList.add('isactive');
    }
    else{
        question.classList.remove('isactive');
    }
}

function prevquestion() {
    const prevques = document.querySelector('.isactive');
    if(prevques) {
        prevques.classList.remove('isactive');
    }
}

q1.addEventListener('click',function() {
    isclicked(q1);
}
)

q2.addEventListener('click',function() {
    isclicked(q2);
}
)

q3.addEventListener('click',function() {
    isclicked(q3);
}
)

q4.addEventListener('click',function() {
    isclicked(q4);
}
)

q5.addEventListener('click',function() {
    isclicked(q5);
}
)