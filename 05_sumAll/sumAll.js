function sumAll(x, y) {
let sum = 0;
/*if (isNaN(x) || isNaN(y)) {return "ERROR"}*/
if (typeof x !== 'number' | typeof y !== 'number') {return "ERROR"}
else if (x < 0 || y < 0) {return "ERROR"}
else if (x < y) {
for (let i = x; i < y+1; i++) {
    sum += i;
}
return sum;
}
else if (y < x) {
    for (let i = x; i > y -1; i--) {
        sum += i;
    }
    return sum;
}
}

;
//the function already works as long as (x <y), when (x > y), just reverse
// add if they enter negative number, error
//add if they enter non integer for parameter, error jg
// Do not edit below this line
module.exports = sumAll;
