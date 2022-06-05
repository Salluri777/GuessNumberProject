let sc=20;
let secret=Math.trunc(Math.random()*20)+1;
let Highestscore=0;

function msge(message){
    document.querySelector('.message').textContent=message;
}
document.querySelector('.btncheck').addEventListener('click', function () {
    const guess=Number(document.querySelector('.in').value);
    if(secret===guess){
        msge('🥳You have won');
        document.querySelector('.score').textContent=sc;
        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.empty').textContent=secret;
        if(sc>Highestscore){
        document.querySelector('.Hscore').textContent=sc;
        }
    }
    else{
        if(sc==0){
            document.querySelector('.message').textContent='😭You Lost the Game';
            document.querySelector('.score').textContent=0;;

        }
        else{
        let amsge=(guess<secret)?'📉Number is too low':'📈Number is high';
        msge(amsge);
        sc--;
        document.querySelector('.score').textContent=sc;}
    }

});
document.querySelector('.again').addEventListener('click',function(){
    sc=20;
    secret=Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent=20;
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('.empty').textContent='?';
    document.querySelector('.message').textContent='🤔Start Guessing...........';
    document.querySelector('.in').value='';

});