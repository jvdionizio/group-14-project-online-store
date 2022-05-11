function sticked() {
    let logo = document.querySelector(".logo")
    let elementTop = logo.getBoundingClientRect().top;
    console.log(elementTop);
    if(elementTop < 8){
      logo.classList.add("sticked");
    } 
    else {
      logo.classList.remove("sticked");
    }
  }

  window.addEventListener("scroll",sticked);