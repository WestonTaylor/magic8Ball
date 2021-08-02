const form = document.createElement('form');
document.body.appendChild(form);

const askButton = document.createElement('button');
form.appendChild(askButton);
askButton.style.height = '25px';
askButton.style.width = '100px';
askButton.innerText = 'Ask Me';

const askInput = addInput('input', 'Ask me anything!');

let randomNumber = Math.floor((Math.random() * 20) + 1);

let imageArray = new Array();

imageArray[0] = new Image();
imageArray[0].src = 'images/magic8ball_1.png';

imageArray[1] = new Image();
imageArray[1].src = 'images/magic8ball_2.png';

imageArray[2] = new Image();
imageArray[2].src = 'images/magic8ball_3.png';

imageArray[3] = new Image();
imageArray[3].src = 'images/magic8ball_4.png';

imageArray[4] = new Image();
imageArray[4].src = 'images/magic8ball_5.png';

imageArray[5] = new Image();
imageArray[5].src = 'images/magic8ball_6.png';

imageArray[6] = new Image();
imageArray[6].src = 'images/magic8ball_7.png';

imageArray[7] = new Image();
imageArray[7].src = 'images/magic8ball_8.png';

imageArray[8] = new Image();
imageArray[8].src = 'images/magic8ball_9.png';

imageArray[9] = new Image();
imageArray[9].src = 'images/magic8ball_10.png';

imageArray[10] = new Image();
imageArray[10].src = 'images/magic8ball_11.png';

imageArray[11] = new Image();
imageArray[11].src = 'images/magic8ball_12.png';

imageArray[12] = new Image();
imageArray[12].src = 'images/magic8ball_13.png';

imageArray[13] = new Image();
imageArray[13].src = 'images/magic8ball_14.png';

imageArray[14] = new Image();
imageArray[14].src = 'images/magic8ball_15.png';

imageArray[15] = new Image();
imageArray[15].src = 'images/magic8ball_16.png';

imageArray[16] = new Image();
imageArray[16].src = 'images/magic8ball_17.png';

imageArray[17] = new Image();
imageArray[17].src = 'images/magic8ball_18.png';

imageArray[18] = new Image();
imageArray[18].src = 'images/magic8ball_19.png';

imageArray[19] = new Image();
imageArray[19].src = 'images/magic8ball_20.png';

function addInput(type, placeholder) {
    const input = document.createElement(type);
    form.appendChild(input);
    input.placeholder = placeholder;
};

askButton.addEventListener(('click'), function (event) {
    event.preventDefault();
    console.log(randomNumber);
    switch(randomNumber) {
        case 1:
             document.body.appendChild(imageArray[0])
            break;
        case 2:
             document.body.appendChild(imageArray[1])
            break;
        case 3:
             document.body.appendChild(imageArray[2])
            break;
        case 4:
             document.body.appendChild(imageArray[3])
            break;
        case 5:
             document.body.appendChild(imageArray[4])
            break;
        case 6:
             document.body.appendChild(imageArray[5])
            break;
        case 7:
             document.body.appendChild(imageArray[6])
            break;
        case 8:
             document.body.appendChild(imageArray[7])
            break;
        case 9:
             document.body.appendChild(imageArray[8])
            break;
        case 10:
             document.body.appendChild(imageArray[9])
            break;
        case 11:
             document.body.appendChild(imageArray[10])
            break;
        case 12:
             document.body.appendChild(imageArray[11])
            break;
        case 13:
             document.body.appendChild(imageArray[12])
            break;
        case 14:
             document.body.appendChild(imageArray[13])
            break;
        case 15:
             document.body.appendChild(imageArray[14])
            break;
        case 16:
             document.body.appendChild(imageArray[15])
            break;
        case 17:
             document.body.appendChild(imageArray[16])
            break;
        case 18:
             document.body.appendChild(imageArray[17])
            break;
        case 19:
             document.body.appendChild(imageArray[18])
            break;
        case 20:
             document.body.appendChild(imageArray[19])
            break;
    }
});

 