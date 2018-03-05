// https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
    // Complete this function
    var time = s.split(':');

    if(s.includes('PM') && time[0] != 12){
        time[0] = parseInt(time[0]) + 12;
    } else if(s.includes('PM') && time[0] == 12){
        time[0] = 12;
    } else if(s.includes('AM') && time[0] == 12){
        time[0] = '00';
    }

    time = time.join(':').slice(0, -2);

    return time;
}
