 var colors = ['赤','青','黄色','緑']
 
 console.log(colors [1]);

var users = [
    {
        name:'カメイ',
        age: 33
    },
    {
        name:'あべさん',
        age: 25
    },
    {
        name:'あべくん',
        age: 18
    }
]
//あべくんの年齢を表示する
console.log(users[2].age);

console.log('colors配列の長さは'+ colors.length);

//配列の長さを統合する
var fruits = ['みかん','バナナ']　
var fruits2 = ['パイナップル','ぶどう']
var fruits3 = ['りんご','スイカ']

console.log(fruits.concat(fruits2,fruits3))

//配列の追加
var animal = ['うさぎ','ねこ']
animal.unshift('うし')//配列の最初に追加
console.log(animal)

animal.push('いぬ')//配列の最後に追加
console.log(animal)

var nums = []//あらかじめ配列を用意して後から値を入れる
nums.push (1)
nums.push (2)
nums.push (3)
console.log(nums)

//配列の削除
var sports = ['野球','バスケ','サッカー']

sports.shift() //配列の最初を削除する
console.log(sports)

sports.pop()//配列最後を削除する
console.log(sports)

