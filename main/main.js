module.exports = function main(num_str) {
    var levelOne = ['._.','...','._.','._.','...','._.','._.','._.','._.','._.'];
    var levelTwo = ['|.|','..|','._|', '._|','|_|','|_.','|_.','..|','|_|','|_|'];
    var levelThree = ['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|'];

    var len_s = num_str.length;
    var lcd = '';
    
    for (i=0;i<len_s;i++){
        lcd = lcd + levelOne[num_str[i]];
        if (i == (len_s-1)){
            lcd = lcd + '\n';
        }else {
            lcd = lcd + ' ';
        }
    }

    for (i=0;i<len_s;i++){
        lcd = lcd + levelTwo[num_str[i]];
        if (i == (len_s-1)){
            lcd = lcd + '\n';
        }else {
            lcd = lcd + ' ';
        }
    }

    for (i=0;i<len_s;i++){
        lcd = lcd + levelThree[num_str[i]];
        if (i == (len_s-1)){
            lcd = lcd + '\n'; // are you kidding me??
        }else {
            lcd = lcd + ' ';
        }
    }
    return lcd
};