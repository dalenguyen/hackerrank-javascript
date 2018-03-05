// https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
    // Complete this function

    var min = 0;
    var max = 0;
    arr.sort((a,b) => a-b);
    min = arr.reduce((acc, cur) => acc += cur) - arr[arr.length - 1];
    max = arr.reduce((acc, cur) => acc += cur) - arr[0];
       
    console.log(min , max);
}
