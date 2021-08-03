const form = document.createElement('form');
document.body.appendChild(form);

const askInput = addInput('input', 'Ask me anything!');

const askButton = document.createElement('button');
form.appendChild(askButton);
askButton.style.height = '25px';
askButton.style.width = '100px';
askButton.innerText = 'Ask Me';

const askButton2 = document.createElement('button');
askButton2.style.height = '25px';
askButton2.style.width = '100px';
askButton2.innerText = 'this is actually hard'

let randomNumber = Math.floor(Math.random() * 20);

let div = document.createElement('div');
div.id = 'answers';
div.classname = 'answers';
document.body.appendChild(div);


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
answers[10].src = 'images/magic8ball_11.png';

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
answers[19].src = 'images/magic8ball_20.png';





function addInput(type, placeholder) {
    const input = document.createElement(type);
    form.appendChild(input);
    input.placeholder = placeholder;
};

askButton.addEventListener(('click'), function (event) {
    event.preventDefault();
    const askInputResponse = form[1].value;
    form.innerHTML = '';
    const newAskInput = addInput('input', 'Anything else on your mind?');
    form.appendChild(askButton2);
    div.appendChild(answers[randomNumber]);
});





