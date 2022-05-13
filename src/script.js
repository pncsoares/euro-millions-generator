// number settings
const numberOfNumbers = 5;
const minNumber = 1;
const maxNumber = 50;

// star settings
const numberOfStars = 2;
const minStar = 1;
const maxStar = 12;

function generateKey() {
    const numbers = generateNumbers();
    const stars = generateStars();

    const orderedNumbers = orderAscending(numbers);
    const orderedStars = orderAscending(stars);
    console.log('');

    showResult(orderedNumbers, orderedStars);
}

function generateNumbers() {
    let numbers = [];

    while (numbers.length < numberOfNumbers) {
        const randomInteger = generateRandomInteger(minNumber, maxNumber);

        if (numbers.indexOf(randomInteger) > -1) {
            // try again
            continue;
        }

        numbers.push(randomInteger);
    }

    return numbers;
}

function generateStars() {
    let stars = [];

    while (stars.length < numberOfStars) {
        const randomInteger = generateRandomInteger(minStar, maxStar);

        if (stars.indexOf(randomInteger) > -1) {
            // try again
            continue;
        }

        stars.push(randomInteger);
    }

    return stars;
}

function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function orderAscending(unsortedArray) {
    return unsortedArray.sort((a, b) => a - b);
}

function showResult(numbers, stars) {
    const num1 = getElement('num1');
    num1.textContent = numbers[0];

    const num2 = getElement('num2');
    num2.textContent = numbers[1];

    const num3 = getElement('num3');
    num3.textContent = numbers[2];

    const num4 = getElement('num4');
    num4.textContent = numbers[3];

    const num5 = getElement('num5');
    num5.textContent = numbers[4];

    const star1 = getElement('star1');
    star1.textContent = stars[0];

    const star2 = getElement('star2');
    star2.textContent = stars[1];
}

function getElement(elementId) {
    return document.getElementById(elementId);
}
