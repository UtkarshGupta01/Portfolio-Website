// Portfolio section call-to-action button

const callToPortfolio =(sectionId)=>{
  const section = document.getElementById(sectionId);
  if(section){
    section.scrollIntoView({behavior:"smooth"});
  }
}

// Input data from html form to google sheets 
const scriptURL = 'https://script.google.com/macros/s/AKfycbwAW9_knY4ELB2-pdPRrgV-gk4i5Y12uH___4nhr05eK2M6-3NgNL6rj7eNaVwcz8hm/exec';
const form = document.forms['submit-to-google-sheet'];
const successMsg = document.querySelector(".success_msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      successMsg.innerHTML = 'Message sent successfully!';
      setTimeout(function () {
        successMsg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});


// menu bar 

const menu = document.getElementById("menubar");
function openmenu(){
  menu.style.right="0";
}

function closemenu(){
  menu.style.right="-150px";

}