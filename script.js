// Define an array of tarot card objects
const tarotCards = [
        {name: "乾(qian)", image: "images/乾卦.png", meaning: "The process of things from happening to flourishing.  Starts, prospers. Reach the extreme.The symbol of 'leader'."},
        {name: "坤 (Kun)", image: "images/坤卦.png", meaning: "It symbolizes tolerance, universal fraternity. The symbol of 'Follower'.The key to success is to be determined and persistent, to find a leader who can help you and to follow him/her."},
        {name: "屯 (Tun)", image: "images/屯卦.png", meaning: "After the heaven and earth are stabilized, all things grow. Therefore Tun means 'fullness' and 'the beginning of all things.'"},    
        {name: "蒙 (Meng)", image: "images/蒙卦.png", meaning: "It symbolizes the birth of all things and the state of 'ignorance'and 'pureness'."},
        {name: "需 (Xu)", image: "images/需卦.png", meaning: "The meaning of 'wetting' is extended to the meaning of stagnation and getting into trouble. Waiting for the opportunity, it is not advisable to move forward immediately."},
        {name: "訟 (Song)", image: "images/訟卦.png", meaning: "There will be disputes at the beginning."},
        {name: "師 (Shi)", image: "images/師卦.png", meaning: "The meaning of a division is an army. Due to the disputes among the masses, it evolved into a situation of 'building an army into a division'."},
        {name: "比 (Bi)", image: "images/比卦.png", meaning: "It means closeness and good relationship."},
        {name: "小畜 (Xiao chu)", image: "images/小畜卦.png", meaning: "It means gathering, and people start to gather after getting close."},
        {name: "履 (Lu)", image: "images/履卦.png", meaning: "Do everything according to etiquette and follow the rules, otherwise there may be disaster. Although the situation is dangerous, if you are careful, everything will be fine."},
  
        {name: "噬嗑 (Shi ke)", image: "images/噬嗑卦.png", meaning: "To blend in, it also means to punish and eliminate evil. Regarding the use of punishment, the purpose of using punishment is to achieve the effect of small punishment to give a big warning."},
        {name: "賁 (Ben)", image: "images/乾卦.png", meaning: "It is good to do small things, but not big things. Private affairs are auspicious, but public affairs are unlucky.If you ask about love and marriage, it may come true, but there will be some doubts and minor frictions in the process.If you are asking for work or fame, you may encounter some difficulties to achieve it, and you may choose to leave finally."},
        {name: "剝 (Bo)", image: "images/剝卦.png", meaning: "Peeling off, losing a place to live.If you get 'Bo', it is not appropriate to act and should seek a refuge.It also means stripping away decorations and returning to the basics. "},
        {name: "復 (Fu)", image: "images/復卦.png", meaning: "Go home and the the yang-energy returns. The extended meaning is that things go around, correcting mistakes and doing good. Take initiative and let nature take its course then.The principle of recovery is to eradicate past mistakes and return to the good path. Start with small mistakes and reflect on them in time before they become serious."},
        {name: "无妄 (Wu wang)", image: "images/無妄卦.png", meaning: "Unexpected things may happen. If you are not vain and do not act recklessly, things will go well and be stable.It is not advisable for you to go far away, as going out may not bring you good luck."},
        {name: "大畜 (Da chu)", image: "images/大畜卦.png", meaning: "It means 'harvest'. The accumulated resources are large and very stable. It refers to a time when a person’s resources, energy, money, and virtue have accumulated a lot, so it is ok for a person to do big things."},
        {name: "頤 (Yí)", image: "images/頤卦.png", meaning: "Cultivate one's moral character and practice in seclusion. Yi Gua emphasizes 'careful speech' and 'moderate diet'.Specifically, you should speak less and be cautious when speaking; you should eat cautiously and in moderation."},
        {name: "大過 (Da guo)", image: "images/大過卦.png", meaning: "It means to go beyond too much, going too far is as bad as not going far enough.It also means an organization or an unit has heavy-top, unstable pillars, and only good in appearance issues."},
        {name: "坎 (Kan)", image: "images/坎卦.png", meaning: "The meaning of puddle and ridge. There are dangers both front and rear."},
        {name: "離 (Ri)", image: "images/離卦.png", meaning: "Bright, smart, beautiful. Or to gain, to snare, to be snared."},
        
        {name: "咸 (Xian)", image: "images/咸卦.png", meaning: "It means 'sympathy' and mutual connection. When asked about relationship, Xian indicates a very good sign. But if you ask about other things, whether the thoughts in your heart are good or bad, the things you think in your heart may be happening and fulfilled.If the question is about health or safety, it's not a good situation.In terms of business management, you should pay attention to someone stabbing you in the back, or an important right-hand man or woman being poached."},
        {name: "恆 (Heng)", image: "images/恆卦.png", meaning: "Permanent, lasting, long-lasting. Good things will come, but you need some patience. It indicates a couple has good team work, symbolizing a stable and harmonious family that can last forever. Everything can be done successfully, and it can last for a long time. While it is not proper to pursue innovation and change at the current stage."},
        {name: "遯 (Dun)", image: "images/遯卦.png", meaning: "Escape and retreat. It means 'hidden'. It's best to stay away from villains."},
        {name: "大壯 (Da zhuang)", image: "images/大壯卦.png", meaning: "It means 'masculine and vigorous'.It has three meanings, one is strong Yang energy, the other is serious conflict, and the third is serious injury.It is recommended to be restrained by etiquette to avoid conflicts and mistakes."},
        {name: "晉 (Jin)", image: "images/晉卦.png", meaning: "Jin means advancement. It is a symbol of 'progress'."},
        {name: "明夷 (Míng yi)", image: "images/明夷卦.png", meaning: "The light is damaged, so it is a symbol of 'darkness'.The light disappears, so it refers to darkness, disaster, and turbulent times.Ming Yi implies it is not the time to think about whether you can prosper or not, but should think about how to escape and protect yourself wisely."},
        {name: "家人 (Jia ren)", image: "images/家人卦.png", meaning: "It is the symbol of ‘keeping the family members together’.Everything is good for women. If you are a man, you can ask for help from your wife, mother, and sisters.If domestic affairs are handled well, everything will be fine; if they are not handled well, everything will be bad. If you ask about family problems, you should pay attention to the appropriate division of labor among family members to prevent family quarrels."},
        {name: "睽 (Kui)", image: "images/睽卦.png", meaning: "It is the symbol of 'disobedience and violation'. it means disobedience, clear separation, loneliness.People of different aspirations or principles cannot get along together."},
        {name: "蹇 (Jian)", image: "images/蹇卦.png", meaning: "It means ‘difficulty’. Being lame cannot move forward, things cannot be carried out, and there is danger ahead and should stop.It also means to speak out the truth. It means both difficulty in action and difficulty in speech."},
        {name: "解 (Jie)", image: "images/解卦.png", meaning: "It means 'eliminate, ease'. It indicates relief, liberation, danger dispersed, forgiveness.Extended meaning of endless efforts. Requires people to take active actions to eliminate danger. "},
        
        {name: "損 (Sun)", image: "images/損卦.png", meaning: "It means 'derogation'. Get rid of shortcomings, eliminate desires, and sacrifice short-term gains.I-Ching regards loss and gain as two different sides of cultivating morality, and they are also complementary concepts.To eliminate the desires and bad habits, make up for the deficiencies by increasing advantages or abilities."},
        {name: "益 (Yi)", image: "images/益卦.png", meaning: "The meaning of Increase, gain, or abundance.To be considerate of others, observe and learn from others, be aware and get rid of making mistakes, and increase your strengths. When it comes to relationships, it implies success."},
        {name: "夬 (Guai)", image: "images/夬卦.png", meaning: "It means 'breakup'. It refers to the division between yang and yin, which implies the clear boundary between a gentleman and a villain. "},
        {name: "姤 (Gou)", image: "images/姤卦.png", meaning: "It means 'encounter'.It implies that Yin energy is strong and erodes towards Yang energy.As for relationships between men and women, it would be better to be regarded as a temporary encounter and cannot be considered to last forever.It symbolizes that corruption has begun to occur in the dark places that no one can see. Therefore, be aware of the subtle details and be aware of minor mistakes."},
        {name: "萃 (Cui)", image: "images/萃卦.png", meaning: "It originally meant the appearance of lush vegetation, and was extended to mean gatherings.Personnel affairs can go smoothly. When it comes to doing business, gathering people to work together, or asking for advice from respected people is recommended.Everything can be held grandly, but it is not appropriate to be frugal and stingy. It is good for traveling far, but not good for retreating."},
        {name: "升 (Sheng)", image: "images/升卦.png", meaning: "It is the symbol of 'rising,' climb the steps gradually, and gradually grow.Interpreted as success, harvest, and bumper harvest. Or it means balance and appropriateness. "},
        {name: "困 (Kun)", image: "images/困卦.png", meaning: "The original meaning is that the water has dried up, which implies a poverty situation.Dilemma is also a test of a man's virtue. When people are in poverty, you can tell their integrity and cultivation. Therefore, if you are in a difficult situation or in poverty, only stick to your integrity, you will find a way out and survive."},
        {name: "井 (Jing)", image: "images/井卦.png", meaning: "Jing means water well, which originally refers to the process of how a water well goes from being damaged to being repaired and finally being drinked by people.The well water itself is fixed in place and will not move. Once the water quality is poor or the spring water dries up, people will abandon the well. On the contrary, if the well is repaired, the spring water will be sweet and people will come to drink water automatically.It is a metaphor for a man who cultivates virtue and is eventually supported by the people."},
        {name: "革 (Ge)", image: "images/革卦.png", meaning: "It is the symbol of 'reform, innovation, revolution'. Remove the old ones.Therefore, the auspiciousness of the Ge lies in change and transformation. If it remains unchanged, it will be unlucky."},
        {name: "鼎 (Ding)", image: "images/鼎卦.png", meaning: "It means 'reform'. Arrange a new atmosphere and establish a new (political) power.If you get Ding, everything will go well, but it is better to innovate. Do not stick to the rules, but adopt a new approach.In addition, it is also a symbol of power, so if you ask for good luck of your career, it means gaining power."},
        
        {name: "震 (Zhen)", image: "images/震卦.png", meaning: "Shocked, startled, and by extension have the meaning of being given a wake-up call, awakening, being frightened and awakened.Zhen can be said to be a sign that is bitter first and then sweet. If you can be shocked and frightened by changes, and therefore be alert and excited, then you will be able to prosper in the end, which is auspicious."},
        {name: "艮 (Gen)", image: "images/艮卦.png", meaning: "The meaning of heavy mountains blocking the way is also extended to the meaning of stop.It also means maintenance and care."},
        {name: "漸 (Jian)", image: "images/漸卦.png", meaning: "Gradually means moving forward slowly, step by step.Gradually and step by step, not only will it be auspicious for a woman to marry, but a gentleman will also be able to gain a position and achieve great results if he goes there.The Dejian hexagram can not only be successful in marriage, but also extends to other things. It is naturally feasible to do everything step by step.But on the contrary, if you are anxious and rush forward, you will not succeed. It is not advisable to take risks, and it is advisable to stick to the existing territory. Leaving one's original territory will be a big disaster."},
        {name: "歸妹 (Gui mei)", image: "images/歸妹卦.png", meaning: "A girl gets married. It implies a girl falls in love with a guy older than her, while she takes action to merry him immediately. It may not be in line with etiquette. Secondly, this kind of marriage may have a weak emotional foundation, act based on emotion, be too willful and lack consideration."},
        {name: "豐 (Feng)", image: "images/豐卦.png", meaning: "It means rich and grand.When you get Feng, things can be done with courage, don't be timid, and do it openly and honestly.The best time to do something at day time, but this is also a metaphor, which means that you should take action with fair and high-profile, you also have to grasp the best time with quick judgment and execute it immediately."},
        {name: "旅 (Lu)", image: "images/旅卦.png", meaning: "It means traveling abroad or living in a foreign country.When people wander away from home, they lack relatives and friends, they are unfamiliar with the place, and they only can decide things according to the situation. So it implies only small things will go well, not big things.Therefore, this is a sign indicates you to stop and don't act rashly, be sensible and be able to act according to the opportunity, so that you can avoid troubles."},
        {name: "巽 (Xun)", image: "images/巽卦.png", meaning: "It has a double meaning. On the one hand, it means obedience; on the other hand, it also means ordering a declaration, and exercising power to subordinates. It depends on which position you are on currently."},
        {name: "兌 (Dui)", image: "images/兌卦.png", meaning: "A very complicated sign and full of internal contradictions.It means 'conversation, joy', but it can also be interpreted as meaning destruction.It can mainly be referred to face-to-face communication."},
        {name: "渙 (Huan)", image: "images/渙卦.png", meaning: "To separate, to escape, to resolve problem.Although the Huan means danger can be overcome, illnesses can also be cured and alleviated.But if you ask about doing things, it will be difficult to achieve, and you must pay attention to inner heart and mental management. With the Huan, the danger can be overcome, but you need to pay attention to how to get back hearts and feelings from others."},
        {name: "節 (Jie)", image: "images/節卦.png", meaning: "It means 'temperance' and 'moderation'.This symbol sign contains water. The water is overflowing and should be adjusted and controlled. This warning a man should stop and consider the balance.But 'stop' itself should also be done in moderation without going too far.The most fundamental and long-lasting method of moderation is to establish a system and a guideline that can be followed."},
        
        {name: "中孚 (Zhong fu)", image: "images/中孚卦.png", meaning: "It means 'honesty'. Be humble on the inside and honest on the outside.It has two meanings: one is sincerity, and the other is trust, which comes from the heart.If you get the Zhongfu hexagram, although everything goes wrong and there are hidden dangers, as long as you can work humbly and honestly, establish credibility, and gradually move people's hearts, you can overcome the difficulties and achieve prosperity.But this prosperity is long-term, not short-term."},
        {name: "小過 (Xiao guo)", image: "images/小過卦.png", meaning: "It means 'slightly faulty'. Excessive Yin energy, which implies small mistakes, small excesses.Excessive Yin energy means there are too many negative things, so we must deal with them one by one without getting tired of them.Small things are good, big things are bad. You must face the trouble by paying attention to all kinds of details, and be careful that 'the devil is in the details.'Xiao Guo is a good sign for doing small things and can achieve immediate results. While If it comes to big things, this sign shows that the talent and knowledge are not enough, so it may fail."},
        {name: "既濟 (Ji ji)", image: "images/既濟卦.png", meaning: "There is a sign of stability. Everything is ready, the conditions are complete, the sign of water and fire are harmonious.Jiji is the most perfect symbol in the Book of I-Ching. Because of perfection, you should be prepared to avoid or slow down the decline."},
        {name: "未濟 (Wei ji)", image: "images/未濟卦.png", meaning: "It means 'things are not yet done'. The sign is an imbalanced situation of water and fire.Those who get the Weiji should pay attention to observation before making any judgment before doing anything. Be careful that there are dangers hidden under the beautiful appearance, so you must not act rashly, otherwise you will easily be deceived and be in danger.You should recognize your situaion now and be careful when you need to make a choice."},

    
];

// Get references to HTML elements
const drawButton = document.getElementById("drawButton");
const cardDisplay = document.getElementById("cardDisplay");

// Add event listener to the draw button
drawButton.addEventListener("click", drawCard);

//Added part
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle the tarotCards array before drawing a card
tarotCards = shuffleArray(tarotCards);

// Function to draw a random tarot card

function drawCard() {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    const drawnCard = tarotCards[randomIndex];
    displayCard(drawnCard);
}

// Function to display the drawn card
function displayCard(card) {
    const cardHTML = `
        <div>
            <h2>${card.name}</h2>
            <img src="${card.image}" alt="${card.name}">
            <p>${card.meaning}</p>
        </div>
    `;
    cardDisplay.innerHTML = cardHTML;
}