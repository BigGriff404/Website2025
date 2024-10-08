console.log(
 "%c @biggriff770",
 "font-weight: bold; padding: 1rem; font-size: 50px; color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)"
);

const words = ["Web", "AR", "Roku"];
const changingWord = document.getElementById("changing-word");
let currentIndex = 0;

function changeWord() {
 changingWord.style.opacity = "0";

 setTimeout(() => {
  currentIndex = (currentIndex + 1) % words.length;
  changingWord.textContent = words[currentIndex];
  changingWord.style.opacity = "1";
 }, 500);
}

setInterval(changeWord, 3000);
