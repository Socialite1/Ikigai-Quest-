function saveChapter1(){

let love = document.getElementById("love").value;
let skill = document.getElementById("skill").value;
let paid = document.getElementById("paid").value;
let need = document.getElementById("need").value;

localStorage.setItem("love",love);
localStorage.setItem("skill",skill);
localStorage.setItem("paid",paid);
localStorage.setItem("need",need);

window.location.href="chapter2.html";

}

function saveChapter2(){

localStorage.setItem("goal",document.getElementById("goal").value);
localStorage.setItem("benefits",document.getElementById("benefits").value);
localStorage.setItem("obstacles",document.getElementById("obstacles").value);
localStorage.setItem("solutions",document.getElementById("solutions").value);
localStorage.setItem("deadline",document.getElementById("deadline").value);

window.location.href="chapter3.html";

}

function saveData(id){
let value=document.getElementById(id).value;
localStorage.setItem(id,value);
}

function next(page){
window.location.href=page;
  }

