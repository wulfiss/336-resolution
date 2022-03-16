let mMax = 0, mMin = 0;
let m1 = Math.round(((Math.random() * (4000 - 0)) + 0)/10)*10;
mMax = m1 + 300;
mMin = 0;//m1 - 300;
let m2 = Math.round(((Math.random() * (mMax - mMin)) + mMin)/10)*10;
let m3 = Math.round(((Math.random() * (mMax - mMin)) + mMin)/10)*10;
let m4 = Math.round(((Math.random() * (mMax - mMin)) + mMin)/10)*10;
let m5 = Math.round(((Math.random() * (mMax - mMin)) + mMin)/10)*10;

console.log(m1);
let ram1 = document.querySelector("#ram-one");
ram1.textContent = m1;
console.log(m2);
let ram2 = document.querySelector("#ram-two");
ram2.textContent = m2;
console.log(m3);
let ram3 = document.querySelector("#ram-three");
ram3.textContent = m3;
console.log(m4);
let ram4 = document.querySelector("#ram-four");
ram4.textContent = m4;
console.log(m5);
let ram5 = document.querySelector("#ram-five");
ram5.textContent = m5;

let ente = [];
function entero(){
    let eMax = 0, eMin = 0;
    let e1 = Math.round(((Math.random() * (300 - 0)) + 0)/10)*10;
    eMax = 300;//e1 + 0;
    eMin = 0;//e1 - 300;
    let e2 = Math.round(((Math.random() * (eMax - eMin)) + eMin)/10)*10;
    let e3 = Math.round(((Math.random() * (eMax - eMin)) + eMin)/10)*10;
    let e4 = Math.round(((Math.random() * (eMax - eMin)) + eMin)/10)*10;
    let e5 = Math.round(((Math.random() * (eMax - eMin)) + eMin)/10)*10;
    
    ente=[e1, e2, e3, e4, e5];

    //return ente;
}

function cComprobation(){
    let cC = 0;
    for(let l=0; l<5; l++){
        if(ente[l] > 99){
            cC++;
        }
    }
    if(cC > 2){
        entero();
        cComprobation();
    }else{
        console.log(ente);
    }

}

entero();
cComprobation();

let stap = [0, 10, 0, 20, 0, 30, 0, 40, 0, 50, 0, 60, 0, 70, 0, 80, 0, 90];
let staph = [];
function staphilous(){
    for(let p = 0; p < 5; p++){
        let x1 = Math.round(Math.random() * (17 - 0) + 0);
        staph.push(stap[x1]);
    }
    //console.log(staph);
}

function sComprobation(){
    let cC = 0;
    for(let l=0; l<5; l++){
        if(staph[l] > 49){
            cC++;
        }
    }
    if(cC > 2){
        staph = [];
        staphilous();
        sComprobation();
    }else{
        console.log(staph);
    }

}

staphilous();
sComprobation();