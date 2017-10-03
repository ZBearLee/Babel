const str = '您好!';

let func = () => {
    console.log('bbb');
}

const appEle = document.querySelector('#app');
const foods = ['pear', 'apple', 'bread', 'rice'];
appEle.innerHTML = foods.map(food => {
    return `<div>${food}</div>`
}).join('')
