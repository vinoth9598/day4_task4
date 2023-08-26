// 1.a) print odd number in an array anonymous function
 let array=[];
let odd= function(a){
   
    for (i=1;i<=a;i++){
        if(i%2!=0){
            array.push(i)
        }
    }

}
odd(100);
console.log(array);

// 1.b) print odd number in an array IIFE function
let odd_numbers=[];
((a)=>{
    let array=[];
    for (i=1;i<=a;i++){
        
        if(i%2!=0){
            odd_numbers.push(i)
            
        }
    }
    console.log(odd_numbers);

})
(100);

console.log('________________________________________________________________');
// 2.a) convert all the strings to title caps in a string array anonymous function.

let titlecaps= function (str){
    str=str.toLowerCase().split(" ");
    for (let i=0;i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    return str.join(' ');

}
console.log(titlecaps("student vinoth from kumbakonam"));

// 2.b) convert all the strings to title caps in a string array IIFE function.

((str)=>{
    str=str.toLowerCase().split(' ');
    for(let i=0;i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    let string=(str.join(' '));
    console.log(string);
    

})
("hello student ")
console.log("____________________________________________________________________________________");

// 3.a)sum all numbers in an array anonymous function.
let total=0;
let sum=function(arr){
    for (let i=0;i<arr.length;i++){
        total+=arr[i];
    }
}
sum([4,5,6,7,8]);
console.log("Total :",total);

// 3.b)sum all numbers in an array IIFE function.

((arr)=>{
    let sum=0;
    for (let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log("sum :",sum);
})([8,9,10]);

console.log("_______________________________________________________________");

// 4.a)Return all the prime numbers in an array anonymous function.
let prime=function(num){
    let isPrime = true;
 
for(let i=2; i <= num; i++){
  for(let j=2; j < i ;j++){
    if(i % j == 0){
      isPrime = false;
      break;
    }
  }
  if(isPrime){
    console.log(i);
  }
  isPrime = true;
}

}
prime(10);
console.log("________________");
// 4.b)Return all the prime numbers in an array IIFE function.
((prime)=>{
    let number=true;
    for(let i=2;i<=prime;i++){
        for(let j=2;j<i;j++){
            if(i%j==0){
                number=false
                break;
            }
        }
        if(number){
            console.log(i);
        }
        number=true;
    }
})(20);
console.log("____________________________________________________________");

// 5.a)Return all the palindrome in an array anonymous function.
let palindrome=function(str){
    let rev=str.split(" ").reverse().join(" ");
    if(rev==str){
        return true;
    }else{
        return false;
    }
    
}
console.log(palindrome("racecar"));

// 5.b)Return all the palindrome in an array IIFE function.
((number)=>{
    let revs=number.split(" ").reverse().join(' ');
    if(revs==number){
        console.log(number,"this is palindrome ");
    }else{
        console.log(number,"this is not palinedrome ");
    }
})('121');

// 6.a)Return median of two sorted arrays of the same size in anonymous function.

let median=function(ar1,ar2){
    let result=[...ar1,...ar2];
    let inp= result.sort(function(a,b){return a-b});
    let length=inp.length
    if((length%2)===0){
        return (inp[length / 2] 
        + inp[(length / 2) - 1]) / 2;
    }
    
}
let v=median([5,4,8,6,10],[3,7,9,2,12]);
console.log(v);

// 6.b)Return median of two sorted arrays of the same size in IIFE function.

((list1,list2)=>{
    let res=[...list1,...list2];
    let lists= res.sort(function(a,b){return (a-b)});
    // console.log(lists);
     let len=lists.length;
    if((len%2)===0){
        console.log((lists[len/2]+lists[(len/2)-1])/2);
    }
    else{
        console.log((lists[(len/2)-.5])/2);
    }
})([5,8,9,10,24,45],[2,4,6,7,13]);

console.log('________________________________________________________________');

// 7.a)Remove duplicats from an array anonymous function.
let dup=[];
let newlist=[];
let  remove=function(list){
    
    for (let i=0;i<list.length;i++){
        dup.push(list[i]);
        if((list[i]) in dup){
            continue;
        }else{
            newlist.push(list[i]);
                
        }

    }

}
remove([2,3,4,6,8,4,2,9,10,8])
console.log(newlist);
// 7.b)Remove duplicats from an array IIFE function.


((removedup)=>{
    let ndup=[];
    let nwlist=[];
    for (let i=0;i<removedup.length;i++){
        ndup.push(removedup[i]);
        if((removedup[i]) in ndup){
            continue;
        }else{
            nwlist.push(removedup[i]);
                
        }

    }
    console.log(nwlist);



})([2,3,4,5,6,7,8,2,5,8,9,10,5])
console.log('_______________________________________________________');

// 8.a)Rotate in an array in k times anonymous function.

let rotate=function(inp){
    let k=4;
    let elements=[...inp];
    for (let i=0;i<k;i++){
        let val=elements.shift();
        elements.push(val);
    }
    console.log(elements);

}
rotate([1,2,3,5,6,8]);

// 8.b)Rotate in an array in k times IIFE Function.
((input)=>{
    let k=3;
    let value=[...input];
    for(let i=0;i<k;i++){
        let change=value.shift();
        value.push(change);
    }
    console.log(value);

})([4,5,6,7,8,9]);