function removeFromArray(array, ...args) {
    /*console.log(args[0]);
    console.log(args[1]);
    console.log(args[2]);*/
const newArray = [];
array.forEach((item)=>{
    if (!args.includes(item)){
        newArray.push(item);
    } })
    return newArray;
}
//filter()
// Do not edit below this line
module.exports = removeFromArray;
