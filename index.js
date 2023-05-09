document.querySelector(".check-button").addEventListener("click", handleClickCheckButton);
class VocablePair {
    constructor(de, en) {
      this.de = de;
      this.en = en;
    }
  }
var germanVocDisplay = document.querySelector(".vocable-text");
var englishVocInput = document.querySelector(".vocable-input");
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
                    new VocablePair("Schuhe", "shoes"),];
function getRandomVocPair(vocables){
                        randomIndex = Math.floor(Math.random() * vocables.length);
                        return vocables[randomIndex];
}
var currentVocPair = getRandomVocPair(vocPairs);
germanVocDisplay.textContent = currentVocPair.de;
var pressedCheck = false;

function handleClickCheckButton(){

  if(pressedCheck === false){
    console.log("!" + englishVocInput.value.trim() + "!" + currentVocPair.en);
    if(englishVocInput.value.trim() == currentVocPair.en){
      document.querySelector(".vocable-input").classList.add("right-translation");
      document.querySelector(".vocable-input").value = "Well done!";
    }
    else{
      document.querySelector(".vocable-input").classList.add("wrong-translation");
      document.querySelector(".vocable-input").value = 'Right Answer: ' + currentVocPair.en;
    }


    document.querySelector(".vocable-input").setAttribute("readonly", "readonly");
    pressedCheck = true;
    document.querySelector(".check-button").textContent = "Next";

    
  }else{
    currentVocPair = getRandomVocPair(vocPairs);
    germanVocDisplay.textContent = currentVocPair.de;
    document.querySelector(".check-button").textContent = "Check";
    document.querySelector(".vocable-input").classList.remove("wrong-translation");
    document.querySelector(".vocable-input").classList.remove("right-translation");
    document.querySelector(".vocable-input").value = "";
    document.querySelector(".vocable-input").removeAttribute("readonly");
    pressedCheck = false;
  }
}
