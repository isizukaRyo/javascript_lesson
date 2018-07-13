//配列は何個み入れられる
//変数は一つ
var fruits = ['みかん', 'ぶどう', 'さくらんぼ', 'ばなな']

console.log(fruits)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

var fruits2 = [
    ['りんご', 'さくらんぼ', 'いちご'], //赤い果物//[0]  [0][1][2]
['みかん', 'かき', 'びわ'], //オレンジ色の果物[1]        [0][1][2]   
['バナナ', 'パイナップル', 'レモン'] //黄色い果物[2]      [0][1][2]
]

console.log(fruits2)
console.log(fruits2[1])
console.log(fruits2[1][0])

var orange = fruits2[1]
console.log(orange)
console.log(orange[0])

//object
var fruits3 = {
    red: ['りんご', 'さくらんぼ', 'いちご'],
    orange: ['みかん', 'かき', 'びわ'],
    yellow: ['バナナ', 'パイナップル', 'レモン']
}
var fruits4 = {
    red: 'りんご',
    orange: 'みかん',
    yellow: 'ばなな'
}
console.log(fruits4.red)
console.log(fruits4['red'])

console.log(fruits3.yellow[1])

var color = 'orange'
console.log(fruits3[color])
//配列の長さを持ってくる
console.log(fruits.length) //　i <＝iは３より小さい　ので３以上の数は出しませんっ
for (var i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]) //i配列の長さの数[i]=123
}
//オブジェクトに値を代入する
var colors = ['赤', '青', '黄色']
console.log(colors)
colors[3] = '紫色'
console.log(colors)
var colors2 = {}
colors2.red = '赤色'
console.log(colors2)

//Q1
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}
//Q2
for (var i = 1; i <= 100; i++){
    if()
}
