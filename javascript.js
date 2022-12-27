const random = document.querySelector('#random');
const result = document.querySelector('.result');
const takeawayDecider = document.querySelector('#takeawayDecider');
const takeawayText = document.querySelector('.takeawayText');

random.addEventListener('click', function() {
    let generatedNumber = Math.floor(Math.random() * 10);
    if (generatedNumber === 9) {
        takeawayDecider.style.visibility = 'visible';
        result.textContent = `You're in luck! I rolled a ${generatedNumber}! You can have a takeaway today!`
    } else if (generatedNumber === 8) {
        result.textContent = `Sorry, but I rolled an ${generatedNumber}. Looks like you're cooking your own dinner tonight.`
    } else (result.textContent = `Sorry, but I rolled a ${generatedNumber}. Looks like you're cooking your own dinner tonight.`)
});

takeawayDecider.addEventListener('click', function() {
    let generatedNumber = Math.floor((Math.random() * 6)) + 1;
    if (generatedNumber === 1 || generatedNumber === 2) {
        takeawayText.textContent = 'Order from Pizza Hut!';
    } else if (generatedNumber === 3 || generatedNumber === 4 ) {
        takeawayText.textContent = 'Order from CoCo Ichi!';
    } else (takeawayText.textContent = 'Order from KFC!');
});