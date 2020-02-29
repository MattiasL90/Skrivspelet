function start()
{
    const list = ['Vinden viner över sällsamma ruiner, över berg och slätter, dagar som nätter. Ger världen form inför den kommande storm, likt gudars sång, skall bli dess undergång. Svart som natten, blank likt vatten, i skyn du häver då Allfader kräver. Åter resas skall nu han, som i misteln döden fann. Sonas med sin ene broder, den blinde född av samma moder. Satt att råda är de båda, bröders hand över evigt land.',
        'Se de mäktiga moln, vilkas fjärran höga toppar stolta, skimrande resa sig, vita som vit snö! Lugna glida de fram för att slutligen lugnt dö sakta lösande sig i en skur av svala droppar. Majestätiska moln - genom livet, genom döden gå de leende fram i en strålande sols sken utan skymmande oro i eter så klart ren, gå med storstilat, stilla förakt för sina öden.',
        'Så säger jag er, mina vänner, att jag trots dagens och morgondagens svårigheter har en dröm. Det är en dröm med djupa rötter i den amerikanska drömmen om att denna nation en dag kommer att resa sig och leva ut den övertygelsens innersta mening, som vi håller för självklar: Att alla människor är skapade med samma värde.'];

    getText(list);
    startStop();
}

let story;
let charPlace = 0;
let currentChar;
let right = 0;
let errors = 0;
let placeOne = 0;
let placeTwo = 1;
let typedEntries = 0;
let elapsedMinutes = 1;
let time = 0;
let ptime = 0;
let started = false;
let paused = false;

function countTimer(){
    time++;
    if (time === 60)
    {
        time = 0;
        elapsedMinutes++;
    }
}

function startStop() {
    let startStopButton = document.querySelector('.startStop');
    startStopButton.addEventListener('click', event => {
        let startStopButton = document.querySelector('.startStop');
        if (started === false) {
            // Spelet har inte varit igång
            startStopButton.setAttribute('src', 'img/stop.png')
            started = true;
            time = setInterval(countTimer, 1000)
            checkTyping();
        }
        else if (started === true) {
            if (paused === true) {
                // Spelet är pausat men ska startas
                startStopButton.setAttribute('src', 'img/stop.png');
                time = ptime;
                paused = false;
            }
            else if (paused === false) {
                // Spelet har startats men pausas
                startStopButton.setAttribute('src', 'img/start.png');
                ptime = time;
                paused = true;
            }
        }
    });
}


function checkTyping(){
        let letterBox = document.querySelector('.letterBox');
        letterBox.addEventListener('keyup', event => {
            if (paused === false) {
                let space = false;
                let input = event.key;
                currentChar = story[charPlace].toLowerCase();
                if (input === ' ') {
                    document.querySelector('.letterBox').value = '';
                    space = true;
                    typedEntries--;
                }
                typedEntries++;
                charPlace++;
                placeOne++;
                placeTwo++;
                if (input === currentChar) {
                    if (space === false) {
                        right++;
                    }
                } else {
                    if (space === false) {
                        errors++;
                    }
                }
                updateScore();
                const result = document.querySelector('.textBox');
                let fixedText = story;
                fixedText = "<span class='completedText'>" + fixedText.substring(0, placeOne) + "</span>" + "<span class='highlight'>" + fixedText.substring(placeOne, placeTwo) + "</span>" + story.substring(placeTwo);
                result.innerHTML = fixedText;
            }
        });
}

function updateScore() {
    document.getElementById('errors').innerHTML = 'Errors: ' + "<span class='yellow'>" + errors.toFixed(0).toString() + "</span>";
    document.getElementById('gWpm').innerHTML = 'Gross WPM: ' + "<span class='yellow'>" + calculateWPM(1).toFixed(0).toString()  + "</span>";
    document.getElementById('nWpm').innerHTML = 'Net WPM: ' + "<span class='yellow'>" + calculateWPM(2).toFixed(0).toString()  + "</span>";
    document.getElementById('accuracy').innerHTML = 'Accuracy: ' + "<span class='yellow'>" + calculateAccuracy().toFixed(0).toString() + '%'  + "</span>";
}


function calculateWPM(number) {
    let wpm = (typedEntries / 5) / elapsedMinutes;
    // grossWPM
    if (number === 1){
        return wpm;
    }
    // netWPM
    else if (number === 2) {
        if (wpm - (errors / elapsedMinutes) <= 0){
            return 0;
        }
        else {
            return (wpm - (errors / elapsedMinutes));
        }
    }
}

function calculateAccuracy(){
    let total = right + errors;
    return right / total * 100;
}

function resetScore(){
    document.getElementById('errors').innerHTML = 'Errors: ' + 0;
    document.getElementById('gWpm').innerHTML = 'Gross WPM: ' + 0;
    document.getElementById('nWpm').innerHTML = 'Net WPM: ' + 0;
    document.getElementById('accuracy').innerHTML = 'Accuracy: ' + 0 + '%';
}

function countChars(story) {
    let count = 0;
    for (let i = 0; i < story.length; ++i){
        count++;
    }
    return count;
}

function countWords(story) {
    let count = 0;
    for (let i = 0; i < story.length; ++i){
        if (story[i] === ' ') {
            count++;
        }
    }
    return count;
}


function getText(list){
    const selectElement = document.querySelector('.texts');
    selectElement.addEventListener('change', (event) => {
        const result = document.querySelector('.textBox');
        const title = document.querySelector('.title');
        const author = document.querySelector('.author');
        if (event.target.value === 'time') {
            story = list[0];
            title.innerHTML = 'Förändringens Tid';
            author.innerHTML = 'Erik Ström (' + countChars(story) + 'words, ' + countWords(story) + ' chars' + ')';
        }
        else if (event.target.value === 'cloud') {
            story = list[1];
            title.innerHTML = 'Moln';
            author.innerHTML = 'Karin Boye (' + countChars(story) + 'words, ' + countWords(story) + ' chars' + ')';
        }
        else if (event.target.value === 'dream') {
            story = list[2];
            title.innerHTML = 'Jag har en dröm';
            author.innerHTML = 'Martin Luther King Jr. (' + countChars(story) + 'words, ' + countWords(story) + ' chars' + ')';
        }
        let fixedText = story;
        fixedText = "<span class='highlight'>" + fixedText.substring(0,1) + "</span>" + fixedText.substring(0 + 1);
        result.innerHTML = fixedText;
        resetScore();
    });
}

window.addEventListener("load", start, false);


