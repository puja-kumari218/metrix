Highcharts.chart('container', {
    chart: {
        type: 'pie',
        custom: {},
        events: {
            render() {
                const chart = this,
                    series = chart.series[0];
                let customLabel = chart.options.chart.custom.label;

                // Adjust positioning of the center label
                const x = series.center[0] + chart.plotLeft,
                    y = series.center[1] + chart.plotTop - (customLabel.attr('height') / 2);

                customLabel.attr({
                    x,
                    y
                });
                // Set font size based on chart diameter
                customLabel.css({
                    fontSize: `${series.center[2] / 12}px`
                });
            }
        },
        // Disable the Highcharts logo
        logo: false
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    title: null,
    subtitle: null,
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
    },
    legend: {
        enabled: true,
        align: 'center',
        verticalAlign: 'top',
        layout: 'horizontal',
        itemMarginTop: 10
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            borderRadius: 0,  // Remove border radius (sharp edges)
            dataLabels: [{
                enabled: false  // Disable all data labels
            }],
            showInLegend: true
        },
        pie: {
            innerSize: '75%',  // Make it a donut shape
            borderWidth: 0,  // Remove the border around the pie
            shadow: false
        }
    },
    series: [{
        name: 'Breakdown',
        colorByPoint: true,
        innerSize: '75%',  // Inner size for donut shape
        data: [{
            name: 'Acquisition',
            y: 55,
            color: '#5570f1'
        }, {
            name: 'Retention',
            y: 35,
            color: '#ffcc91'
        }, {
            name: 'Purchase',
            y: 10,
            color: '#97a5eb'
        }]
    }],
    background2: {
        type: 'solid',
        color: '#f0f0f0'
    },
    credits: {
        enabled: false  // This removes the Highcharts logo from the bottom-right corner
    }
});

document.querySelectorAll('.bar').forEach(bar => {
    bar.addEventListener('mouseover', function() {
      const day = this.getAttribute('data-day');
      const value = this.style.height;
      alert(`Day: ${day}, Value: ${value}`);
    });
  });
  