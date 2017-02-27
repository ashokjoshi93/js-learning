
function random_no(a,b) {
    return Math.floor(Math.random() * (b - a + 1) ) + a;
}

console.log(random_no(1,100));
