let a=0
let b=0

function n1(){
    if (a==0){
        a=1;
    }
    else if(b==0){
        b=1
    }
}    
function n2(){
    if (a==0){
        a=2;
    }
    else if(b==0){
        b=2
    }
}    
function n3(){
    if (a==0){
        a=3;
    }
    else if(b==0){
        b=3
    }
}    
function n4(){
    if (a==0){
        a=4;
    }
    else if(b==0){
        b=4
    }
}    
function n5(){
    if (a==0){
        a=5;
    }
    else if(b==0){
        b=5
    }
}    
function n6(){
    if (a==0){
        a=6;
    }
    else if(b==0){
        b=6
    }
}
function n7(){
    if (a==0){
        a=7;
    }
    else if(b==0){
        b=7
    }
}    
function n8(){
    if (a==0){
        a=8;
    }
    else if(b==0){
        b=8
    }
}        
function n9(){
    if (a==0){
        a=9;
    }
    else if(b==0){
        b=9
    }
}    

function soma(){
    a = Number(a);
    b = Number(b);
    res.innerHTML = ('A soma dos números é: '+(a+b))
    a=0
    b=0
    
}
function subtracao(){
    a = Number(a);
    b = Number(b);
    res.innerHTML = ('A subtração dos números é: '+(a-b))
    a=0
    b=0
}
function divi(){
    if(a!==0 && b!==0){
    a = Number(a);
    b = Number(b);
    res.innerHTML = ('A divisão dos números é: '+(a/b));
    a=0
    b=0
    }
    else{
        res.innerHTML = ('não se faz divisão por zero 👍')
    }
}
function mult(){
    a = Number(a);
    b = Number(b);
    res.innerHTML = ('A multiplicação dos números é: '+(a*b));
    a=0
    b=0
}
