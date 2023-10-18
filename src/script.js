function contactUs(event){
    event.preventDefault();
    let input = document.querySelector("#name");
    alert(`We will be in contact with you soon ${input.value}!❤️🍃`);

}


let form = document.querySelector ("form");
form.addEventListener('submit',contactUs);
