// Our Scripts begins here 

let user = document.querySelector('.user');

let contactUs = document.querySelector('.first-p');

let btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    contactUs.textContent = "Contact Us " + user.value;
    user.value = "";
});












window.addEventListener('load', () => {
    // alert("hi");
});

