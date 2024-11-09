const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
  "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
  "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
  "In the end, it's not the years in your life that count. It's the life in your years. – Abraham Lincoln",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "It always seems impossible until it's done. – Nelson Mandela",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
  "You must be the change you wish to see in the world. – Mahatma Gandhi",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
  "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. – Winston Churchill",
  "If you can dream it, you can do it. – Walt Disney",
  "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
  "Everything you’ve ever wanted is on the other side of fear. – George Addair",
  "You miss 100% of the shots you don’t take. – Wayne Gretzky",
  "The best way to predict the future is to create it. – Peter Drucker",
  "Don’t judge each day by the harvest you reap but by the seeds that you plant. – Robert Louis Stevenson",
  "You must not only aim right, but draw the bow with all your might. – Henry David Thoreau",
  "Opportunities are usually disguised as hard work, so most people don’t recognize them. – Ann Landers",
  "There are no shortcuts to any place worth going. – Beverly Sills",
  "I am not a product of my circumstances. I am a product of my decisions. – Stephen R. Covey",
  "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
  "The best revenge is massive success. – Frank Sinatra",
  "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown",
  "Dream big and dare to fail. – Norman Vaughan",
  "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
  "Wealth consists not in having great possessions, but in having few wants. – Epictetus",
  "The future belongs to those who prepare for it today. – Malcolm X",
  "Do not wait to strike till the iron is hot, but make it hot by striking. – William Butler Yeats",
  "Everything you can imagine is real. – Pablo Picasso",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
  "You can never plan the future by the past. – Edmund Burke",
  "To live a creative life, we must lose our fear of being wrong. – Joseph Chilton Pearce",
  "An unexamined life is not worth living. – Socrates",
  "Not all those who wander are lost. – J.R.R. Tolkien",
  "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
  "There is nothing impossible to they who will try. – Alexander the Great",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. – Christian D. Larson",
  "A journey of a thousand miles begins with a single step. – Lao Tzu",
  "It’s never too late to be what you might have been. – George Eliot",
  "You can, you should, and if you’re brave enough to start, you will. – Stephen King",
  "Act as if what you do makes a difference. It does. – William James",
  "Don’t wait. The time will never be just right. – Napoleon Hill",
];

var quoteDisplay = document.getElementById("quoteDisplay");
var quoteBtn = document.getElementById("quoteBtn");
var LRandom = 0;
var random =0;

quoteBtn.onclick = function () {

  while (random === LRandom) {
    random = Math.floor(Math.random() * quotes.length);
  }
  LRandom = random;

  quoteDisplay.innerText = quotes[random];
};

// console.log(Math.floor(Math.random()*quotes.length) );
