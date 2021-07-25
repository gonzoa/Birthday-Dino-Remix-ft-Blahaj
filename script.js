const blahaj = document.getElementById("blahaj");
const obstacle = document.getElementById("obstacle");

function jump(){
  if (blahaj.classList != "jump") {
    blahaj.classList.add("jump");

    setTimeout(function (){
      blahaj.classList.remove("jump")
  }, 300);
}
}

let isAlive=setInterval(function (){
  

  let blahajTop= window.getComputedStyle(blahaj).getPropertyValue("top");
  

    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

      
    
}, 10)
document.addEventListener("keydown", function(event){
  jump();
});

