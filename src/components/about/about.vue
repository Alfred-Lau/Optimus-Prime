<template>
    <div class="about">
        <md-card class='md-with-hover'>
            <md-card-header>
                <md-avatar>
                    <img src="static/img/avatar.png" alt="People">
                </md-avatar>

                <div class="md-title">Title goes here</div>
                <div class="md-subhead">Subtitle here</div>
            </md-card-header>

            <md-card-media>
                <img src="static/img/card-image-1.jpg" alt="People">
            </md-card-media>

            <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
            </md-card-content>

            <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .about
        height:100%
        margin: 0 auto
        padding:100px 100px
        background-color: #fff
        .md-with-hover
            width:300px


</style>
