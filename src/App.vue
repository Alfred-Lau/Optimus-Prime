<template>
    <div id="app">
        <v-header></v-header>
        <router-view></router-view>
        <v-footer></v-footer>
    </div>
</template>

<script type="text/ecmascript-6">
    import header from 'components/header/header'
    import footer from 'components/footer/footer'

    export default {
        name: 'app',
        components: {
            'v-header': header,
            'v-footer': footer
        }
    }

</script>

<style lang="stylus" rel="stylesheet">
    #app
        background-color: #ededed;

</style>
