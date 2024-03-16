const createPw = document.querySelector("#createPw");
const confirmPw = document.querySelector("#confirmPw");

const alertText = document.querySelector(".text");
const alertIcon= document.querySelector(".errorIcon");
const submitBtn = document.querySelector("#button");


createPw.addEventListener("input",()=>{
  let inputValue = createPw.value.trim();
  
  if (inputValue.length >= 8) {
      confirmPw.removeAttribute("disabled");
      submitBtn.removeAttribute("disabled");        
      submitBtn.classList.add("active");
  }else{
      confirmPw.setAttribute("disabled",true);   
      submitBtn.setAttribute("disabled",true);        
      submitBtn.classList.remove("active");
      confirmPw.value = "";
      alertText.style.color = "#D93025";
      alertText.innerText = "Enter at least 8 characters";
      alertText.style.color = "#a6a6a6";
  }
});

submitBtn.addEventListener("click",()=>{
  if(createPw.value === confirmPw.value){
  alertText.innerText = "password matched";
  alertIcon.style.display = "none";


}else{
  alertText.innerText = "password didn't matched";
  alertIcon.style.display = "block";
}
});