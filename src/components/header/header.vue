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
                <div class="logo-img"></div>
                <span class="text">Lonely Planet</span>
            </a>
            <el-menu router="true" theme="light" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                     @select="handleSelect">
                <el-menu-item index="index">首页</el-menu-item>
                <el-menu-item index="charts">可视化</el-menu-item>
                <el-menu-item index="css3h5">CSS3 && H5</el-menu-item>
                <el-submenu index="project">
                    <template slot="title">个人项目</template>
                    <el-menu-item index="project">LonelyPlanet</el-menu-item>
                    <el-menu-item index="">my_personal_weblife</el-menu-item>
                    <el-menu-item index="">movie</el-menu-item>
                    <el-menu-item index="">Mobile_Elem</el-menu-item>
                </el-submenu>
                <el-submenu index="about">
                    <template slot="title">关于我</template>
                    <el-menu-item index="">博客</el-menu-item>
                    <el-menu-item index="">Github</el-menu-item>
                    <el-menu-item index="about">简历</el-menu-item>
                </el-submenu>
            </el-menu>
        </nav>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .topnav
        line-height: 1.5rem
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
            .logo-img
                display: inline-block
                height: 60px
                width: 60px
                border-radius 50%
                background: url("logo.jpg")
                vertical-align: top;
                margin: 10px 20px;
            .text
                font-size 50px
                margin-left: 10px
                line-height: 88px
                font-family "papyrus"
                position: relative
                bottom: -8px;
        .el-menu-demo
            position:absolute
            right:0
            flex 1
            margin: 0
            padding: 0
            height 88px
            .el-menu-item
                line-height: 88px
                height: 88px
                padding-left: 35px
                padding-right: 35px
            .el-submenu
                margin-top:0
                padding-right: 35px
                .el-submenu__title
                    margin-top:0
                    height: 88px
                    line-height: 84px

</style>
