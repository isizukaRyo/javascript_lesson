function test(){
    console.log('test')
}//自分の好きなタイミングで実行できる

test()//実行

function addNum(num,num1) {
    console.log(num + num1)
}

addNum(1,10)//引数を渡して実行

function forNumber(num) {
    for(var i = 0; i < num ;i++){
        console.log(i)
    }
}
forNumber(2)

function addNum2(num,num1){
return num + num1 //returnで数字として戻して＋している
}
console.log(addNum2(1,1000))


//引数で渡して数が入った配列を返す関数
function numArray(num){
    var ary = []
    
    
    for(var i = 0;i < num;i++){
        ary[i] = i
    }
    return ary
}
console.log(numArray(20))
console.log(numArray(50))