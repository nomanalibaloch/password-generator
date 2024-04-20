const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pass_1=document.getElementById("pass-1");
let pass_2=document.getElementById("pass-2");

function getRandom() {
    return Math.floor(Math.random() * characters.length);
}

function generate() {
    for(let i=0;i<15;i++){
    pass_1.textContent = pass_1.textContent + characters[getRandom()];
    }
    for(let i=0;i<15;i++){
        pass_2.textContent = pass_2.textContent + characters[getRandom()];
        }

}