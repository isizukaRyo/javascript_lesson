for (var i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i + '偶数！')
    } else {
        console.log(i + '奇数')
    }
}
for (var i = 0; i < 100; i++) {
    $('body').append('<div class="box"></div>');
    var r = Math.random() * 255

    var g = Math.random() * 255

    var b = Math.random() * 255
    $('.box').eq(i).css({
        left: Math.random() * 1000 + 'px',
        top: Math.random() * 1000 + 'px',
        backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')'
    })
    $('.box').eq(i).parallaxSpeed({
        style: 'top',
        speed: Math.random() * 2 - 1,
        fixStyleValue: String($('.box').eq(i).css('top')),
        fixScrollPosition: 0
    });
}
