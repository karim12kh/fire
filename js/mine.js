
var quotions = [" “Be yourself; everyone else is already taken.” ― Oscar Wilde ",
    "“Be the change that you wish to see in the world.” ― Mahatma Gandhi",
    "“It is never too late to be what you might have been.” ― George Eliot",
    `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
― Albert Einstein`,`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
― Bernard M. Baruch`,`“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”
― William W. Purkey`,`“You only live once, but if you do it right, once is enough.”
― Mae West`,`“If you tell the truth, you don't have to remember anything.”
― Mark Twain0`,`“A friend is someone who knows all about you and still loves you.”
― Elbert Hubbard
`,`“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”
― Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches`,`“Live as if you were to die tomorrow. Learn as if you were to live forever.”
― Mahatma Gandhi
`,`“Without music, life would be a mistake.”
― Friedrich Nietzsche, Twilight of the Idols`,`“Insanity is doing the same thing, over and over again, but expecting different results.”
― Narcotics Anonymous`,`“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”
― Marilyn Monro`,`“It is better to be hated for what you are than to be loved for what you are not.”
― Andre Gide, Autumn Leaves`,
    "“Life isn't about finding yourself. Life is about creating yourself.” ― George Bernard Shaw",
    "“So, this is my life. And I want you to know that I am both happy and sad and I'm still trying to figure out how that could be.” ― Stephen Chbosky, The Perks of Being a Wallflower",
    "“And, when you want something, all the universe conspires in helping you to achieve it.” ― Paulo Coelho, The Alchemist",
    "“You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.”― John Lennon",
]; 

function rondamQuotes(){
   var newQuote = Math.floor(Math.random()*quotions.length);



    document.getElementById("quote").innerHTML=quotions[newQuote];
};

