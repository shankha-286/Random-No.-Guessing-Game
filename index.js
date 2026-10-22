let guessInput = document.querySelector("#guessInput");
let guessBtn = document.querySelector("#guessBtn");
let resetBtn = document.querySelector("#resetBtn");
let successBox = document.querySelector("#successBox");
let validationMessage = document.querySelector("#validationMessage");
let history = document.querySelector("#history");
let gameOverBox = document.querySelector("#gameOverBox");
let atmCounter = document.querySelector("#atmCounter");
let message  = document.querySelector("#message")
let missedNum = document.querySelector("#missedNum")

let attempt = 10,
  num = 0,
  originalAttm = attempt;
let show = attempt - num;

let randomNum = Math.floor(Math.random() * 100) + 1;

atmCounter.innerHTML = ` <div id="attempts"
                 class="text-3xl font-bold text-indigo-600">
                 ${show}
                 </div>`;
let attempts = document.querySelector("#attempts");

guessBtn.addEventListener("click", (e) => {
  console.log(randomNum);
  let input = guessInput.value;

  if (input === "") return;
  if (input <= 0 || input > 100) {
    validationMessage.classList.remove("hidden");
    return;
  }
  validationMessage.classList.add("hidden");

  
  if (Number(input) === randomNum) {
      successBox.classList.remove("hidden");
      guessBtn.disabled = true;
    } 
     if(Number(input) > randomNum) message.textContent = "Lower Number!!"

     if(Number(input) < randomNum) message.textContent = "Higher Number!!"
    
    
    if (show === 1) {
        gameOverBox.classList.remove("hidden");
        missedNum.innerHTML =`<h2 class="text-xl font-bold text-red-700">
                Game Over !!
                <p class="text-xl font-bold text-red-700"> Number : ${randomNum}</p>
            </h2>`
        guessBtn.disabled = true;
        return;
    }
    else{
    num++;
    show = attempt - num;
    attempts.textContent = show;
    }

  history.textContent += input + "  ";
});

resetBtn.addEventListener("click", (e) => {
  show = originalAttm;
  num = 0;
  attempts.textContent = attempt;
  successBox.classList.add("hidden");
  guessInput.value = "";
  history.textContent = "";
  validationMessage.classList.add("hidden");
  gameOverBox.classList.add("hidden");
  guessBtn.disabled = false;
  let randomNum2 = Math.floor(Math.random() * 100) + 1;
  randomNum = randomNum2;
});
