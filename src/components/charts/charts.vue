<template>
    <div class="charts">
        <div class="chart-wrapper">
            <chart :options="bar" ref="bar"></chart>
        </div>
        <div class="chart-wrapper">
            <chart :options="line" ref="line"></chart>
        </div>
        <!--<div class="btn" @click="loadDetail">dsds</div>-->
        <!--{{ detailPOL }}-->
    </div>
</template>

<script type="text/ecmascript-6">
    import Vue from 'vue'
    import ECharts from 'vue-echarts/components/ECharts'
    import 'echarts/lib/chart/bar'
    import 'echarts/lib/chart/line'
    import 'echarts/lib/component/tooltip'
    import 'echarts/lib/component/legend'
    import 'echarts/lib/component/title'
    import 'echarts/lib/component/grid'
    import 'echarts/lib/component/dataZoom'
    import 'echarts/lib/component/markArea'
    // import 'echarts/lib/component/toolbox'

    Vue.component('chart', ECharts)

    export default {
        computed: {
            detailPOL () {
                return this.detail

            },
            bar () {
                return {
                    tooltip: {},
                    legend: {
                        data: ['房租']
                    },
                    xAxis: {
                        axisLabel: {
                            show: true,
                            // 强制显示所有标签
                            interval: 5
                            // {number}
                            // rotate: 45,
                            // margin: 8
                        },
                        data: this.bardata.xdata
                    },
                    yAxis: {},
                    series: [{
                        name: '房租',
                        type: 'bar',
                        data: this.bardata.value
                    }]
                }
            },
            line () {
                return {
                    title: {
                        text: '房租面积分布图',
                        subtext: '数据来自链家网',
                        x: 'center',
                        align: 'right'
                    },
                    grid: {
                        bottom: 80
                    },
                    toolbox: {
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            animation: false
                        }
                    },
                    legend: {
                        data: ['房租', '面积'],
                        x: 'left'
                    },
                    dataZoom: [{
                        show: true,
                        realtime: true,
                        start: 0,
                        end: 20
                    }, {
                        type: 'inside',
                        realtime: true,
                        start: 0,
                        end: 20
                    }],
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        axisLine: {onZero: false},
                        data: this.linedata.xdata,
                    }],
                    yAxis: [{
                        name: '房租(￥/月)',
                        type: 'value',
                        max: 20000
                    }, {
                        name: '面积(m2)',
                        nameLocation: 'start',
                        max: 200,
                        type: 'value',
                        inverse: true
                    }],
                    series: [{
                        name: '房租',
                        type: 'line',
                        animation: false,
                        areaStyle: {
                            normal: {}
                        },
                        lineStyle: {
                            normal: {
                                width: 1
                            }
                        },
                        markArea: {
                            silent: true,
                            data: [
                                [{
                                    xAxis: '2009/9/12\n7:00'
                                }, {
                                    xAxis: '2009/9/22\n7:00'
                                }]
                            ]
                        },
                        data: this.linedata.value
                    }, {
                        name: '面积',
                        type: 'line',
                        yAxisIndex: 1,
                        animation: false,
                        areaStyle: {
                            normal: {}
                        },
                        lineStyle: {
                            normal: {
                                width: 1
                            }
                        },
                        markArea: {
                            silent: true,
                            data: [
                                [{
                                    xAxis: '2009/9/10\n7:00'
                                }, {
                                    xAxis: '2009/9/20\n7:00'
                                }]
                            ]
                        },
                        data: this.linedata.area
                    }]
                }
            }
        }
        ,
        data () {
            return {
                detail: {},
                bardata: {
                    xdata: [],
                    value: []
                },
                linedata: {
                    xdata: [],
                    value: [],
                    area: []
                }
            }
        },
        created () {
            this.$http.get('http://127.0.0.1:3030/data').then((res) => {
                let detail = res.data
                //下面的一行很重要!!! 解析JSON格式字符串
                let data = JSON.parse(detail);
                for (let tmp of data) {
                    this.bardata.xdata.push(tmp.region)
                    this.bardata.value.push(tmp.rent)
                    this.linedata.xdata.push(tmp.region)
                    this.linedata.value.push(tmp.rent)
                    this.linedata.area.push(tmp.area)
                }
            })
        },
        methods: {
            loadDetail (){
                this.$http.get('http://127.0.0.1:3030/data').then((res) => {
                    let data = res.data.data
                    this.detail = data.result
                    console.log(detailPOL)
                })
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .charts
        display flex
        width: 80%
        margin: 80px auto
        .chart-wrapper
            float: 1;
            display: inline-block
            margin: 10px auto
            .echarts
                display: inline-block
                box-shadow: 0 0 4px #ccc;
                margin: 0
                padding: 0

</style>
