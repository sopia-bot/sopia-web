<template>
    <div>
        <line-chart v-if="chartView" :data="chartData" :options="chartOptions" :theme="chartTheme"/>
    </div>
</template>
<script>
import 'tui-chart/dist/tui-chart.css';
import { barChart, lineChart } from '@toast-ui/vue-chart';
export default {
	name: 'UserChart',
	components: {
        'line-chart': lineChart,
        'bar-chart': barChart,
	},
	mounted: function() {
         const xhr = new XMLHttpRequest();
         xhr.onreadystatechange = () => {
             if ( xhr.status === 200 && xhr.readyState === 4 ) {
                const data = JSON.parse(xhr.responseText);

                const latest = data.splice(data.length - 10, data.length - 1);
                const cateDate = [];
                const seriesData = [];
                latest.forEach(d => {
                    cateDate.push(d.date);
                    seriesData.push(d.num);
                });

                this.chartData.categories = cateDate;
                this.chartData.series[0].data = seriesData;
                this.chartView = true;
             }
         };
         xhr.open('get', `https://us-central1-sopia-bot.cloudfunctions.net/getJoinLogs`);
         xhr.send();
	},
	data: function () {
		return {
            chartView: false,
            chartData: { // for 'data' prop of 'bar-chart'
                categories: [],
                series: [
                    {
                        name: '소피아를 사용한 방송',
                        data: []
                    },
                ]
            },
            chartTheme: {
                series: {
                    colors: [ '#8E24AA', '#8E24AA','#8E24AA','#8E24AA','#8E24AA','#8E24AA','#8E24AA','#8E24AA','#8E24AA','#8E24AA'],
                },
            },
            chartOptions: {
                chart: {
                    width: 1200,
                },
            },
		}
	}
}
</script>
<style scope>
.tui-chart.tui-line-chart {
    margin-left: auto;
    margin-right: auto;
}
</style>
