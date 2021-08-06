const form = document.createElement('form');

const div = document.createElement('div');

const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
const h3 = document.createElement('h3');

document.body.appendChild(form);
div.style.padding = '25px';
form.style.padding = '25px';

const clearAllButTitle = (function() {
    div.innerHTML = '';
    form.innerHTML = '';
    document.body.innerHTML = '';
    document.body.append(h1);
    h1.innerText = 'Javascript for Beginners Final Project!';
    document.body.appendChild(form);
    form.append(askInput);
    form.append(askButton);
    document.body.appendChild(div);
});

const askInput = addInput('input', 'Ask me anything!');

const askButton = document.createElement('button');
form.appendChild(askButton);
askButton.innerText = 'Ask Me';

const askButton2 = document.createElement('button');
askButton2.innerText = 'Have another question? Click Me.'

const askButton3 = document.createElement('button');
askButton3.innerText = 'The question is, do you want to hear them?'

const askButton4 = document.createElement('button');
askButton4.innerText = "Still want to hear more?";

const eightBallStart = function () {
    document.body.appendChild(div);
    div.appendChild(answers[0]);
};

const second = 1000;

let randomNumber = Math.floor(Math.random() * 20);

let interval = setInterval(changeImage, .25 * second);

let newInterval = function() {setInterval(changeImage, .25 * second)};

let indefiniteInterval = function() {
    setInterval(changeImage, 1000 * second);
}

let stopImageChange = function() {
    clearInterval(interval);
};

let answers = new Array();

    answers[0] = new Image();
    answers[0].src = 'images/magic8ball_1.png';

    answers[1] = new Image();
    answers[1].src = 'images/magic8ball_2.png';

    answers[2] = new Image();
    answers[2].src = 'images/magic8ball_3.png';

    answers[3] = new Image();
    answers[3].src = 'images/magic8ball_4.png';

    answers[4] = new Image();
    answers[4].src = 'images/magic8ball_5.png';

    answers[5] = new Image();
    answers[5].src = 'images/magic8ball_6.png';

    answers[6] = new Image();
    answers[6].src = 'images/magic8ball_7.png';

    answers[7] = new Image();
    answers[7].src = 'images/magic8ball_8.png';

    answers[8] = new Image();
    answers[8].src = 'images/magic8ball_9.png';

    answers[9] = new Image();
    answers[9].src = 'images/magic8ball_10.png';

    answers[10] = new Image();
    answers[10].src ='images/magic8ball_11.png';

    answers[11] = new Image();
    answers[11].src = 'images/magic8ball_12.png';

    answers[12] = new Image();
    answers[12].src = 'images/magic8ball_13.png';

    answers[13] = new Image();
    answers[13].src = 'images/magic8ball_14.png';

    answers[14] = new Image();
    answers[14].src = 'images/magic8ball_15.png';

    answers[15] = new Image();
    answers[15].src = 'images/magic8ball_16.png';

    answers[16] = new Image();
    answers[16].src = 'images/magic8ball_17.png';

    answers[17] = new Image();
    answers[17].src = 'images/magic8ball_18.png';

    answers[18] = new Image();
    answers[18].src = 'images/magic8ball_19.png';

    answers[19] = new Image();
    answers[19].src ='images/magic8ball_20.png';


function changeImage() {
    var firstImage = answers[0].src;
    for(var i=0;i<answers.length-1;i++){
        answers[i].src=answers[i+1].src;
    };
    answers[answers.length-1].src=firstImage; //replace last image src with first one
};


function addInput(type, placeholder) {
    const input = document.createElement(type);
    form.appendChild(input);
    input.placeholder = placeholder;
};


eightBallStart();

askButton.addEventListener(('click'), function (event) {
    stopImageChange();
    event.preventDefault();
    const askInputResponse1 = JSON.stringify(form[0].value);
    clearAllButTitle();
    document.body.replaceChild(div, form);
    div.append(h2);
    h2.innerText = askInputResponse1;
    div.appendChild(askButton2);
    document.body.appendChild(answers[randomNumber]);
});

askButton2.addEventListener(('click'), function (event) {
    event.preventDefault();
    clearAllButTitle();
    form.innerHTML = '';
    const askInput2 = addInput('input', "I've got the answers.");
    form.appendChild(askButton3);
    eightBallStart();
    div.appendChild(h2);
    h2.style.display = 'none';
    newInterval();
});

askButton3.addEventListener(('click'), function (event) {
    const askInputResponse2 = JSON.stringify(form[0].value);
    if (h2.innerText === askInputResponse2) {
        event.preventDefault();
        alert('Asking the question again will not change your future.');
    } else {
        event.preventDefault();
        clearAllButTitle();
        document.body.replaceChild(div, form);
        div.append(h3);
        h3.innerText = askInputResponse2;
        div.appendChild(askButton4);
        document.body.appendChild(answers[randomNumber]);
        askButton4.addEventListener(('click'), function() {
            window.location.reload();
        });
    };
});