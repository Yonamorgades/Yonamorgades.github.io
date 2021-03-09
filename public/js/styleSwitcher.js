
const styles = document.querySelectorAll(".alternate-style");
      totalStyles=styles.length;

function setActiveStyle(color){
    for (let i = 0;i < totalStyles; i++){
        if(color === styles[i].getAttribute("title")){
            styles[i].removeAttribute("disabled");
        }
        else{
            styles[i].setAttribute("disabled","true");
        }
    }
}


// BODY SKINS
const bodySkins = document.querySelectorAll(".body-skin");
      totalBodySkins = bodySkins.length;

      for(let i = 0 ; i < totalBodySkins; i++){
          bodySkins[i].addEventListener("change",function(){
            if(this.value === 'dark'){
                document.body.className = "dark";
            }
            else{
                document.body.className = "";
            }
          })
      }

document.querySelector(".toogle-style-swichter").addEventListener('click',() =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})