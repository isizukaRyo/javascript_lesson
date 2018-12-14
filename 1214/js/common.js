
var tabMenuItem = $('.tabMenuItem');
var tabItem = $(`.tabItem`);
var currentNum = 0; //いま自分がどこにいる
var prev = $('.prev');
var next = $('.next');
var currentNum = 0
var isRoop = false;//true 繰り返し false歯止め

tabMenuItem.on('click', function () {
    //    console.log($(this).index());
    move($(this).index()) //thisはクリックされた自分自身
})

prev.on('click', function () {
    //    console.log('前', currentNum);
    //ここで前をmove関数に渡してあげる
    move(currentNum - 1);
})

next.on(`click`, function () {
    move(currentNum + 1);
})
//引数num番目にクラスにだけonをつける関数

function move(num) {
      var last = tabMenuItem.length - 1;
    if(isRoop){
        if (num < 0) {
            num = last; // 数は4で配列番号は３　　4-1(tabMenuItem-1)で3になる
        //        console.log("length[3]");
        } else if (num > last) {
            num = 0;
        } 
    } else {
        num = Math.min(num,last)
        num = Math.max(num,0)
    }
    
    currentNum = num
    console.log(currentNum); //自分がクリックした位置をconsole
    tabMenuItem.removeClass('on');
    tabMenuItem.eq(num).addClass('on'); //eqは1つだけ取る　　　電気をつける時と同じような考え方をする
    tabItem.removeClass('on');
    tabItem.eq(num).addClass('on');
}
  



//クラスを消すときは
//tabMenuItem.removeClass('on)
