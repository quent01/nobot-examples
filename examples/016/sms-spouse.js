const config = require('./config');
const readLineSync = require('readline-sync');
const Twilio = require('twilio');

const NO_CHOICE_MADE = -1;

const {
    TWILIO_SID,
    TWILIO_AUTH_TOKEN,
    TWILIO_PHONE_NUMBER,
    MY_SPOUSE_NUMBER
} = config;

const client = new Twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);

const foodChoices = [
    'spag bowl 2nite',
    'chinese takeway nite',
    'pie n mash',
    'mushroom risotto',
    'pizza & fries'
];

const index = readLineSync.keyInSelect(
    foodChoices,
    'What would you like for dinner ?'
);

if(index === NO_CHOICE_MADE){
    process.exit(0);
}
const smsMessage = {
    body : `I would like ${foodChoices[index]}`,
    from : TWILIO_PHONE_NUMBER,
    to: MY_SPOUSE_NUMBER
}
console.log(`sending message : ${smsMessage.body}`);

client.messages.create(smsMessage)
    .then(
        ({sid}) => {
            console.log('SMS send. id:', sid);
        }
    )
    .catch(
        (error) => {
            console.error('Error sending Twilio message', error);
        }
    )

