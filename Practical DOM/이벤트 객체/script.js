let americano = document.querySelector('#americano');
let cafelatte = document.querySelector('#cafelatte');
let vanillalatte = document.querySelector('#vanillalatte');

let drinks = [
    americano,
    cafelatte,
    vanillalatte
]

for(let i = 0; i < 3; i++) {
    drinks[i].onclick = function() {
        console.log( drinks[i].innerHTML + "를 클릭하셨습니다.");
    }
}