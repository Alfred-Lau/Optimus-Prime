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
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
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
</style>
