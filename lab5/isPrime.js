
function primeCheck(num){
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
    if(num % i === 0) return false; 
return num > 1;

}


function isPrime(num){

   let returned = primeCheck(num);
    return new Promise(function(resolve, reject){
            if(returned){
                setTimeout(_ => resolve("{prime: true}"),5000);
            }else{
                setTimeout(_ =>reject("{prime: false}"), 500);
            }
    })
}

console.log('start');
isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');