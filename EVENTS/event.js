// Event
// click event
// submit event
// onload event
// scroll event
// mouse event(mousein , mouseout,mousemove)
// keyboard event(keypress,keyup, keydown)

let button = document.querySelector('.A');

function handleClick() {
    // e.preventDefault();
    let person = document.querySelector(".one").value
    let email = document.querySelector(".two").value
    let address = document.querySelector(".three").value
    let country = document.querySelector(".four").value
    console.log(person);
    console.log(email);
    console.log(address);
    console.log(country);

    if (!person && !email && !address && !country){
       return
    } else {
       return alert("Congratulations " + person + " , You have successfully submitted")
    }
}

// button.addEventListener('click', handleClick);

// let form = document.querySelector('.form');
// function handleSubmit() {
//     alert('contact you soon')
    
// }
// form.addEventListener('submit', handleSubmit);
let but = document.querySelector('.B');

function changeMode() {
    console.log('click');
    document.body.classList.toggle('darkmode');

    if (but.innerHTML === 'DARK MODE'){
    but.innerHTML = 'LIGHT MODE';
    } else {
        but.innerHTML = 'DARK MODE';
    }
}

but.addEventListener('click', changeMode);

// let you = document.querySelector('.form label')()
// let form = document.querySelector('.one')
// if(button.required==='filled completed'){
//     button = 'successfully submitted';
//     }else{
//         button = 'fill the spaces'
//     }
    
    