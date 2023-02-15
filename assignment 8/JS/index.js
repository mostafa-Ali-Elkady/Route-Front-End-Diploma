var changeBtn = document.getElementById("changeBtn");

var quoteOutput=document.getElementById("quoteOutput");
var quoteAuthor=document.getElementById("quoteAuthor");



function generateQuote() {

    var quotes = [{ quote: `“Be yourself; everyone else is already taken.”`, author: `― Oscar Wilde` },
    {quote: `“So many books, so little time.”`, author: `― Frank Zappa` },
    { quote: `“A room without books is like a body without a soul.”`, author: `― Marcus Tullius Cicero` },
    { quote: `“You only live once, but if you do it right, once is enough.”`, author: `― Mae West` },
    ]

    var random = Math.trunc(Math.random() * quotes.length);

     quoteOutput.innerHTML=quotes[random].quote;
    authorOutput.innerHTML=quotes[random].author;
}

changeBtn.addEventListener("click", generateQuote);