let typedText = document.getElementById("textInput").value;
const button = document.getElementById("countButton");
const letter = document.getElementById("lettersDiv")

const letterCounts = {};
const wordCounts = {};
let show = document.createElement("p")

function letterCount() {

    show.innerText = typedText
    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    let letters = typedText
    let currentLetter = '';

    for (let i = 0; i < letters.length; i++) {

        currentLetter = letters[i];

        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }

    }
    for (let letter in letterCounts) {
        const span = document.createElement("span");
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent;
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span);
    }

}

function wordCount() {

    show.innerText = typedText
    let words = typedText.toLowerCase();
    words = typedText.replace(/[^a-z'\s]+/g, "");
    words = typedText.split(/\s/);
    let currentWord = '';
    for (let i = 0; i < words.length; i++) {

        currentWord = words[i];

        if (wordCounts[currentWord] === undefined) {
            wordCounts[currentWord] = 1;
        } else {
            wordCounts[currentWord]++;
        }
    }
    for (let letter in wordCounts) {
        const span = document.createElement("span");
        const textContent = `"${letter}": ${wordCounts[letter]}, `;
        span.innerText = textContent;
        const letters = document.getElementById("wordsDiv");
        letters.appendChild(span);

    }

}
button.addEventListener("click", letterCount)
button.addEventListener("click", wordCount)