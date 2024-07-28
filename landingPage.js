
function displayStandardBanner(){
    document.getElementById("banner-pic").src = "https://static.wikia.nocookie.net/gensin-impact/images/b/bd/Wanderlust_Invocation_2020-11-11.png/revision/latest/scale-to-width-down/500?cb=20201111132059";
}
function displayEventBanner(){
    document.getElementById("banner-pic").src = "https://img.gamewith.net/img/52638bf29cbdc106eee17102684c84db.jpeg";
}
function displayWeaponBanner(){
    document.getElementById("banner-pic").src = "https://i.ytimg.com/vi/KsnnvZJTAWI/hqdefault.jpg";
}
var standardBtn = document.getElementById("standard")
var eventBtn = document.getElementById("character")
var weaponBtn = document.getElementById("weapon")
standardBtn.addEventListener("click", displayStandardBanner);
eventBtn.addEventListener("click", displayEventBanner);
weaponBtn.addEventListener("click", displayWeaponBanner);
