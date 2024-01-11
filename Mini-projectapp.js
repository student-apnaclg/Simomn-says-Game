let gameseq=[];
let userseq=[];

let btns=["yellow","red","green","purple"];


let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        
        levelup();
    }

});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup(){
    userseq=[];// jaise hi level up ho sari info 
    // reset hoke dubara se save ho jay
    level++;
    h2.innerText=`Level ${level}`;
    
    let randIdx=Math.floor(Math.random()*3);
    let randcolor=btns[randIdx];
    // Random index se btns array ko access 
    // krke random color generate ho jayga
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}

function checAns(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br>Press any key to start.`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 250);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checAns(userseq.length-1);
}



let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

// Hr btn aalag h kuki sabme function scope apply ho rha h
// sab apne function ke according work kr rhe h

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}

// user ek bar m jitne bi score karta h
// h.w=> vo highest score track karna h


