const quotes = [
    {
        quote: "quote0",
        author: "author0",
    },
    {
        quote: "quote1",
        author: "author1",
    },
    {
        quote: "quote2",
        author: "author2",
    },
    {
        quote: "quote3",
        author: "author3",
    },
    {
        quote: "quote4",
        author: "author4",
    },
    {
        quote: "quote5",
        author: "author5",
    },
    {
        quote: "quote6",
        author: "author6",
    },
    {
        quote: "quote7",
        author: "author7",
    },
    {
        quote: "quote8",
        author: "author8",
    },
    {
        quote: "quote9",
        author: "author9",
    },
];

const quoteSpan = document.querySelector("#quote span:first-child");
const authorSpan = document.querySelector("#quote span:last-child");
const idx = parseInt(Math.random() * quotes.length);
quoteSpan.innerText = quotes[idx].quote;
authorSpan.innerText = quotes[idx].author;

