var fiveStarPity = 0;
var fourStarPity = 0;
var fiveStarChance = 0.6;
let guraranteedFiveStar = false;
let guaranteedFourStar = false;



function characterWish(){
    //check for hard pity on five star, then four star, and give it accordingly
    if(fiveStarPity == 89){
        pickFiveStarChar();
    } 
    else if(fourStarPity == 9){
        pickFourStarChar();
    //normal wish
    } else {
        //if at soft pity for 5 star, increase the chances
        if(fiveStarPity== 74){
            fiveStarChance = 20;
        } else if(fiveStarPity >= 75){
            fiveStarChance += 7;
        }
        //make the wish
        var rarity = Math.random() * 100;
        if(rarity <= fiveStarChance){
            pickFiveStarChar();
        } else if (rarity <= 11) {
            pickFourStarChar();
            fiveStarPity++;
        } else {
            pickThreeStar();
            fourStarPity++;
            fiveStarPity++;
        }
    }

    

}
function pickFiveStarChar(){
    //reset pity
    fiveStarPity = 0;
    fiveStarChance = 0.6;
    //check for guaranteed, if not then do the 50/50
    if(!guraranteedFiveStar){
        var items = ["Jean","Qiqi","Mona","Diluc","Keqing"];
        if(Math.random() < 0.5){
            console.log("Ayaka")
            //return "Ayaka";
        } else {
            var chosenIndex = Math.floor(Math.random() * 5);
            //ensure guaranteed is true
            guaranteedFiveStar = true;
            console.log(items[chosenIndex])
            //return items[chosenIndex];
        }
    } else{
        //get rid of guarantee
        guaranteedFiveStar = false;
        console.log("Ayaka");
       // return "Ayaka";
    }

}
function pickFourStarChar(){
    fourStarPity = 0;
    var rateUpChars = ["Ninguang","Yanfei","Chongyun"];
    if(!guaranteedFourStar){
    var otherItems = ["Barbara","Noelle","Beidou","Bennett","Diona","Fischl","Gorou","Ninguang","Razor","Rosaria","Kujou Sara","Sayu","Sucrose","Thoma","Xiangling","Xingqiu","Xinyan","Yun Jin", 
    "Dragon's Bane", "Eye of Perception", "Favonious Codex", "Favonious Greatsword","Favonious Lance", "Favonious Sword", "Favonious Warbow", "Lion's Roar", "Rainslasher","Rust","Sacrificial Bow",
    "Sacrificial Fragments","Sacrifical Greatsword,", "Sacrifical Sword", "The Bell", "The Flute","The Stringless","The Widsith"]
    
    if(Math.random() < 0.5){
        var chosenIndex = Math.floor(Math.random() * 3);
        console.log(rateUpChars[chosenIndex]);
        //return rateUpChars[chosenIndex];
    } else {
        guaranteedFourStar = true;
        var chosenIndex = Math.floor(Math.random() * 36);
        console.log(otherItems[chosenIndex]);
        //return otherItems[chosenIndex];
    }
    } else{
        guaranteedFourStar = false;
        var chosenIndex = Math.floor(Math.random() * 3);
        console.log(rateUpChars[chosenIndex]);
       // return rateUpChars[chosenIndex];
    }


}
function pickThreeStar(){
    console.log("trash weapon")
    //return "irrelevant weapon lol";
}
for(var i = 0; i<90; i++){
    characterWish();
}