let a= prompt("a=")
if(a>0){
    a++
}
console.log(a);//If1
let b= prompt("b=")
if(b>0){
    b++
}
else{
    b--
    b--
}
console.log(b);//If2
let c = prompt("c=")
if(c>0){
    c++
}
else if(c==0){
    c=10
}
else{
    c--
    c--
}
console.log(c);
//If3
let e= prompt("e=")
let f= prompt("f=")
let n= prompt("n=")
let m = 0
if(e>0 && f >0 && n>0){
    m=3
}
else if(f>0 &&  n>0){
    m=2
}
else if(f>0 && e>0){
    m=2
}
else if(e>0 && n>0){
    m=2
}
else if(n>0){
    m=1
}
else if(f>0){
    m=1
}
else if(e>0){
    m=1
}
console.log(m);
//If4
let t= prompt("t=")
let r= prompt("r=")
let l= prompt("l=")
let v = 0
let x = 0
if(l>0 && r>0 && t>0){
    v = 3 && x
}
else if(f>0){
    v++
}
else{
    x++
}
if(l>0){
    v++
}
else{
    x++
}
console.log(v+' '+x);
let z= prompt("z=")
let j= prompt("j=")
if(z>j){
    console.log(z);
}
else{
    console.log(j);
}
