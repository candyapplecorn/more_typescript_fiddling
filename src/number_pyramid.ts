/*
// Write a small function which will print the following (between 0 and 9) based on the following input parameters.

Sample 1:
// Starting digit will be always 1
// Number of digits to be increased by 2 in next line.
// Digits to be increased by x (Example: next digit = previous digit + x), Default value of x is 1.
// After 9 , digit will reset to 0.

1
234
56789
0123456
789012345
67890123456
*/


function getNextNumber(current: number, increment: number): number {
    const next = current + increment
    if (next > 9) {
        return next % 10
    }
    return next
}

function numberPyramid(increment: number = 1, numLines: number = 6) {
    let result = "";
    let counter = 1

    for (let i = 0; i < numLines; i++) {
        const numDigitsInLine = (2 * i) + 1
        let currentLine = ""

        for (let j = 0; j < numDigitsInLine; j++) {
            currentLine += String(counter)
            counter = getNextNumber(counter, increment)
        }

        result += currentLine
        result += "\n"
    }

    console.log(result)
    return result
}
function numberPyramidMock() {
    return `1
234 
56789
0123456
789012345
67890123456`
}

export default numberPyramid

module.exports = {
    getNextNumber,
    numberPyramid
}
