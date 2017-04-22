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
            </a>
            <el-menu router="true" theme="light" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                     @select="handleSelect">
                <el-menu-item index="index">首页</el-menu-item>
                <el-menu-item index="charts">Echarts</el-menu-item>
                <el-menu-item index="css3h5">CSS Tips</el-menu-item>
                <el-menu-item index="project">Projects</el-menu-item>
                <el-menu-item index="about">Whoami</el-menu-item>

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
        background: #eef1f6
        .brand
            .logo-img
                display: inline-block
                height: 60px
                width: 60px
                border-radius 50%
                background: url("avatar.png")
                vertical-align: top;
                margin: 10px 20px;

        .el-menu-demo
            position:absolute
            right:0
            flex 1
            margin: 0
            padding: 0
            height 80px
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
