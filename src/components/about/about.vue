<template>
    <div class="about">
        <div class="timeline-wrapper">
            <timeline class="timeline">
                <timeline-item date="2 minutes ago" icon="twitter" type="primary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante soe aiea ose dos soois.
                </timeline-item>
                <timeline-item type="primary" date="Sat, 5 Mar">
                    <p>adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <p><a href="">news center</a></p>
                    <p><img src="https://pek3a.qingstor.com/warehouse1/c1.jpg" /></p>
                </timeline-item>
                <timeline-item date="Sun, 11 Feb" icon="wechat" type="success">
                    Call to customer Jacob and discuss the detail.
                </timeline-item>
            </timeline>
        </div>
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
        .timeline-wrapper
            width:400px
            padding: 20px
</style>
