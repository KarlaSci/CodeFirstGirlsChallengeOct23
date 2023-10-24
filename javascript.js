const quotes = [
    'It is only with the heart that one can see rightly; what is essential is invisible to the eye   <a href="https://www.amazon.co.uk/Little-Prince-Illustrations-Macmillan-Collectors/dp/1909621552/ref=sr_1_2_sspa?crid=QNW9ONL0G4C3&keywords=the+little+prince&qid=1698044641&sprefix=the+little+princ%2Caps%2C268&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"> The Little Prince </a>, <a href="https://en.wikipedia.org/wiki/Antoine_de_Saint-Exup%C3%A9ry">Antoine de Saint-Exupéry </a>',
    'Beware; for I am fearless, and therefore powerful.- <br/> Mary Shelley Frankenstein <a href="google.com">Google </a>',
    'Love is or it ain\’t. Thin love ain\’t love at all. — Toni Morrison, Beloved'
]

function newQuote() {
let quoteNumber= Math.floor(Math.random()*(quotes.length));

console.log("ji")
document.getElementById('quoteDisplay').innerHTML=quotes[quoteNumber];

}




window.onload= newQuote;