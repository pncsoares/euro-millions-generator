import settings from '../data/settings.json';

export function generateKey() {
    const numbers = generateNumbers();
    const stars = generateStars();

    const orderedNumbers = orderAscending(numbers);
    const orderedStars = orderAscending(stars);

    return {
        orderedNumbers,
        orderedStars,
    };
}

function generateNumbers() {
    let numbers = [];

    while (numbers.length < settings.number.numberOfNumbers) {
        const randomInteger = generateRandomInteger(
            settings.number.minNumber,
            settings.number.maxNumber
        );

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

    while (stars.length < settings.star.numberOfStars) {
        const randomInteger = generateRandomInteger(
            settings.star.minStar,
            settings.star.maxStar
        );

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
