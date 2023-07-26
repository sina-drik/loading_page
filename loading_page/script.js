const loadtext=document.querySelector('.loading-text');
const mainbg=document.querySelector('.bg');

let i=0;
function counter(){
    loadtext.innerText=`${i}%`;
    loadtext.style.opacity=`${scale(i,0,100,1,0)}`
    mainbg.style.filter=`blur(${scale(i,0,100,30,0)}px)`
    i++;
    if(i>100){
        clearInterval(int);
        loadtext.innerText='';
    }    
}
let int=setInterval(counter,30);


function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// scale function link 
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

