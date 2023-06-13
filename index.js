
const quotes = [{
    quote: '“I am not afraid of storms, for I am learning how to sail my ship.”',
author: "Louisa May Alcott"
},
{
    quote: '"To choose doubt as a philosophy of life is akin to choosing immobility as a means of transportation"',
    author: "Yann Martel"
},
{
    quote: '“It\s the possibility of having a dream come true that makes life interesting.”',
author: "Paulo Coelho"
},
{
    quote: '“What\’s the point of having a voice if you\’re gonna be silent in those moments you shouldn\’t be?”',
author: "Angie Thomas"
},
{
    quote: '“Nothing in the world is ever completely wrong. Even a stopped clock is right twice a day.”',
author: "Paulo Coelho"
},
{
    quote: '“Just think happy thoughts and you\’ll fly.”',
author: "J.M. Barrie"
},
{
    quote: '“Don\’t let anyone ever make you feel like you don\’t deserve what you want.”',
author: "The Empire Strikes Back"
},
{
    quote: '“Life is not the amount of breaths you take. It’s the moments that take your breath away.”',
author: '“Hitch” (2005)'
},
{
    quote: '“It\’s only after we\’ve lost everything that we\’re free to do anything.”',
author: '“Fight Club” (1999)'
},
{
    quote: '“At some point you\’ve got to decide for yourself who you gonna be. Can\’t let nobody make that decision for you.”',
author: '“Moonlight” (2016)'
},]


let person = document.querySelector(".person");
let mainQuote = document.querySelector(".text-area")  ;
let nextQuote = document.querySelector("#next-button");


nextQuote.addEventListener('click', ()=>  {
    let randomQuote = Math.floor(Math.random()* quotes.length + 1);
    person.textContent = quotes[randomQuote].author;
    mainQuote.textContent = quotes[randomQuote].quote;

})

