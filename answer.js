// *** YOUR ANSWER BELOW ***
function negate(str) {
    return "un" + str;
}

function intensify(str) {
    return "plus" + str;
}

function reinforce(str) {
    return "double" + str;
}

console.log(negate("cold"));
console.log(intensify("cold"));
console.log(reinforce(intensify("cold")));
console.log(reinforce(intensify(negate("good"))));
