let urscore = 0;
let oppscore = 0;
let score = 5;
let dis = document.querySelectorAll('.choice');
console.log(dis);
function mychoice(urchoice) {
  console.log(urchoice);

  const choice = ["stone", "paper", "scissor"];
  const oppchoice = choice[Math.floor(Math.random() * 3)];
  console.log(oppchoice);
  if (urchoice === oppchoice) {
    document.getElementById("disRes").textContent = "Tie";
    document.getElementById("disRes").style.backgroundColor = "gray";
  } else if (
    (urchoice === "stone" && oppchoice === "scissor") ||
    (urchoice === "paper" && oppchoice === "stone") ||
    (urchoice === "scissor" && oppchoice === "paper")
  ) {
    urscore++;
  } else {
    oppscore++;
  }
  document.getElementById('us').textContent = urscore;
  document.getElementById('os').textContent = oppscore;


  if (urscore === score) {
      document.getElementById("disRes").textContent = "You Won";
      document.getElementById("disRes").style.backgroundColor = "green"; 
    for(let i of dis){
        i.style.pointerEvents= 'none'
    }
   
  } else if (oppscore === score) {
      document.getElementById("disRes").textContent = "Opp Won";
      document.getElementById("disRes").style.backgroundColor = "green";
      for(let i of dis){
        i.style.pointerEvents= 'none'
    }
  }
}

function reset() {
  urscore = 0;
  oppscore = 0;
  document.getElementById("disRes").textContent = "";
  document.getElementById("disRes").style.backgroundColor = "white";
  document.getElementById('us').textContent = 0;
  document.getElementById('os').textContent = 0;
  for(let i of dis){
    i.style.pointerEvents= 'all'
}
}
