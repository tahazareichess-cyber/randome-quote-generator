const placeHolder = document.querySelector(".main-container");

const quotes = [
    "with greate power becomes greate responsibility",
    "love under no cercumstanse",
    "whats under your head? ",
    "cats or dogs?",
    "do you like your life?",
    "i have a dream",
    "who is batman?",
    "sing a song",
    "try shopping??",
    "happy",
    "sad",
    "mad",
    "who are you ?",
    "no matter how cold it is your heart make me warm ",
    "you are gay",
]
let nowQoute = null;
function generate(){
    if(nowQoute){
        nowQoute.remove()
    }
    const quote = document.createElement("p");
    quote.classList.add("quote")
    let random = quotes[Math.floor(Math.random() * (quotes.length))]
    quote.textContent = random;
    placeHolder.append(quote);

    nowQoute = quote;
}