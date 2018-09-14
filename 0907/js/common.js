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
nums.push(1)
nums.push(2)
nums.push(3)
console.log(nums)

//配列の削除
var sports = ['野球','バスケ','サッカー']

sports.shift() //配列の最初を削除する
console.log(sports)

sports.pop()//配列最後を削除する
console.log(sports)

//配列の差し替え
console.log(fruits)
fruits.splice(1,2, '追加したい値1','追加したい価2');
console.log(fruits)

//配列の取り出し
var song = ['演歌','ジャズ',' J-POP']
console.log(song.slice(1.3))
console.log(song.slice(1))//2つ目を省略すると最後まで

//配列のソート
var sortNums =[3,4,2,6,9,1]
sortNums.sort()//123469の順番にしている
console.log(sortNums)

//配列の逆順
sortNums.reverse()//964321の順番にしている
console.log(sortNums)

//文字列を区切り文字で配列に変換
var date = '2013/4/26';
console.log(date.split('/'));
