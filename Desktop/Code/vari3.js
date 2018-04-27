// Run the test and log it to console immediately
function areEqual(a, b) {
    return a === b;
}
console.log(areEqual(process.argv[2], process.argv[3]))
console.log(areBothDivBy([process.argv[2], process.argv[3]], 7))