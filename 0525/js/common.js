var test = 'test';
console.log(test)
//余りを表す
console.log(10 % 3);
//かける
console.log(10 * 3);
//割る
console.log(10 / 3);
//javascriptタイプについて
//文字列
var text = '文字列' //シングル　or ダブルで囲う（主にシングルを使おう）

//数値
var num = 1
console.log(num);

//倫理値
var boo1 = true;
var boo12 = false;
console.log(boo1, boo12)

//文字列を数値に変換する
console.log(parseInt('100px'))

console.log(Boolean(1))
console.log(Boolean(''))
console.log(Boolean(0))
console.log(Boolean(-1))

$('.box').parallaxFit({
    start: 0,
    end: 500,
    toStyle: {
        left: '300px'
    }
})
