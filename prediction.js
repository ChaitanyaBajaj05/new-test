google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);
  
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'Temperature (°C)'],
        ['2023', 1.5],
        ['2024', 1.8],
        ['2025', 2.1],
        ['2026', 2.4],
        // Add more data points as needed
      ]);
  
      var options = {
        title: 'Projected Temperature Increase',
        curveType: 'function',
        legend: { position: 'bottom' }
      };
  
      var chart = new google.visualization.LineChart(document.getElementById('predictionChart'));
      chart.draw(data, options);
    }