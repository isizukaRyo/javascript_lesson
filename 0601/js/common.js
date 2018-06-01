$('.box').parallaxFit({
    start: 0,
    end: 500,
    fromStyle: {
        transform: 'scale(1) rotate(0deg)',
        backgroundColor: 'rgb(255,0,0)'
    },
    toStyle: {
        transform: 'scale(2) rotate(180deg)',
        backgroundColor: 'rgb(0, 255,0)',
        left: '200px'
    },
    //モーション
    motion1Start: 600,
    motion1End: 800,
    motion1ToStyle: {
        top: '500px'
    },
    motion1Easing: 'easeOutBounce',
    motion2Start: 800,
    motion2End: 1500,
    motion2ToStyle: {
        width: '300px',
        height: '500px',
        backgroundColor: 'rgb(0,0,0)'

    },
    motion2Easing: 'easeInElastic',
    motion3Easing: 'easeOutBounce',
    motion3Start: 1500,
    motion3End: 2000,
    motion3ToStyle: {
        width: '300px',
        backgroundColor: 'blue'

    },
    motion2Easing: 'easeInOutBack'
})
