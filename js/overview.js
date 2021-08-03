const form = document.createElement('form');
document.body.appendChild(form);

const askButton = document.createElement('button');
form.appendChild(askButton);
askButton.style.height = '25px';
askButton.style.width = '100px';
askButton.innerText = 'Ask Me';

const askButton2 = document.createElement('button');
askButton2.style.height = '25px';
askButton2.style.width = '100px';
// askButton2.innerText = 'I have the answers. The question is do you want to hear them?';
askButton2.innerText = 'this is actually hard'

const askInput = addInput('input', 'Ask me anything!');



let randomNumber = Math.floor((Math.random() * 20) + 1);

function addInput(type, placeholder) {
    const input = document.createElement(type);
    form.appendChild(input);
    input.placeholder = placeholder;
};

askButton.addEventListener(('click'), function (event) {
    event.preventDefault();
    const askInputResponse = form[1].value;
    console.log(randomNumber);
    console.log(askInputResponse);
    form.innerHTML = '';
    const newAskInput = addInput('input', 'Anything else on your mind?');
    form.appendChild(askButton2);
});

let div = document.createElement('div');
div.id = 'container';
div.innerText = 'wow';
div.classname = 'border pad';
document.body.appendChild(div);

