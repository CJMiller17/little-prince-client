import React from "react";

const WordScramble = ({
  currentWord,
  hint,
  timeLeft,
  input,
  setInput,
  handleCheckWord,
  initGame,
}) => {
  return (
    <>
      <p className="word">{currentWord}</p>
      <div className="details">
        <p className="hint">
          Hint: <span>{hint}</span>
        </p>
        <p className="time">
          Time Left:{" "}
          <span>
            <b>{timeLeft}</b>s
          </span>
        </p>
      </div>
      <input
        type="text"
        spellCheck="false"
        placeholder="Enter a valid word"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        maxLength={currentWord.length}
      />
      <div className="buttons">
        <button onClick={initGame} className="refresh-word">
          Refresh Word
        </button>
        <button onClick={handleCheckWord} className="check-word">
          Check Word
        </button>
      </div>
    </>
  );
};

export default WordScramble;

// // HTML portion of their code:
// <>
//   <div className="content">
//     <p className="word"></p>
//     <div className="details">
//       <p className="hint">
//         Hint: <span></span>
//       </p>
//       <p className="time">
//         Time Left:{" "}
//         <span>
//           <b>30</b>s
//         </span>
//       </p>
//     </div>
//     <input type="text" spellCheck="false" placeholder="Enter a valid word" />
//     <div className="buttons">
//       <button className="refresh-word">Refresh Word</button>
//       <button className="check-word">Check Word</button>
//     </div>
//     <div className="score-area">
//       <span>Score: </span>
//       <span className="score">0</span>
//     </div>
//   </div>
//   {/* Modal */}
//     <div className="modal" id="myModal">
//         <div className="modal-content">
//             <span className="close">&times;</span>
//             <p id="modalText"></p>
//         </div>
//   </div>

// </>

// // The JavaScript Portion of their code

// const wordText = document.querySelector(".word"),
//   hintText = document.querySelector(".hint span"),
//   timeText = document.querySelector(".time b"),
//   inputField = document.querySelector("input"),
//   refreshBtn = document.querySelector(".refresh-word"),
//   checkBtn = document.querySelector(".check-word"),
//   contentBox = document.querySelector(".container .content"),
//   startArea = document.querySelector(".startArea"),
//   scoreArea = document.querySelector(".score"),
//   modalContent = document.querySelector(".modal-content");

// let modal = document.getElementById("myModal");
// let btn = document.getElementById("myBtn");
// let span = document.getElementsByClassName("close")[0];
// let modalText = document.getElementById("modalText");

// let correctWord, timer;
// let score = 0;

// const initTimer = (maxTime) => {
//   clearInterval(timer);
//   timer = setInterval(() => {
//     if (maxTime > 0) {
//       maxTime--;
//       return (timeText.innerText = maxTime);
//     }
//     modal.style.display = "block";
//     modalContent.classList.add("modal-wrong");
//     modalText.innerHTML = `<br> Time off! <b>${correctWord.toUpperCase()}</b> was the correct word`;
//     endGame();
//   }, 1000);
// };

// const start = () => {
//   contentBox.style.display = "block";
//   startArea.style.display = "none";
//   initGame();
// };

// const endGame = () => {
//   clearInterval(timer);
//   contentBox.style.display = "none";
//   startArea.style.display = "block";
//   modal.style.display = "block";
//   modalContent.classList.remove("modal-correct");
//   modalContent.classList.add("modal-wrong");
//   modalText.innerHTML = `
//     <center><br>Time off! <b>${correctWord.toUpperCase()}</b> was the correct word
//     <br>You lost the game!
//     </center>
//     `;
// };

// const winGame = () => {
//   clearInterval(timer);
//   contentBox.style.display = "none";
//   startArea.style.display = "block";
//   modal.style.display = "block";
//   modalContent.classList.add("modal-correct");
//   modalText.innerHTML = `<br><center>Congrats! You Win the game!!</center>`;
// };

// const initGame = () => {
//   initTimer(30);
//   let randomObj = words[Math.floor(Math.random() * words.length)];
//   let wordArray = randomObj.word.split("");
//   for (let i = wordArray.length - 1; i > 0; i--) {
//     let j = (Math.floor(Math.random() * (i + 1))[(wordArray[i], wordArray[j])] =
//       [wordArray[j], wordArray[i]]);
//   }

//   wordText.innerText = wordArray.join("");
//   hintText.innerText = randomObj.hint;
//   correctWord = randomObj.word.toLowerCase();
//   inputField.value = "";
//   inputField.setAttribute("maxlength", correctWord.length);
//   scoreArea.innerHTML = score;

//   if (score > 9) {
//     winGame();
//   }
// };

// const checkWord = () => {
//   let userWord = inputField.value.toLowerCase();

//   if (!userWord) {
//     modal.style.display = "block";
//     modalContent.classList.remove("modal-wrong");
//     modalContent.classList.remove("modal-correct");
//     return (modalText.innerHTML = `<br>Please enter the word to check!`);
//   }

//   if (userWord !== correctWord) {
//     if (score >= 1) {
//       score = score - 1;
//       scoreArea.innerHTML = score;
//     }
//     modal.style.display = "block";
//     modalContent.classList.add("modal-wrong");
//     return (modalText.innerHTML = `<br> Oops <b>${userWord}</b> is not the correct word`);
//   } else {
//     modal.style.display = "block";
//     modalContent.classList.remove("modal-wrong");
//     modalContent.classList.add("modal-correct");
//     modalText.innerHTML = `<br>Congrats! <b>${correctWord.toUpperCase()}</b> is the correct word`;
//     score++;
//   }

//   initGame();
// };

// refreshBtn.addEventListener("click", initGame);
// checkBtn.addEventListener("click", checkWord);

// // When the user clicks on the X to close modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// // Words in object
