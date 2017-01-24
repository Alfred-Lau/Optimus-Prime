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
        <section class="notice ">
            <!--此处不要直接使用<,>之类的符号,使用的时候需要转义-->
            <span class="date">2016-08-12</span>
            <span class="content">更新了整体架构和首页导航</span>
            <span class="more">更多更新值得期待</span>
        </section>
        <section class="product ">
            <h1 class="title">
                项目列表
                <span class="sub-title">不念过往</span>
                <span class="sub-title">不畏将来</span>
            </h1>
            <div class="content">
                <div class="item">
                    <h3><em>准备中</em></h3>
                    <div class="info">
                        <p>实现功能数
                            <span class="count">1<i>项</i></span>
                        </p>
                        <p>代码量
                            <span class="count">1330<i>行</i></span>
                        </p>
                    </div>
                    <div class="doc">
                        <a>
                            查看设计文档
                        </a>
                    </div>
                </div>
                <div class="item">
                    <h3><em>准备中</em></h3>
                    <div class="info">
                        <p>实现功能数
                            <span class="count">1<i>项</i></span>
                        </p>
                        <p>代码量
                            <span class="count">1330<i>行</i></span>
                        </p>
                    </div>
                    <div class="doc">
                        <a>
                            查看设计文档
                        </a>
                    </div>
                </div>
                <div class="item">
                    <h3><em>准备中</em></h3>
                    <div class="info">
                        <p>实现功能数
                            <span class="count">1<i>项</i></span>
                        </p>
                        <p>代码量
                            <span class="count">1330<i>行</i></span>
                        </p>
                    </div>
                    <div class="doc">
                        <a>
                            查看设计文档
                        </a>
                    </div>
                </div>
                <div class="item">
                    <h3><em>准备中</em></h3>
                    <div class="info">
                        <p>实现功能数
                            <span class="count">1<i>项</i></span>
                        </p>
                        <p>代码量
                            <span class="count">1330<i>行</i></span>
                        </p>
                    </div>
                    <div class="doc">
                        <a>
                            查看设计文档
                        </a>
                    </div>
                </div>
                <div class="item">
                    <h3><em>准备中</em></h3>
                    <div class="info">
                        <p>实现功能数
                            <span class="count">1<i>项</i></span>
                        </p>
                        <p>代码量
                            <span class="count">1330<i>行</i></span>
                        </p>
                    </div>
                    <div class="doc">
                        <a>
                            查看设计文档
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="footer">
            <div class="img-wrapper">
                <img class="logo" src="static/img/logo.jpg" width="120" height="120">
            </div>
            <ul class="title-ul">
                <li class="title-item">
                    <h1 class="sub-title">关于我</h1>
                    <ul class="content-ul">
                        <li class="content-item">GitHub</li>
                        <li class="content-item">Email</li>
                    </ul>
                </li>
                <li class="title-item">
                    <h1 class="sub-title">维护项目</h1>
                    <ul class="content-ul">
                        <li class="content-item">n-novel</li>
                        <li class="content-item">my_website</li>
                    </ul>
                </li>
                <li class="title-item">
                    <h1 class="sub-title">正在学习</h1>
                    <ul class="content-ul">
                        <li class="content-item">Node.js</li>
                        <li class="content-item">Vue.js</li>
                    </ul>
                </li>
                <li class="title-item">
                    <h1 class="sub-title">意见反馈</h1>
                    <ul class="content-ul">
                        <li class="content-item">feedback</li>
                        <li class="content-item">contact</li>
                    </ul>
                </li>
            </ul>
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
            padding: 5px 0
            .date, .content, .more
                display: inline-block
            .date::before
                /*\00a0为空格的意思*/
                content: '\00a0\00a0 最新更新: \00a0\00a0'
                color: #aaa
            .date
                color: #999;
                font-size: 1.2rem;
                margin-right: 1rem;
            .more
                position: absolute
                right: 2rem
                color: #f90
        .product
            width: 90%
            margin: 2rem auto
            font-size: 1.4rem;
            background-color: #f5f9fa;
            border-top: 2px solid #f90;
            box-shadow: 0 0 4px #ccc
            .title
                display: inline-block
                width: 20%;
                text-align: center;
                vertical-align: top
                font-size: 2.4rem;
                font-weight: normal;
                margin-top: 3rem
                color: #635c51;
                .sub-title
                    display: block;
                    margin-top: 1rem;
                    font-size: 1.6rem;
                    &:first-child
                        margin-top: 4rem;
            .content
                display: inline-block
                width: 79.5%;
                border-left: 1px solid #eee;
                background-color: #fff;
                .item
                    display: block
                    width: 100%
                    h3
                        display: inline-block
                        width: 30%;
                        margin: 1.5rem 0;
                        font-size: 1.4rem;
                        font-weight: normal;
                        text-align: center;
                        em
                            margin-right: 0.5rem;
                            font-size: 3.6rem;
                            font-style: normal;
                            color: #8b999d;
                    .info
                        display: inline-block
                        width: 48%;
                        padding: 2rem 0;
                        border-left: 1px solid #eee;
                        border-right: 1px solid #eee;
                        font-size: 14px;
                        p
                            display: inline-block;
                            text-align: center;
                            width: 56%;
                            .count
                                display: block;
                                margin-top: 5px;
                                font-size: 2.4rem;
                                color: #f90;
                                i
                                    font-size: 1.2rem;
                                    font-style: normal;
                                    color: #999;
                        p:last-child
                            width: 40%;
                    .doc
                        display: inline-block
                        width: 15%
                        padding: 1rem;
                        a
                            display: block;
                            width: 90%;
                            margin: 1.5rem auto;
                            max-width: 12rem;
                            line-height: 4rem;
                            text-align: center;
                            text-decoration: none;
                            color: #fff;
                            background-color: #f90;
                            border-radius: 5px;

                .item + .item
                    border-top: 1px solid #eee;
        .footer
            background-color: #fff
            .img-wrapper
                display inline-block
                width: 20%
                margin-left: 100px;
            .title-ul
                display: inline-block
                width: 70%
                vertical-align: top
                .title-item
                    display: inline-block
                    width: 15%
                    .sub-title
                        font-size: 2.6rem;
                        line-height: 3rem;
                    .content-ul
                        .content-item
                            font-size: 1.4rem;
                            line-height: 2.4rem;
</style>

