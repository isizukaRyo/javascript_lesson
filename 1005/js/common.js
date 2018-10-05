//0~1までのランダムな数字
console.log(Math.random());

//小数点をきる
console.log(Math.floor(3.555));

//0~9までのランダムな数字小数点あり
console.log(Math.floor() * 10);

//1~9までのランダムな数字小数点あり
console.log(Math.floor() * 10 + 1);

//0から10までのランダムな整数
console.log(Math.floor(Math.random() * 10));

//1から10までのランダムな整数
console.log(Math.floor(Math.random() * 10) + 1);

//配列の値をランダムで出す
var names =['亀井','渡邊','安倍']
console.log(names[Math.floor(Math.random() * names.lenght)])// *た数だけだす これだったら０〜２まで

//繰り上げ
console.log(Math.ceil(3.1))
 //四捨五入
console.log(Math.round(0.1))
//最大値　最小値 それぞれ取得する
console.log(Math.min(1,2,3,4))
console.log(Math.max(1,2,3,4))

//最大値　最小値を決めたい
var randomNum = Math.floor(Math.random() * 100)
console.log(Math.min(randomNum,50))//最大値を50とする
console.log(Math.max(randomNum,50))//最小値を50とする



//js問題
console.log('Q1')

console.log(numObj(100));
function numObj(num){
    var numObj = {
        odd: [],
        even:[]
    }
    for(var i = 1; i <=100; i ++){
        if(i % 2 ===0){
            numObj.odd.push(i)
        }else{
            numObj.even.push(i)
        }
    }
 return numObj
}


console.log('Q2')

var fruits = ['りんご', 'めろん', 'ぶどう'];

console.log(addfruit(fruits, 'すいか'));
function addfruit(Obj1,Obj2){
    Obj1.push(Obj2)     //obj1が配列
    return Obj1
}
console.log('Q3')

console.log(randomNum2(10));
function randomNum2(num){
    return Math.floor(Math.random() * num)
}