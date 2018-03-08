// https://www.hackerrank.com/challenges/bon-appetit/problem

process.stdin.on("end", function () {
    // now we can read/parse input
    var arr = input.split("\n");
    var k = arr[0].split(" ")[1];    
    var shared = arr[2];
    
    var total = arr[1].split(" ");    
    total.splice(k, 1);
    
    total = total.reduce((acc, cur) => acc += parseInt(cur), 0)    
    
    if(total/2 == shared){
        console.log('Bon Appetit');
    } else {
        console.log(shared - total/2);
    }
});
