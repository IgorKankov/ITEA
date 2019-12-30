function oddEvenNumbers(){
    const number = prompt("enter chain of numbers");
    const evenOrOdd = prompt("What we are searching, Even or Odd?");
    let even = "";
    let odd = "";
    for(let i = 0; i <=  number.length - 1; i++){
        if(number[i] % 2 === 0){
            even += number[i];
        }  else {
            odd += number[i];
        } 
    }
    if(evenOrOdd === "even"){
        evenOddSum(even)
    } else {
        evenOddSum(odd)
    }
    
}
oddEvenNumbers()

function evenOddSum(num){
    let result = 0
    for(let i = 0; i <= num.length - 1; i++){
       result += num[i]
    }
   console.log('Числа - ' + num);
   console.log('Сума - ' + result);
}
