//Q1
var nums = []
for(var i = 0; i  <= 50; i++){
    nums.push(i);
}
console.log(nums);//console.logも50回回ってしまうのでかっこの外にだす

nums.reverse();
console.log(nums);

//Q2
var fruits  = ['りんご', 'バナナ', 'パイナップル', 'ぶどう', 'すいか', 'めろん'];
for (var i = 0; i <= fruits.length; i ++){
   console.log(fruits[i]); 
}
//Q3

var fruits = {
  red : ['りんご', 'さくらんぼ', 'いちご'],
  orange : ['かき', 'みかん', 'びわ'],
  yellow : ['バナナ', 'パイナップル', 'レモン']
}
for(fruit in fruits){
    console.log(fruit, fruits[fruit])
    console.log (fruit + '(' + fruits[fruit] + ')'); //復習
}

//    console.log ('red' + '(' + fruits.red + ')');
//    console.log ( 'orange' + '(' + fruits.orange + ')');
//console.log('red' + '(' + fruits.red + ')')
//Q4
var date = '2013/4/26/金/10:10';
console.log  (date.split('/'));
//Q5




