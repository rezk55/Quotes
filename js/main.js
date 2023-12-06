
var quotes = [
    {
        quote:"Be yourself; everyone else is already taken.",
        auther: "― Oscar Wilde"
    },
    {
        quote:"So many books, so little time.",
        auther: "― Frank Zappa"
    },
    {
        quote:"A room without books is like a body without a soul.",
        auther: "― Marcus Tullius Cicero"
    },
    {
        quote:"You only live once, but if you do it right, once is enough.",
        auther: "― Mae West"
    },
    {
        quote:"Be the change that you wish to see in the world.",
        auther: "― Mahatma Gandhi"
    },
    {
        quote:"In three words I can sum up everything I've learned about life: it goes on.",
        auther: "― Robert Frost"
    },
    {
        quote:"A friend is someone who knows all about you and still loves you.",
        auther: "― Elbert Hubbard"
    },
    {
        quote:"To live is the rarest thing in the world. Most people exist, that is all.",
        auther: "― Oscar Wilde"
    },
    {
        quote:"Always forgive your enemies; nothing annoys them so much.",
        auther: "― Oscar Wilde"
    },

];
var box = "";
var preIndex;
function newQuote(){
    var currentIndex = Math.floor(Math.random() * quotes.length);
    for(;currentIndex == preIndex;){
        currentIndex = Math.floor(Math.random() * quotes.length);
    }
    box = `<p class="p-quote">
                "${quotes[currentIndex].quote}"
            </p>
            <p>${quotes[currentIndex].auther}</p>` ;
    preIndex = currentIndex;
    document.getElementById('quote').innerHTML = box; 
    console.log(quotes.length);
}