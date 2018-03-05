// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(n, ar) {
    // Complete this function
    var max = Math.max(...ar);
    var result = ar.filter(c => c === max);
    return result.length;
}
