// https://www.hackerrank.com/challenges/a-very-big-sum/problem

function aVeryBigSum(n, ar) {
    // Complete this function
    return ar.reduce((acc, curr) => acc += curr);
}
