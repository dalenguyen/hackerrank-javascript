// https://www.hackerrank.com/challenges/simple-array-sum/problem

function simpleArraySum(n, ar) {
    // Complete this function
    return ar.reduce((acc, currentValue) => {
        return acc += currentValue
    })
}
