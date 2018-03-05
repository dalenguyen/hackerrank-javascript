// https://www.hackerrank.com/challenges/compare-the-triplets/problem

function solve(a0, a1, a2, b0, b1, b2){
    // Complete this function
    let a = 0; b = 0;
    a = ((a0 > b0) ? 1 : 0) + ((a1 > b1) ? 1 : 0) + ((a2 > b2) ? 1 : 0);
    b = ((b0 > a0) ? 1 : 0) + ((b1 > a1) ? 1 : 0) + ((b2 > a2) ? 1 : 0);
    return [a, b];
}
