const num_list = [
    ['._.','...','._.','._.','...','._.','._.','._.','._.','._.'],
    ['|.|','..|','._|', '._|','|_|','|_.','|_.','..|','|_|','|_|'],
    ['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|'],
]

module.exports = function main(num_str) {

    var len_s = num_str.length;
    var lcd = '';

    var level1 = '';
    var level2 = '';
    var level3 = '';

    for (i=0; i<len_s; i++){
        level1+=num_list[0][num_str[i]]+ ' ';
        level2+=num_list[1][num_str[i]]+ ' ';
        level3+=num_list[2][num_str[i]]+ ' ';
    }
    lcd = level1.slice(0,-1) + '\n' +  level2.slice(0,-1) + '\n' + level3.slice(0,-1) + '\n';

    return lcd
};