'use strict';

const player1=document.querySelector('#player1');
const player2=document.querySelector('#player2');
const btnRollDice=document.querySelector('#roll-dice');
const btnHold=document.querySelector('#hold');
const btnNewGame=document.querySelector('#new-game');
const dice=document.querySelector('#dice');
let domP1TotalScore=document.querySelector('#player1 .total-score');
let domP2TotalScore=document.querySelector('#player2 .total-score');

let p1TotalScore=0;
let p2TotalScore=0;
let diceRollValue=0;

const switchSides= function(){
    if(player1.classList.contains('active')){
        p1TotalScore+=Number(document.querySelector('.active .current-score').textContent);
        domP1TotalScore.textContent=p1TotalScore;
        document.querySelector('.active .current-score').textContent=0;
        if(p1TotalScore>=100){
            player1.classList.add('winner');
        }  
        else{      
            player1.classList.remove('active');
            player1.classList.add('on-hold');
            player2.classList.remove('on-hold');
            player2.classList.add('active');
        }
    }
    else{
        p2TotalScore+=Number(document.querySelector('.active .current-score').textContent);
        domP2TotalScore.textContent=p2TotalScore;
        document.querySelector('.active .current-score').textContent=0;
        if(p2TotalScore>=100){
            player2.classList.add('winner');
        }
        else{
            player1.classList.add('active');
            player1.classList.remove('on-hold');
            player2.classList.add('on-hold');
            player2.classList.remove('active');
        }
    }
}

const diceRoll= function(){
    return Math.trunc(Math.random()*6)+1;
}

const setDiceImg= function(value){
    if(dice.classList.contains('hidden')){
        dice.classList.remove('hidden');
    }
    document.getElementById('diceImg').src=`./images/dice-${value}.png`;
}

const gameOver=function(){
    return (player1.classList.contains('winner') || player2.classList.contains('winner'))
}

btnRollDice.addEventListener
('click',function(){
    if(!gameOver()){
        diceRollValue=diceRoll();
        setDiceImg(diceRollValue);
        if(diceRollValue===1){
            document.querySelector('.active .current-score').textContent=0;
            switchSides();
        }
        else{
            let test=Number(document.querySelector('.active .current-score').textContent)+diceRollValue;
            document.querySelector('.active .current-score').textContent=test;
        }
    }
})

btnHold.addEventListener
('click',function(){
    if(!gameOver()){
        switchSides(); 
    } 
})

btnNewGame.addEventListener
('click',function(){
    if(player1.classList.contains('winner')){
        player1.classList.remove('winner');
    }
    if(player2.classList.contains('winner')){
        player2.classList.remove('winner');
    }
    if(!dice.classList.contains('hidden')){
        dice.classList.add('hidden');
    }
    document.querySelector('.active .current-score').textContent=0;
    document.querySelector('.on-hold .current-score').textContent-0;
    p1TotalScore=0;
    p2TotalScore=0;
    domP1TotalScore.textContent=p1TotalScore;
    domP2TotalScore.textContent=p2TotalScore;
    switchSides();
    if(!player1.classList.contains('active')){
        switchSides();
    }
})

