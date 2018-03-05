// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
    // Complete this function
    // var length = arr.length;
    // var positive = (arr.filter((val) => val > 0).length);
    // var negative = (arr.filter((val) => val < 0).length);
    // var zero = (arr.filter((val) => val == 0).length);

    var positive = 0;
    var negative = 0;
    var zero = 0;
    arr.map(item => {
        item === 0 ? zero++ : (item > 0 ? positive++ : negative++);
    })

    console.log((positive/arr.length).toFixed(6));
    console.log((negative/arr.length).toFixed(6));
    console.log((zero/arr.length).toFixed(6));
}
