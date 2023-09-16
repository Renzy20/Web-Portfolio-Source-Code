var tablinks = document.getElementsByClassName("tab-lnks");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-lnk");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tb");
    }
    event.currentTarget.classList.add("active-lnk");
    document.getElementById(tabname).classList.add("active-tb");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxg1DOeSeuMS2JGjmaitS7wLVQD-k4u-_XmTiIpsZ1p4tqQ4ZfpOQSE4frr7l8d9fnhDg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function(){
            msg.innerHTML = ""
            form.reset()
        },5000)
      })
      .catch(error => {
        msg.innerHTML = "Message not sent! fill up the information above."
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
      })
  })