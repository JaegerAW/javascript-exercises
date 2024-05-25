const repeatString = function(text, times) {

    result = ''
    if (times < 0) {return "ERROR"}
    else {
    for (let i = 0; i < times; i++) {
        result += text;
    }
return result;
    }
};

repeatString();
// Do not edit below this line
module.exports = repeatString;
