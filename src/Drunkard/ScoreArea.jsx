import React from "react";

const ScoreArea = ({ score }) => {
  return (
    <div className="score-area">
      <span>Score: </span>
      <span className="score">{score}</span>
    </div>
  );
};

export default ScoreArea;

// const wordText = document.querySelector(".word"),
//     hintText = document.querySelector(".hint span"),
//     timeText = document.querySelector(".time b"),
//     inputField = document.querySelector("input"),
//     refreshBtn = document.querySelector(".refresh-word"),
//     checkBtn = document.querySelector(".check-word"),
//     contentBox = document.querySelector(".container .content"),
//     startArea = document.querySelector(".startArea"),
//     scoreArea = document.querySelector(".score"),
//     modalContent = document.querySelector(".modal-content")

// let modal = document.getElementById("myModal")
// let btn = document.getElementById("myBtn");
// let span = document.getElementsByClassName("close")[0];
// let modalText = document.getElementById("modalText");

// let correctWord, timer;
// let score = 0

// const initTimer = maxTime => {
//     clearInterval(timer)
//     timer = setInterval(() => {
//         if (maxTime > 0) {
//             maxTime--
//             return timeText.innerText = maxTime
//         }
//         modal.style.display = "block"
//         modalContent.classList.add("modal-wrong")
//         modalText.innerHTML = `<br> Time off! <b>${correctWord.toUpperCase()}</b> was the correct word`
//         endGame()
//     }, 1000)
// }

// const start = () => {
//     contentBox.style.display = "block"
//     startArea.style.display = "none"
// initGame()
// }

// const endGame = () => {
//     clearInterval(timer)
//     contentBox.style.display = "none"
//     startArea.style.display = "block"
//     modal.style.display = "block"
//     modalContent.classList.remove("modal-correct")
//     modalContent.classList.add("modal-wrong")
//     modalText.innerHTML = `
//     <center><br>Time off! <b>${correctWord.toUpperCase()}</b> was the correct word
//     <br>You lost the game!
//     </center>
//     `
// }

// const winGame = () => {
//     clearInterval(timer)
//     contentBox.style.display = "none"
//     startArea.style.display = "block"
//     modal.style.display = "block"
//     modalContent.classList.add("modal-correct")
//     modalText.innerHTML = `<br><center>Congrats! You Win the game!!</center>`
// }

// const initGame = () => {
//     initTimer(30)
//     let randomObj = words[Math.floor(Math.random() * words.length)]
//     let wordArray = randomObj.word.split("")
//     for (let i = wordArray.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1))
//         [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]
//     }

//     wordText.innerText = wordArray.join("")
//     hintText.innerText = randomObj.hint
//     correctWord = randomObj.word.toLowerCase()
//     inputField.value = ""
//     inputField.setAttribute("maxlength", correctWord.length)
//     scoreArea.innerHTML = score

//     if (score > 9) {
//         winGame()
//     }
// }

// const checkWord = () => {
//     let userWord = inputField.value.toLowerCase()

//     if (!userWord) {
//         modal.style.display = "block"
//         modalContent.classList.remove("modal-wrong")
//         modalContent.classList.remove("modal-correct")
//         return modalText.innerHTML = `<br>Please enter the word to check!`
//     }

//     if (userWord !== correctWord) {
//         if (score >= 1) {
//             score = score - 1
//             scoreArea.innerHTML = score
//         }
//         modal.style.display = "block"
//         modalContent.classList.add("modal-wrong")
//         return (modalText.innerHTML = `<br> Oops <b>${userWord}</b> is not the correct word`);
//     } else {
//         modal.style.display = "block"
//         modalContent.classList.remove("modal-wrong")
//         modalContent.classList.add("modal-correct")
//         modalText.innerHTML = `<br>Congrats! <b>${correctWord.toUpperCase()}</b> is the correct word`
//         score++
//     }

//     initGame()
// }

// refreshBtn.addEventListener("click", initGame)
// checkBtn.addEventListener("click", checkWord)

// // When the user clicks on the X to close modal
// span.onclick = function () {
//     modal.style.display = "none"
// }

// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none"
//     }
// }
