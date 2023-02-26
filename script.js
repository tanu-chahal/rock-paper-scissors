const closeBtn = document.querySelector(".close"); //for closing the rules tab
const rules = document.querySelector(".rules"); //rules tab
const choice = document.querySelector(".choice"); //tab to choose from
const rulesBtn = [...document.querySelectorAll(".rulesBtn")]; //to open rules tab
const chooseBtn = [...document.querySelectorAll(".chooseBtn")]; //to make a choice in chice section

const final = document.querySelector(".final"); //section to display finally
const yourCircle = document.querySelector(".yourCircle"); //circle to show your pick
const picks = document.querySelector(".picks"); //your pick section
const result = document.getElementById("result");
const score = [...document.querySelectorAll(".score")];
const again = [...document.querySelectorAll(".again")];
const matchEnd = document.querySelector(".matchEnd");
const endMsg = document.querySelector(".endMsg");
const endText = document.querySelector(".endText");

window.addEventListener("DOMContentLoaded", () => {
  if (rules.classList.contains("md:hidden")) {
    choice.classList.remove("hidden");
    choice.classList.add("flex");
  }
});

closeBtn.addEventListener("click", function () {
  rules.classList.add("hidden","md:hidden");
  rules.classList.remove("flex");
  choice.classList.remove("hidden");
  choice.classList.add("flex");
  final.classList.remove("flex");
  final.classList.add("hidden");
  rulesBtn.forEach((rBtn) =>{
   //if(rBtn.classList.contains("hidden"))
   rBtn.classList.remove("hidden");
   rBtn.classList.add("block");
  })
});

rulesBtn.map((rBtn) => {
  rBtn.addEventListener("click", function () {
    if (rules.classList.contains("md:hidden")) {
      rules.classList.remove("hidden","md:hidden");
      rules.classList.add("flex");
      rBtn.classList.add("hidden");
      rBtn.classList.remove("block");
    } else {
      rules.classList.remove("hidden");
      rules.classList.add("flex");
      rBtn.parentElement.classList.add("hidden");
      rBtn.parentElement.classList.remove("flex");
      rBtn.classList.add("hidden");
      rBtn.classList.remove("block");
    }
  });
});

chooseBtn.map((cBtn) => {
  cBtn.addEventListener("click", function (e) {
    final.classList.remove("hidden");
    final.classList.add("flex");
    choice.classList.add("hidden");
    choice.classList.remove("flex");

    let text = e.currentTarget.dataset.option;
    let clr = e.currentTarget.parentElement.dataset.borderClr;

    let comPick = Math.floor(Math.random() * 3); //computer randomly picks a no. when we make a choice
    let comImg;
    let bClr;
    let borderColour;
    if (comPick === 0) {
      comImg = "paper";
      bClr = "#4865f4";
    } else if (comPick === 1) {
      comImg = "scissors";
      bClr = "#ec9e0e";
      //score.forEach(s=> s.textContent=`${}`)
    } else {
      comImg = "rock";
      bClr = "#dc2e4e";
    }

    picks.innerHTML = `<div class="your flex flex-col justify-center items-center mx-5 max-w-24">
        <div  class="yourCircle p-4 bg-white rounded-full h-24 w-24 flex flex-row items-center justify-center border-8 border-[${clr}] shadow-[0px_4px_2px_inset] shadow-slate-400 md:h-40 md:w-40 md:border-[18px] md:shadow-[0px_7px_2px_inset] md:shadow-slate-400 md:p-7"><img class="md:h-20" id="yourChoice" src="./images/icon-${text}.svg" alt="scissors"></div>
        <span class="font-[600] text-white my-3 text-sm">YOU PICKED</span>
     </div>
     <div class="computer flex flex-col justify-center items-center mx-5 max-w-20">
        <div class="circle p-4 bg-white rounded-full h-24 w-24 flex flex-row items-center justify-center border-8 border-[${bClr}] shadow-[0px_4px_2px_inset] shadow-slate-400 md:h-40 md:w-40 md:border-[18px] md:shadow-[0px_7px_2px_inset] md:shadow-slate-400 md:p-7"><img class="md:h-20" id="compChoice" src="./images/icon-${comImg}.svg" alt="scissors"></div>
        <span class="font-[600] text-white my-3 text-sm">COMPUTER PICKED</span>
     </div>`;

    if (
      (text === "paper" && comImg === "scissors") ||
      (text === "rock" && comImg === "paper") ||
      (text === "scissors" && comImg === "rock")
    ) {
      result.textContent = "YOU LOST 👎🏻";
      score.forEach((s) => {
        s.textContent = `${Number(s.textContent) - 1}`;
        return;
      });
      if (score[1].textContent == "-5") {
        matchEnd.classList.remove("hidden");
        matchEnd.classList.add("z-20");
        endMsg.textContent = "YOU LOST THE MATCH 😟";
        endText.textContent = "Better Luck Next Time.";
        final.classList.add("bg-[#49a6e9]");
        score[0].textContent = "0";
        score[1].textContent = "0";
      }
    } else if (text === comImg) {
      result.textContent = "TIE ROUND 🤝🏻";
    } else {
      result.textContent = "YOU WON 🥳";
      score.forEach((s) => {
        s.textContent = `${Number(s.textContent) + 1}`;
        return s.textContent;
      });
      //To show result once the match has ended
      if (score[1].textContent == "5") {
        matchEnd.classList.remove("hidden");
        matchEnd.classList.add("z-20");
        endMsg.textContent = "YOU WON THE MATCH 🥳";
        endText.textContent = "Many Many Congratulations 🎉";
        final.classList.add("bg-[#49a6e9]");
        score[0].textContent = "0";
        score[1].textContent = "0";
      }
    }
  });
});

again.forEach((agBtn) => {
  //for two play again buttons
  agBtn.addEventListener("click", function () {
    final.classList.remove("flex");
    final.classList.add("hidden");
    choice.classList.remove("hidden");
    choice.classList.add("flex");
  });
});
