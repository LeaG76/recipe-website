var borderRadiusValues = [
    '71% 29% 39% 61% / 32% 40% 60% 68%',
    '30% 70% 70% 30% / 30% 30% 70% 70%',
    '20% 80% 30% 60% / 80% 30% 60% 20% ',
];

function getRandomBorderRadius() {
    var randomIndex = Math.floor(Math.random() * borderRadiusValues.length);
    return borderRadiusValues[randomIndex];
}

random = getRandomBorderRadius();

const picture = document.querySelector('.div-category-picture');
const div = document.querySelector('.div-category-picture::before');

if(picture) {
    picture.style.borderRadius = random;
}
if(div) {
    div.style.borderRadius = random
}