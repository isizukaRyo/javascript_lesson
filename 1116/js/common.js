//jquery

var tabMenuItem = $('.tabMenuItem');
var tabItem =$(`.tabItem`); 
var currentNum = 0;//いま自分がどこにいる
var prev =$('.prev');
var next = $('.next');
console.log(tabMenuItem);

tabMenuItem.on('click', function(){
//    console.log($(this).index());
    move($(this).index())//thisはクリックされた自分自身
})

prev.on('click',function(){
    move(currentNum - 1);
})

next.on(`click`,function(){
    move(currentNum + 1);
})
//引数num番目にクラスにだけonをつける関数
function move(num){
    currentNum = num
    console.log(currentNum);//自分がクリックした位置をconsole
    tabMenuItem.removeClass('on');
    tabMenuItem.eq(num).addClass('on');//eqは1つだけ取る　　　電気をつける時と同じような考え方をする
    tabItem.removeClass('on');
    tabItem.eq(num).addClass('on');
    
}

//クラスを消すときは
//tabMenuItem.removeClass('on)
