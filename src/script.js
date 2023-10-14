function showMessage(){
      alert(`Hello ${userName}! We'll be in touch soon!`);
}


function tellUser(event){
  event.preventDefault();
  
  let userNameInput = document.getElementById("name");
  let userName = userNameInput.value;

  showMessage(userName);
}
var form = document.getElementById("myForm;")
document.getElementById("formbtn").addEventListener("click", tellUser);

