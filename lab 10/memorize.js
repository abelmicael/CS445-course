function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.time("non-memorized version");
console.log(fibonacci(100));
console.timeEnd("non-memorized version"); 

const fibonacci1 = (function () {
  const storage = new Map();
  function innerFib(n) {
    let result;
    if (storage.has(n)) {
      result = storage.get(n);
    } else {
      if (n <= 1) {
        result = n;
      }else{
      result = innerFib(n - 1) + innerFib(n - 2);
      }
      storage.set(n, result);
    }
    return result;
  }
  return innerFib;
})();

console.time("memorized version");
console.log(fibonacci1(100));
console.timeEnd("memorized version");