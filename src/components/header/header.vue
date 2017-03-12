<template>
    <div>
        <nav class="topnav">
            <ul>
                <li><a href="#">登陆</a></li>
                <li><a href="#">注册</a></li>
            </ul>
        </nav>
        <nav class="main">
            <a class="brand">
                <img src="static/img/logo.jpg" width="88" height="88">
                <span class="text">Code Tank</span>
            </a>
            <ul class="main-first">
                <li>
                    <router-link class="tab-item" to="/index">Index</router-link>
                </li>
                <li>
                    <router-link class="tab-item" to="/charts">Charts</router-link>
                </li>
                <li>
                    <router-link class="tab-item" to="/css3h5">Css vs H5</router-link>
                </li>
                <li>
                    <router-link class="tab-item" to="/project">Project</router-link>
                </li>
                <li>
                    <router-link class="tab-item" to="/about">About Me</router-link>
                </li>
            </ul>
        </nav>
        <div class="spec"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .topnav
        line-height: 3rem
        padding: 0 1.5rem
        background #555
        color: #fff
        border-bottom: 1px solid #ecc000
        ul
            text-align right
            li
                display: inline-block
                a
                    display: inline-block
                    padding: 0 1.5rem
                    color: #fff
            li + li
                border-left: 1px solid #999
                margin-left: -3px

    .main
        width: 100%
        display: flex
        .brand
            img
                height: 88px
                width: 88px
                display: inline-block
                vertical-align: top;
            .text
                font-size 60px
                margin-left: 10px
                line-height: 88px
                font-family "papyrus"
                position: relative
                top: 20px
        .main-first
            text-align right
            flex 1
            margin: 0
            padding: 0
            li
                display: inline-block
                border-left: 1px solid #f0ede9;
                height:100%
                .tab-item
                    display: inline-block;
                    padding: 0 3rem;
                    line-height: 88px;
                    font-size: 1.6rem;
                    font-weight: bold;
                    color: #7c7a65;
                    text-decoration: none;
                    height:100%

    .spec
        width: 100%
        height: 24px
        background-color: #7c7365
</style>
