function contactUs(event){
    event.preventDefault();
    let input = document.querySelector("#name");
    console.log(input.value);

}


let form = document.querySelector ("form");
form.addEventListener('submit',contactUs);
