<template>
    <div class="css3h5">
        <section class="css3h5-feature transformer">
            <div class="transformer-wrapper">
                <div class="css3h5-slide css3h5-top">
                    <img src="static/img/top.jpg">
                </div>
                <div class="css3h5-slide css3h5-top">
                    <img src="static/img/bottom.jpg">
                </div>
                <div class="css3h5-slide css3h5-top">
                    <img src="static/img/left.jpg">
                </div>
                <div class="css3h5-slide css3h5-top">
                    <img src="static/img/right.jpg">
                </div>
                <div class="css3h5-slide css3h5-top">
                    <img src="static/img/front.jpg">
                </div>
                <div class="css3h5-slide css3h5-top">
                    <img src="static/img/back.jpg">
                </div>
            </div>
        </section>
        <section class="css3h5-feature"></section>
        <section class="css3h5-feature"></section>
        <section class="css3h5-feature"></section>
        <section class="css3h5-feature"></section>
        <section class="css3h5-feature"></section>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">

    .css3h5
        width: 90%
        height: 100%;
        margin: 20px auto
        .css3h5-feature
            display: inline-block
            color: red;
            border-radius: 10px;
            -webkit-box-shadow: 3px 3px red, -1em 0 0.4em olive;
            -moz-box-shadow: 3px 3px red, -1em 0 0.4em olive;
            box-shadow: 3px 3px red, -1em 0 0.4em olive;
            width: 40%;
            height: 300px;
            padding: 10px;
            border: 1px solid #ccc;
            margin: 20px auto;
        .css3h5-feature:nth-child(even)
            margin-left: 100px;
        .transformer
            display: inline-block
            perspective: 1600px;
            border-radius: 10px;
            -webkit-box-shadow: 3px 3px red, -1em 0 0.4em olive;
            -moz-box-shadow: 3px 3px red, -1em 0 0.4em olive;
            box-shadow: 3px 3px red, -1em 0 0.4em olive;
            .transformer-wrapper
                width: 200px;
                height: 200px;
                margin: 0 auto;
                transform-style: preserve-3d;
                animation: rotate-frame 30s linear infinite;
                transform-origin: 50% 50% 50px;
                .css3h5-slide
                    /*width: 400px;*/
                    /*height: 400px;*/
                    position: absolute;
                .css3h5-top
                    width: 100px;
                    height: 100px;
                    left: 50px;
                    top: -50px;
                    transform: rotateX(-90deg);
                    transform-origin: bottom;
                    background: url("../../../static/img/top.jpg") center no-repeat;
                .css3h5-top img
                    width: 100%;
                    height: 100%;
                .css3h5-bottom
                    width: 100px;
                    height: 100px;
                    left: 50px;
                    bottom: -50px;
                    transform: rotateX(90deg);
                    transform-origin: top;
                    background: url("../../../static/img/bottom.jpg") center no-repeat;
                .css3h5-bottom img
                    width: 100%;
                    height: 100%;
                .css3h5-left
                    width: 100px;
                    height: 100px;
                    left: -50px;
                    top: 50px;
                    transform: rotateY(90deg);
                    transform-origin: right;
                /*background: url("../images/left.jpg") no-repeat;*/
                .css3h5-left img
                    width: 100%;
                    height: 100%;
                .css3h5-right
                    width: 100px;
                    height: 100px;
                    left: 150px;
                    top: 50px;
                    transform: rotateY(-90deg);
                    transform-origin: left;
                /*background: url("../images/right.jpg") center no-repeat;*/
                .css3h5-right img
                    width: 100%;
                    height: 100%;
                .css3h5-front
                    width: 100px;
                    height: 100px;
                    left: 50px;
                    top: 50px;
                    transform: translateZ(100px);
                    background: url("../../../static/img/front.jpg") center no-repeat;
                .css3h5-front img
                    width: 100%;
                    height: 100%;
                .css3h5-back
                    width: 100px;
                    height: 100px;
                    left: 50px;
                    top: 50px;
                    transform: translateZ(0);
                    background: url("../../../static/img/back.jpg") center no-repeat;
                .css3h5-back img
                    width: 100%;
                    height: 100%;
                @keyframes rotate-frame
                    0%
                        transform: rotateX(0deg) rotateY(0deg);
                    10%
                        transform: rotateX(0deg) rotateY(180deg);
                    20%
                        transform: rotateX(-180deg) rotateY(180deg);
                    30%
                        transform: rotateX(-360deg) rotateY(180deg);
                    40%
                        transform: rotateX(-360deg) rotateY(360deg);
                    50%
                        transform: rotateX(-180deg) rotateY(360deg);
                    60%
                        transform: rotateX(90deg) rotateY(180deg);
                    70%
                        transform: rotateX(0) rotateY(180deg);
                    80%
                        transform: rotateX(90deg) rotateY(90deg);
                    90%
                        transform: rotateX(90deg) rotateY(0);
                    100%
                        transform: rotateX(0) rotateY(0);

</style>
