<template>
    <div class="css3h5">
        <md-whiteframe md-elevation="10" class="css3h5-item">
            <div class="text">
                Translucent borders
            </div>
        </md-whiteframe>
        <md-whiteframe md-elevation="10" class="css3h5-item">
            <canvas id="clock"></canvas>
        </md-whiteframe>
        <md-whiteframe md-elevation="10" class="css3h5-item">
            <canvas id="falls"></canvas>
        </md-whiteframe>
        <md-whiteframe md-elevation="10" class="css3h5-item">
            <p class="loading">Loading…</p>
        </md-whiteframe>
        <md-whiteframe md-elevation="10" class="css3h5-item">
            <img src="http://csssecrets.io/images/tiger.jpg" />
        </md-whiteframe>
        <md-whiteframe md-elevation="10" class="css3h5-item">
            <main>
                <blockquote>“The only way to get rid of a temptation is to yield to it. Resist it, and your soul grows sick with longing for the things it has forbidden to itself, with desire for what its monstrous laws have made monstrous and unlawful.”
                    <footer>— <cite>Oscar Wilde, The Picture of Dorian Gray</cite></footer>
                </blockquote>
            </main>
        </md-whiteframe>
        <md-whiteframe md-elevation="10" class="css3h5-item">
            <div>
                “The only way to get rid of a temptation is to yield to it.”
                — Oscar Wilde, The Picture of Dorian Gray
            </div>
        </md-whiteframe>
        <md-whiteframe md-elevation="10" class="css3h5-item">
            <canvas id="ball" width="1000" height="430">
            </canvas>
        </md-whiteframe>
        <md-whiteframe md-elevation="10" class="css3h5-item">
            <ball></ball>
            <shadow></shadow>
        </md-whiteframe>
        <md-whiteframe md-elevation="10" class="css3h5-item"></md-whiteframe>
        <md-whiteframe md-elevation="10" class="css3h5-item"></md-whiteframe>
        <md-whiteframe md-elevation="10" class="css3h5-item"></md-whiteframe>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        methods: {
            initCanvasForBall: function (id) {
                var canvas = document.getElementById(id);
                // 确定是否支持 canvas
                if (canvas.getContext) {
                    var ctx = canvas.getContext('2d')
                    var raf;
                    var ball = {
                        x: 100,
                        y: 100,
                        vx: 5,
                        vy: 2,
                        radius: 25,
                        color: 'blue',
                        // 初始状态
                        draw: function() {
                            ctx.beginPath();
                            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
                            ctx.closePath();
                            ctx.fillStyle = this.color;
                            ctx.fill();
                        }
                    };

                    function draw() {
                        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                        // ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ball.draw();
                        ball.vy *= .99;
                        ball.vy += .25;
                        ball.x += ball.vx;
                        ball.y += ball.vy;
                        if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
                            ball.vy = -ball.vy;
                        }
                        if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
                            ball.vx = -ball.vx;
                        }
                        raf = window.requestAnimationFrame(draw);
                    }

                    canvas.addEventListener('mouseover', function(e) {
                        raf = window.requestAnimationFrame(draw);
                    });

                    canvas.addEventListener('mouseout', function(e) {
                        window.cancelAnimationFrame(raf);
                    });

                    ball.draw();

                }
            },
            initCanvasForClock: function (id) {
                console.log('in')

                let canvas = document.getElementById(id), //获取canvas元素
                        context = canvas.getContext('2d'), //获取画图环境，指明为2d
                        centerX = canvas.width / 2, //Canvas中心点x轴坐标
                        centerY = canvas.height / 2, //Canvas中心点y轴坐标
                        rad = Math.PI * 2 / 100, //将360度分成100份，那么每一份就是rad度
                        speed = 0.1; //加载的快慢就靠它了
                console.log(canvas)

                //绘制蓝色外圈
                function blueCircle(n) {
                    context.save();
                    context.strokeStyle = "#49f"; //设置描边样式
                    context.lineWidth = 5; //设置线宽
                    context.beginPath(); //路径开始
                    let start = -Math.PI / 2;
                    let end = -Math.PI / 2 + n * rad;
                    context.arc(centerX, centerY, 50, start, end, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
                    context.stroke(); //绘制
                    context.closePath(); //路径结束
                    context.restore();
                }

                //绘制白色外圈
                function whiteCircle() {
                    context.save();
                    context.beginPath();
                    context.strokeStyle = "white";
                    context.arc(centerX, centerY, 50, 0, Math.PI * 2, false);
                    context.stroke();
                    context.closePath();
                    context.restore();
                }

                //百分比文字绘制
                function text(n) {
                    context.save(); //save和restore可以保证样式属性只运用于该段canvas元素
                    context.strokeStyle = "#49f"; //设置描边样式
                    context.font = "20px Arial"; //设置字体大小和字体
                    //绘制字体，并且指定位置
                    context.strokeText(n.toFixed(0) + "%", centerX - 15, centerY + 10);
                    context.stroke(); //执行绘制
                    context.restore();
                }

                //动画循环
                (function drawFrame() {
                    window.requestAnimationFrame(drawFrame, canvas);
                    context.clearRect(0, 0, canvas.width, canvas.height);

                    whiteCircle();
                    text(speed);
                    blueCircle(speed);

                    if (speed > 100) speed = 0;
                    speed += 0.1;
                }());
            },
            initCanvasForFalls: function (id) {
                var falls = document.getElementById(id),
                        context = falls.getContext('2d'),
                        w, h;
                w = falls.width = window.innerWidth;
                h = falls.height = window.innerHeight;

                //初始化
                var clearColor = 'rgba(0, 0, 0, .1)', //用于绘制渐变阴影
                        wordColor = "#33ff33", //文字颜色
                        words = "0123456789qwertyuiopasdfghjklzxcvbnm,./;'\[]QWERTYUIOP{}ASDFGHJHJKL:ZXCVBBNM<>?",
                        wordsArr = words.split(''), //将文字拆分进一个数组
                        font_size = 16, //字体大小
                        clumns = w / font_size, //文字降落的列数
                        drops = [];

                for (var i = 0; i < clumns; i++) {
                    drops[i] = 1;
                }

                function draw() {
                    context.save();
                    context.fillStyle = wordColor;
                    context.font = font_size + "px arial";
                    //核心

                    for (var i = 0; i < drops.length; i++) {
                        var text = wordsArr[Math.floor(Math.random() * wordsArr.length)];
                        context.fillText(text, i * font_size, drops[i] * font_size);
                        if (drops[i] * font_size > h && Math.random() > 0.98) {
                            drops[i] = 0;
                        }
                        drops[i]++;
                    }
                    context.restore();
                }

                //动画循环
                (function drawFrame() {
                    window.requestAnimationFrame(drawFrame, falls);
                    context.fillStyle = clearColor;
                    context.fillRect(0, 0, w, h);

                    draw();
                }())

                //resize
                function resize() {
                    w = falls.width = window.innerWidth;
                    h = falls.height = window.innerHeight;
                    ``
                }

                falls.addEventListener("resize", resize);
            }
        },
        mounted (){
            this.initCanvasForClock('clock')
            this.initCanvasForFalls('falls')
            this.initCanvasForBall('ball')
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .css3h5
        height: 100%;
        width: 100%
        padding: 30px
        background-color: #fff
        display: flex
        flex-wrap wrap
        justify-content: space-between
        .css3h5-item
            margin-top: 20px
            width: 45%
            height: 400px
        .css3h5-item:nth-child(1)
            background: url("stone-art.jpg")
            .text
                max-width: 20em;
                padding: 2em;
                margin: 8em auto 0;
                // 注意顺序
                background: #fff
                background-clip: padding-box;
                border: 10px solid hsla(0, 0%, 100%, .5)
                font: 100% / 1.5 sans-serif;
        .css3h5-item:nth-child(2)
            display: -webkit-box;
            -webkit-box-pack: center;
            -webkit-box-align: center;
            background: #3baa3d;
        .css3h5-item:nth-child(3)
            background: #000;
            padding: 10px;
            overflow: hidden;
            #falls
                height: 490px
                width: 1760px
        .css3h5-item:nth-child(4)
            display: flex;
            text-align: center;
            background: #655;
            color: white;
            @keyframes spin
                to
                    transform: rotate(1turn)
            @keyframes radius
                50%
                    border-radius: 50%
            @keyframes color
                33%
                    color: orange;
                66%
                    color: deeppink
            @keyframes width
                50%
                    border-width: .3em
            .loading
                margin: auto
            .loading:before
                content: '';
                display: block;
                width: 4em;
                height: 4em;
                margin: 0 auto 1em;
                border: 1.5em solid;
                color: yellowgreen;
                box-sizing: border-box;
                animation: 1s spin, .7s radius, 1.1s color, 1.3s width;
                animation-timing-function: linear;
                animation-iteration-count: infinite;


        .css3h5-item:nth-child(5)
            overflow: hidden
            img
                transition: 1s filter, 1s -webkit-filter;
                -webkit-filter: sepia() saturate(4) hue-rotate(295deg);
                filter: sepia() saturate(4) hue-rotate(295deg);
            img:hover,
            img:focus
                -webkit-filter: none;
                filter: none;
        .css3h5-item:nth-child(6)
            box-sizing: border-box;
            display: flex;
            font: 150%/1.6 Baskerville, Palatino, serif;
            background: url("http://csssecrets.io/images/tiger.jpg") 0 / cover fixed;
            main::before
                background: url("http://csssecrets.io/images/tiger.jpg") 0 / cover fixed;
            main
                text-align center
                position: relative;
                margin: auto;
                padding: 1em;
                max-width: 23em;
                background: hsla(0,0%,100%,.25) border-box;
                overflow: hidden;
                border-radius: .3em;
                box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset,
                        0 .5em 1em rgba(0, 0, 0, 0.6);
                text-shadow: 0 1px 1px hsla(0,0%,100%,.3);
            main::before
                content: '';
                position: absolute;
                top: 0; right: 0; bottom: 0; left: 0;
                margin: -30px;
                z-index: -1;
                -webkit-filter: blur(20px);
                filter: blur(20px);
                blockquote
                    font-style: italic
                blockquote cite
                    font-style: normal;
        .css3h5-item:nth-child(7)
            position: relative;
            background: #58a; /* Fallback */
            background: linear-gradient(-150deg, transparent 1.5em, #58a 0);
            padding: 10em;
            color: white;
            font: 100%/1.6 Baskerville, Palatino, serif;
            border-radius: .5em;
            text-align center
            vertical-align middle
        .css3h5-item:nth-child(7)::before
            content: '';
            position: absolute;
            top: 0; right: 0;
            width: 1.73em; height: 3em;
            background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,.2) 0, rgba(0,0,0,.4)) 100% 0 no-repeat;
            transform: translateY(-1.3em) rotate(-30deg);
            transform-origin: bottom right;
            border-bottom-left-radius: .5em;
            box-shadow: -.2em .2em .3em -.1em rgba(0,0,0,.15)
        .css3h5-item:nth-child(9)
            ball
                width: 100px;
                height: 100px;
                border-radius: 100px;
                position: absolute;
                left: 50%;
                bottom: 20px;
                margin-left: -50px;
                background-color: #34538b;
                background-image: -webkit-radial-gradient(100px 100px at 50px 20px, #a0b3d6, #34538b);
                background-image: -moz-radial-gradient(100px 100px at 50px 20px, #a0b3d6, #34538b);
                background-image: radial-gradient(100px 100px at 50px 20px, #a0b3d6, #34538b);
                cursor: move;
                z-index: 1;
            shadow
                position: absolute;
                width: 100px;
                height: 30px;
                position: absolute;
                left: 50%;
                bottom: 5px;
                margin-left: -50px;
                background-image: -webkit-radial-gradient(ellipse closest-side, rgba(0, 0, 0, .75), rgba(0, 0, 0, 0));
                background-image: -moz-radial-gradient(ellipse closest-side, rgba(0, 0, 0, .75), rgba(0, 0, 0, 0));
                background-image: radial-gradient(ellipse closest-side, rgba(0, 0, 0, .75), rgba(0, 0, 0, 0));

</style>
