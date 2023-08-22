var changeBtn = document.getElementById("changeBtn");

var quoteOutput=document.getElementById("quoteOutput");
var quoteAuthor=document.getElementById("quoteAuthor");



function generateQuote() {

    var quotes = [{ quote: `“Be yourself; everyone else is already taken.”`, author: `― Nasr Gamal` },
    {quote: `“So many books, so little time.”`, author: `― Nasr Gamal` },
    { quote: `“A room without books is like a body without a soul.”`, author: `― Nasr Gamal`` },
    { quote: `“You only live once, but  you  it right, once is enough.”`, author: `― mostafa el kady` },
    ]

    var random = Math.trunc(Math.random() * quotes.length);

     quoteOutput.innerHTML=quotes[random].quote;
    authorOutput.innerHTML=quotes[random].author;
}

changeBtn.addEventListener("click", generateQuote);
