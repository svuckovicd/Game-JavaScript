///select dom items
const btn = document.querySelector('button');
const divA = document.querySelector('#answer');
const divQ = document.querySelector('#question');

btn.addEventListener('click', closeBtn)
divA.addEventListener('click', startQuiz);

//setup
//set increment
let i = 0;
let corect = 1;
let wrong = 1;



//CREATE QUIZ
function createQuiz(questions) {
    //set questions
    const span = document.createElement('span');
    let text = String(questions.question)
    span.innerHTML = text
    divQ.appendChild(span);

    //set answers

    for (let prop in questions.answer) {
        let p = document.createElement('p');
        p.classList.add('p')
        p.innerHTML = `${questions.answer[prop]}`
        divA.appendChild(p)


    }

}

//START QUIZ
function startQuiz(e) {
    //setup
    let duration = 1400;

    let corectAnswer = document.querySelector('.true');
    let wrongAnswer = document.querySelector('.false');
    let textRes = document.querySelector('.finish h1');

    //green red ball
    let span = document.querySelectorAll('.level span');



    //           check questions
    if (e.target.classList != 'p') return;
    if (e.target) {
        this.removeEventListener('click', startQuiz)
        setTimeout(() => {
            this.addEventListener('click', startQuiz);
        }, duration);
    }






    //=====True and false answers=====

    if (e.target.innerText == myQuestions[i].corect) {
        e.target.style.background = 'hsl(136, 65%, 51%)';
        setTimeout(() => {
            clear()
            createQuiz(myQuestions[i])
        }, duration)
        i++
        //corect answer  and  green ball
        corectAnswer.innerHTML = `Corect ${corect++} `
        if (true) {
            span[i - 1].style.background = 'hsl(136, 65%, 51%)';
        }


        //end of test
        if (i + 1 > 12) {
            clear()
            if (corect <= 5 && wrong > 1) {
                text = `Your score is less than 50% `
            }

            else if (corect <= 5 && wrong > 1) {
                text = `Your score is  50% not bad `

            }
            else if (corect >= 5 && wrong > 1) {
                text = `Your score is more than 50% very good :)`

            }
            else if (corect >= 11) {

                text = `Your score is 100% you are smart :)`
            }
            textRes.innerHTML = text;
            clear()
        }
    }


    else {

        e.target.style.background = '#df0101';
        setTimeout(() => {
            clear()
            createQuiz(myQuestions[i])

        }, duration)
        i++
        //wrong answer and red ball
        wrongAnswer.innerHTML = `Wrong ${wrong++} `

        if (true) {
            span[i - 1].style.background = '#df0101';
        }

    }



}



//====REMOVE TEXT=====
function clear() {
    divA.innerHTML = '';
    divQ.innerHTML = '';
}

//====CLOSE BUTTON===== 
function closeBtn() {
    this.remove()
    document.querySelector('.layout').remove();
    document.querySelector('#quiz').style.transform = 'translate3d(0,0%,0)';
    clear()
    createQuiz(myQuestions[0])


}
