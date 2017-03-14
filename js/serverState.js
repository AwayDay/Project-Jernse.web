(function(d){
    var cpuState = document.getElementById('cpuState');
    var memState = document.getElementById('memState');
    var storageState = document.getElementById('storageState');
    var activeContainerState = document.getElementById('activeContainerState');

    // 아래는 테스트 데이터
    var cpuStateData = {
        series: [
            {
                name: 'usage',
                data: 68
            },
            {
                name: 'free',
                data: 32
            }
        ]
    };
    var memStateData = {
        series: [
            {
                name: 'usage',
                data: 54
            },
            {
                name: 'free',
                data: 46
            }
        ]
    }
    var storageStateData = {
        series: [
            {
                name: 'usage',
                data: 38
            },
            {
                name: 'free',
                data: 62
            }
        ]
    }
    var activeContainerStateData = {
        series: [
            {
                name: 'active',
                data: 13
            },
            {
                name: 'etc',
                data: 8
            }
        ]
    }
    // 여기까지 테스트 데이터

    tui.chart.registerTheme('customTheme', {
        series: {
            colors: ['#63A69F', "#F2E1AC", '#F2836B', '#F2594B']
        }
    });

    var cpuStateOptions = {
        chart: {
            title: "CPU 사용량",
            width: 250,
            height: 200
        },
        theme: 'customTheme'
    };
    var memStateOptions = {
        chart: {
            title: "메모리 사용량",
            width: 250,
            height: 200
        },
        theme: 'customTheme'
    };
    var storageStateOptions = {
        chart: {
            title: "저장소 사용량",
            width: 250,
            height: 200
        },
        theme: 'customTheme'
    };
    var activeContainerStateOptions = {
        chart: {
            title: "활성 컨테이너",
            width: 250,
            height: 200
        },
        theme: 'customTheme'
    };

    tui.chart.pieChart(cpuState, cpuStateData, cpuStateOptions);
    tui.chart.pieChart(memState, memStateData, memStateOptions);
    tui.chart.pieChart(storageState, storageStateData, storageStateOptions);
    tui.chart.pieChart(activeContainerState, activeContainerStateData, activeContainerStateOptions);
}(document))