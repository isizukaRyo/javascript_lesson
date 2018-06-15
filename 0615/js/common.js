var num = 100;
console.log(num);
console.log(num);

//constは再代入ができない
const num2 = 10;
//num2 = 30;
console.log(num2);

const num3 = Math.floor(Math.random() * 10)
console.log(num3)

// num3の変数が奇数なら、奇数ですと表示する
//2で割り切れなかった時

if (num3 % 2 !== 0) {
    console.log(num3, '奇数です')
}
if (!(num3 % 2 === 0)) {
    console.log(num3, '奇数です')
}

// 
var result = ''
if (num3 === 0) {
    console.log(num3, '0です')
    result = '0です'
} else if (num3 % 2 === 0) {
    console.log(num3, '偶数')
    result = '偶数'
} else {
    console.log(num3, '奇数です')
    result = '奇数です'
}
$('.box').html(num3 + 'は' + result)
