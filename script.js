// const countdown = () => {
//     const countDate = new Date("Sept 28, 2021 00:00:00").getTime();
//     const now = new Date().getTime();
//     const gap = countDate - now;

//     // Convert to normal time from miliseconds 
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     // Calculate time left
//     const textDay = Math.floor(gap / day);
//     const textHour = Math.floor((gap % day) / hour);
//     const textMinute = Math.floor((gap % hour) / minute);
//     const textSecond = Math.floor((gap % minute) / second);

//     document.querySelector('.days').innerText = textDay;
//     document.querySelector('.hours').innerText = textHour;
//     document.querySelector('.minutes').innerText = textMinute;
//     document.querySelector('.seconds').innerText = textSecond;

//     if (gap < 10000) {

//     };

// };
// setInterval(countdown, 1000);


// calculating 2 user inputs
// function greetings(num1, num2) {
//     var result = 'Ans of ' + num1.toString() + ' ' + 'and ' + num2.toString() + ' = ' + (num2 + num1);
//     console.log(result);

// }
// var num1 = prompt('Enter your num1:');
// var num2 = prompt('Enter your num2:');
// var num1 = parseInt(num1);
// var num2 = parseInt(num2);

// greetings(num1, num2);

// printing 0-100
// var num = 0;
// while (num < 100) {
//     num += 1;
//     console.log(num);
// }


// console.log(kevin);
// console.log(kevin.friends);
// console.log(kevin['firstName']);
// back to JS course
// const kevin = {
//     firstName: 'Kevin',
//     lastName: 'Ronny',
//     job: 'Web dev',
//     birthYear: 1998,
//     friends: ["Scofield", "DJ", "Maurine", "Domie", "Derrick"],
//     isHandsome: true,
//     hasALicense: true,
// calcAge: function() {
//     // console.log(this);
//     return 2021 - this.birthYear;
// }
//     calcAge: function() {
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     },
//     state: function() {
//         return `${this.firstName} is a ${kevin.calcAge()}-year old ${this.job} and has  ${this.hasALicense ? 'a' : 'no'} licencse.`
//     }
// };
// const interestedIn = prompt('Ask me anything: ');
// kevin.location = 'Kenya';
// kevin['likes'] = 'coding';
// if (kevin[interestedIn]) {
//     console.log(kevin[interestedIn]);
// } else {
//     console.log("Check again. choose firstName");
// }
// // console.log(kevin);
// console.log('Kevin has ' + kevin.friends.length + ' friends, ' + "and his best friend is " + kevin.friends[1]);
// console.log(`${kevin.firstName} has ${kevin.friends.length} friends, and his best friend is ${kevin.friends[1]}`);
// console.log(kevin.state());
// console.log(kevin.age);

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    height: 1.69,
    mass: 78,
    calcBMI: function() {
        this.BMI = Math.floor(this.mass / this.height ** 2);
        return this.BMI;
    }
};
const john = {
    firstName: 'John',
    lastName: 'Smith',
    height: 1.95,
    mass: 92,
    calcBMI: function() {
        this.BMI = Math.floor(this.mass / this.height ** 2);
        return this.BMI;
    }
};

// if (mark.calcBMI() < john.calcBMI()) {
//     console.log(`John has a BMI of ${john.BMI} which is higher than Mark's which is ${mark.BMI}`);

// } else {
//     console.log(`Mark has a BMI of ${mark.BMI} which is higher than John's which is ${john.BMI}`);

// }

// mark.calcBMI();
// console.log(mark.BMI);

// for (let i = 0; i <= john.length; i++) {
//     console.log(john[i]);
// }

const years = [1998, 2001, 2004, 1995];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i]);
}
console.log(ages);

// continue & break

const kevin = [
    'kevin',
    'rono',
    1998,
    'young',
    true
]

console.log("----strings----");
for (let i = 0; i < kevin.length; i++) {
    if (typeof kevin[i] !== 'string') continue;
    console.log(kevin[i], typeof kevin[i]);
}

console.log("----break numbers----");
for (let i = 0; i < kevin.length; i++) {
    if (typeof kevin[i] === 'number') break;
    console.log(kevin[i], typeof kevin[i]);
}