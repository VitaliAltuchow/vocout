class VocablePair {
  constructor(de, en) {
    this.de = de;
    this.en = en;
  }
}

function getRandomVocPair(vocables){
  randomIndex = Math.floor(Math.random() * vocables.length);
  return vocables[randomIndex];
}


var vocPairs = [new VocablePair("Küche", "kitchen"),
                    new VocablePair("Jacke", "jacket"),
                    new VocablePair("Katze", "cat"),
                    new VocablePair("Buch", "book"),
                    new VocablePair("Deutschland", "Germany"),
                    new VocablePair("Baum", "tree"),
                    new VocablePair("Gabel", "fork"),
                    new VocablePair("Hund", "dog"),
                    new VocablePair("Auto", "car"),
                    new VocablePair("Fahrrad", "bicycle"),
                    new VocablePair("Schuhe", "shoes")];

var germanVocDisplay = document.querySelector(".vocable-german");
var englishVocInput = document.querySelector(".vocable-english-user-input");
var checkOrNextButton = document.querySelector(".check-or-next-button");

var currentVocPair = getRandomVocPair(vocPairs);
germanVocDisplay.textContent = currentVocPair.de;
checkOrNextButton.textContent = "Check";


function handleClickCheckOrNextButton(){

  if(checkOrNextButton.textContent === "Check"){
    /* if text of checkOrNextButton was 'Check', check my input and show me the result */

    if(englishVocInput.value.trim() == currentVocPair.en){
      englishVocInput.classList.add("right-translation");
      englishVocInput.value = "Well done!";
    }
    else{
      englishVocInput.classList.add("wrong-translation");
      englishVocInput.value = 'Right Answer: ' + currentVocPair.en;
    }

    englishVocInput.setAttribute("readonly", "readonly");
    checkOrNextButton.textContent = "Next";

  }else{
    /* else if text of checkOrNextButton was 'Next', give me the next vocable */

    currentVocPair = getRandomVocPair(vocPairs);
    germanVocDisplay.textContent = currentVocPair.de;
    checkOrNextButton.textContent = "Check";
    englishVocInput.classList.remove("wrong-translation");
    englishVocInput.classList.remove("right-translation");
    englishVocInput.value = "";
    englishVocInput.removeAttribute("readonly");
  }
}

checkOrNextButton.addEventListener("click", handleClickCheckOrNextButton);