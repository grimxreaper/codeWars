function uniqueInOrder (iterable) {
    //i: string o: an array of strings, no dups
    let nodupes = [];
    //turn string into array
    if (typeof(iterable) === 'string') {
    iterable = iterable.split('')
    }
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i - 1]) {
            nodupes.push(iterable[i])
        }
    }

return nodupes
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')) //== ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'))     //== ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]))     // == [1,2,3]  
