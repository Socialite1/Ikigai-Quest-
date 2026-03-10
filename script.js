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
