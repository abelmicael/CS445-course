Array.prototype.removeDuplicatesAsync = function () {
    const newArr = []
    
    for (let i = 0; i < this.length; i++) {
        newArr.push(this[i])
    }
    for (let i = 0; i < newArr.length; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
            if (newArr[i] === newArr[j]) {
                newArr.splice(j, 1);
            }
        }
       
    }

    return new Promise(function (resolve, reject) {


        setTimeout(_ => resolve(console.log(newArr)), 5000)

    })

}

console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log(`end`);
