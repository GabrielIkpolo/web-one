// Our Scripts begins here 

let user = document.querySelector('.user');

let contactUs = document.querySelector('.first-p');

let btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    contactUs.textContent = "Contact Us " + user.value;
    user.value = "";
});

// New calc 

let firstInput = document.querySelector('.one');
let secondInput = document.querySelector('.two');
let result = document.querySelector('.result');
let getResult = document.querySelector('.btn2');

let addValues = ()=>{
    return parseInt(firstInput.value) + parseInt(secondInput.value);
}

getResult.addEventListener('click', ()=>{
    console.log(` We have => ${firstInput.value} ${secondInput.value}`);
    console.log(result.value);
    result.value = addValues();
});











window.addEventListener('load', () => {
    // alert("hi");
});

