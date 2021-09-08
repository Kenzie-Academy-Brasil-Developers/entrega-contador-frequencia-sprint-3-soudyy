const button = document.getElementById("countButton");
const letter = document.getElementById("lettersDiv");

const letterCounts = {};
const wordCounts = {};

const show = document.createElement("p");

function letterCount() {

    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/\s/g, '')
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    typedText = typedText.split('')

    let currentLetter = '';

    for (let i = 0; i < typedText.length; i++) {

        currentLetter = typedText[i];

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

    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();

    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    typedText = typedText.split(/\s/);

    let currentWord = '';
    for (let i = 0; i < typedText.length; i++) {

        currentWord = typedText[i];

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