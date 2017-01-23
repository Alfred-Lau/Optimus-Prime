<template>
    <div class="footer">
        <ul class="grant">
            <li class="grant-item"><span class="icon icon-pcirk">PCI认证</span></li>
            <li class="grant-item"><span class="icon icon-visayz">VISA认证</span></li>
            <li class="grant-item"><span class="icon icon-zfywxk">支付业务许可</span></li>
            <li class="grant-item"><span class="icon icon-vsjmfw">VERSIGN加密服务</span></li>
            <li class="grant-item"><span class="icon icon-wlgs">网络工商</span></li>
            <li class="grant-item"><span class="icon icon-rzcx">电子商务协会认证诚信网</span></li>
            <li class="grant-item"><span class="icon icon-gs">北京工商</span></li>
        </ul>
        <div class="copyright">
            <span class="text">CodeTank ®版权所有 2016-2016</span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .footer
        width: 100%
        background-color: #ededed
        /*上3下5*/
        padding: 3rem 0 5rem;
        .grant
            text-align: center
            .grant-item
                display: inline-block
                .icon
                    display: inline-block
                    /*通过文字的缩进，隐藏掉文字*/
                    text-indent: -999rem;
                    margin-right: 1.5rem;
                    background: url(https://i.alipayobjects.com/e/201307/jebmKcbrh.png) no-repeat;
                    background-size: 466px 447px;
                    overflow: hidden;
                .icon-zfywxk
                    width: 38px
                    height: 27px
                    background-position -369px -45px
                .icon-pcirk
                    width: 78px
                    height: 27px
                    background-position: -110px -96px
                .icon-visayz
                    width: 36px
                    height: 27px
                    background-position: -426px -90px
                .icon-vsjmfw
                    width: 63px
                    height: 27px
                    background-position: -401px -186px
                    margin-right: 13px;
                .icon-wlgs
                    width: 22px
                    height: 27px
                    background-position: -48px -48px
                .icon-rzcx
                    width: 75px
                    height: 27px
                    background-position: 0px -320px
                .icon-gs
                    width: 30px
                    height: 30px
                    margin-right: 0;
                    background: url(https://os.alipayobjects.com/rmsportal/lybcjqloSPjMAFg.png) no-repeat;
                    background-size: 30px;
        .copyright
            text-align: center
            margin-top: 1.5rem
            .text
                color: #999
</style>
