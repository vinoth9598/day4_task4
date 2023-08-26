// a.print odd numbers in arrow function.
let odd=[];
let oddnumber=(k)=>{
    for(let i=0;i<=k;i++){
        if((i%2)!=0){
            odd.push(i);

        }
    }
    
}
(oddnumber(100));
console.log(odd);
console.log('___________________________________________________________________');

// b.convert all the string to title caps in an array arrow function.
let titlecaps=(str)=>{
    let list=[...str];
    for (let i=0;i<list.length;i++){
        
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    return str.join(' ');
    
}
let cap=titlecaps(['apple','orange','mango']);
console.log(cap);
console.log("__________________________________________________________________________________");

// c.sum of all number in an array arrow function.
let sum=0;
let num=(numbers)=>{
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i];
    }

}
num([4,8,12,24]);
console.log(sum);
console.log("____________________________________________________________________________");

// D.Return all the prime number in an array arrow function.

let number=(arrow)=>{
    let isprime=true;
    for (let i=2;i<arrow;i++){
        for(let j=2;j<i;j++){
            if(i%j==0){
                isprime=false;
                break;
            }
        }
        if(isprime){
            console.log(i);
        }
        isprime=true;
    }


}
number([10]);

// e.)Return all the palindrome in an array arrow function.
let palin=(word)=>{ 
    let rev=word.split(" ").reverse().join(" ");
    if(rev==word){
        return true;
    }else{
        return false;
    }


}
console.log(palin('madam'));