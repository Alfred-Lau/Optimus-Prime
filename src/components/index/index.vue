<template>
    <div class="index">
        <section class="ad">
            <div class="owl-carousel owl-theme">
                <div class="item">
                    <picture>
                        <source srcset="static/img/ad001-l.jpg" media="(min-width:50em)">
                        <source srcset="static/img/ad001-m.png" media="(min-width:30em)">
                        <img src="static/img/ad001-m.png">
                    </picture>
                </div>
                <div class="item">
                    <picture>
                        <source srcset="static/img/ad001-l.jpg" media="(min-width:50em)">
                        <source srcset="static/img/ad001-m.png" media="(min-width:30em)">
                        <img src="static/img/ad002-m.png">
                    </picture>
                </div>
                <div class="item">
                    <picture>
                        <source srcset="static/img/ad001-l.jpg" media="(min-width:50em)">
                        <source srcset="static/img/ad001-m.png" media="(min-width:30em)">
                        <img src="static/img/ad003-m.png">
                    </picture>
                </div>
            </div>
        </section>
        <section class="feature-container">
            <div class="feature-wrapper">
                <v-feature></v-feature>
            </div>
            <div class="feature-wrapper">
                <v-feature></v-feature>
            </div>
            <div class="feature-wrapper">
                <v-feature></v-feature>
            </div>
        </section>
        <section class="notice">
            <!--此处不要直接使用<,>之类的符号,使用的时候需要转义-->
            <span class="date">2016-08-12</span>
            <span class="content">更新了整体架构和首页导航</span>
            <span class="more">更多更新值得期待</span>
        </section>
    </div>
</template>

<script type="text/ecmascript-6">
    import Feature from 'components/feature/feature'

    export default {
        components: {
            'v-feature': Feature
        },
        created () {
            $(function () {
                $(".owl-carousel").owlCarousel({
                    items: 1,
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 3000,
                    autoplayHoverPause: true

                });
            })
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .index
        width: 100%
        min-height: 600px
        .feature-container
            display flex
            width: 90%
            margin: 20px auto
            .feature-wrapper
                flex 1
                margin-right: 10px
                padding: 0
                text-align center
                &:last-child
                    margin-right: none;

        .notice
            position: relative
            width: 90%;
            margin: 3rem auto;
            font-size: 1.4rem;
            line-height: 3rem;
            background-color: #fff;
            box-shadow: 0 0 4px #ccc;
            padding: 5px 15px
            .date, .content, .more
                display: inline-block
            .date::before
                content: '最新更新: \00a0\00a0'
                color: #aaa
            .date
                color: #999;
                font-size: 1.2rem;
                margin-right: 1rem;
            .more
                position: absolute
                right: 2rem
                color: #f90


</style>

