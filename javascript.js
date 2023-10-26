const quotes = [
    'It is only with the heart that one can see rightly; what is essential is invisible to the eye   <a id="quoteLink" href="https://www.amazon.co.uk/Little-Prince-Illustrations-Macmillan-Collectors/dp/1909621552/ref=sr_1_2_sspa?crid=QNW9ONL0G4C3&keywords=the+little+prince&qid=1698044641&sprefix=the+little+princ%2Caps%2C268&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"> The Little Prince </a>, <a id="quoteLink" href="https://en.wikipedia.org/wiki/Antoine_de_Saint-Exup%C3%A9ry">Antoine de Saint-Exupéry </a>',
    ' And, now that you don’t have to be perfect you can be good-  <a id="quoteLink" href="https://www.amazon.co.uk/dp/0140186395/ref=as_li_tf_il?ie=UTF8&linkCode=gg2&creativeASIN=0140186395&tag=boorio-20&creative=399349&camp=217145"> East of Eden </a>, <a id="quoteLink" href="https://en.wikipedia.org/wiki/John_Steinbeck">John Steinbeck </a>',
    ' The worst enemy to creativity is self-doubt - <a id="quoteLink" href="https://www.amazon.com/gp/product/0385720254/ref=as_li_tf_il?ie=UTF8&amp&tag=boorio-20&amp&linkCode=as2&amp&camp=217145&amp&creative=399349&amp&creativeASIN=0385720254"> The Unabridged Journals of Sylvia Plath </a>, <a id="quoteLink" href="https://en.wikipedia.org/wiki/Sylvia_Plath">Sylvia Plath </a>',
    ' Beware; for I am fearless, and therefore powerful-  <a id="quoteLink" href="https://www.amazon.co.uk/Frankenstein-Mary-Shelley/dp/1673287883/ref=sr_1_1_sspa?crid=2WSWALYWFQRV5&keywords=Frankenstein&qid=1698259121&s=books&sprefix=frankenstein%2Cstripbooks%2C74&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"> Frankenstein </a>, <a id="quoteLink" href="https://en.wikipedia.org/wiki/Mary_Shelley"> Mary Shelley</a>',
    ' It was all very well to be ambitious, but ambition should not kill the nice qualities in you-  <a id="quoteLink" href="https://www.amazon.co.uk/dp/0679847596/ref=as_li_tf_il?ie=UTF8&linkCode=gg2&creativeASIN=0679847596&tag=boorio-20&creative=399349&camp=217145"> Ballet Shoes </a>, <a id="quoteLink" href="https://en.wikipedia.org/wiki/Noel_Streatfeild">Noel Streatfeild </a>',
    ' I am not afraid of storms, for I am learning how to sail my ship-   <a id="quoteLink" href="https://www.amazon.co.uk/Little-Women-Wordsworth-Luxe-Collection/dp/1840221941/ref=sr_1_2_sspa?crid=3DEHOEWUBSQZD&keywords=Little+women&qid=1698259409&s=books&sprefix=little+women%2Cstripbooks%2C109&sr=1-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"> Little Women  </a>, <a id="quoteLink" href="https://en.wikipedia.org/wiki/Louisa_May_Alcott">Louisa May Alcott </a>'
]

function newQuote() {
let quoteNumber= Math.floor(Math.random()*(quotes.length));


document.getElementById('quoteDisplay').innerHTML=quotes[quoteNumber];

}




window.onload= newQuote;