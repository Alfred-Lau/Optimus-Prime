<template>
    <div class="project">
        <md-card class='md-with-hover'>
            <md-card-header>
                <md-avatar>
                    <img src="static/img/avatar.png" alt="People">
                </md-avatar>

                <div class="md-title">Optimus Prime</div>
                <div class="md-subhead">所有和开发相干的都在这里.</div>
            </md-card-header>

            <md-card-media>
                <img src="static/img/card-image-1.jpg" alt="People">
            </md-card-media>

            <md-card-content>
                全站整体使用 Vuejs 开发,目的用作个人一切和技术相关的个人项目和实验.
            </md-card-content>

            <md-card-actions>
                <md-button href="https://github.com/Alfred-Lau/Optimus-Prime">Github</md-button>
                <md-button>ShowMe</md-button>
            </md-card-actions>
        </md-card>

        <md-card class='md-with-hover'>
            <md-card-media-cover md-solid>
                <md-card-media md-ratio="1:1">
                    <img src="./card-sky.jpg" alt="Skyscraper">
                </md-card-media>

                <md-card-area>
                    <md-card-header>
                        <div class="md-title">Elem-Mobile</div>
                        <div class="md-subhead">使用 Vue 开发的仿造 Eleme 的 WebApp.</div>
                    </md-card-header>

                    <md-card-actions>
                        <md-button href="https://github.com/Alfred-Lau/my_elem">GitHub</md-button>
                        <md-button href="http://project.lazy-minus-your-intelligence.com/elemMobile/index.html">ShowMe</md-button>
                    </md-card-actions>
                </md-card-area>
            </md-card-media-cover>
        </md-card>

    </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .project
        background: #fff
        height: 100%
        padding:100px
        .md-with-hover
            display inline-block
            margin-right: 40px
            width:300px
            height: 400px
</style>
