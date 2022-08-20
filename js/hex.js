let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"The Journey of Thousand miles start with a small step."--Lao Tzu',
    '"A little learning is a dangerous thing."― Alexander Pope',
    '“You educate a man you educate a man. You educate a woman you educate a generation.” ― Brigham Young',
    '“Education is the most powerful weapon which you can use to change the world.” ― Nelson Mandela',
    ' “The unexamined life is not worth living.” ― Socrates',
    '“Our truest life is when we are in dreams awake.” ― Henry David Thoreau',
    '“Man is always prey to his truths. Once he has admitted them, he cannot free himself from them.” ― Albert Camus',
    '“Better to get hurt by the truth than comforted with a lie.” ― Khaled Hosseini',
    ' “You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.” ― Dr. Seuss',
    '“We accept the love we think we deserve.” ― Stephen Chbosky',
    '“The most valuable gift you can receive is an honest friend.” ― Stephen Richards',
    '“Friendship is the only cure for hatred, the only guarantee of peace.” ― Gautam Buddha',
    '“Only those you trust can betray you.” ― Terry Goodkind',
    '“The past has no power over the present moment.” ― Eckhart Tolle',
    '“Yesterday is gone. Tomorrow has not yet come. We have only today.” ― Mother Teresa',
    ' “The high-minded man must care more for the truth than for what people think.” ― Aristotle',
    '“It is very easy to defeat someone, but it is very hard to win someone.” ― APJ Abdul Kalam',
    '“The chief enemy of creativity is good sense.” ― Pablo Picasso',
    '“Thinking something does not make it true. Wanting something does not make it real.” ― Michelle Hodkin',
    '“A man’s true character comes out when he’s drunk.” ― Charlie Chaplin',
    '“Truth is not something outside to be discovered, it is something inside to be realized.” ― Osho',
    '“Facts don’t care about your feelings.” ― Ben Shapiro',
    '“Time is precious, but the truth is more precious than time.” ― Benjamin Disraeli',
    '“You may delay, but time will not.” ― Benjamin Franklin'
]
btn.addEventListener('click',function(){
    var randomquote = quotes[Math.floor(Math.random()*quotes.length)]
    output.innerHTML= randomquote;
})

 