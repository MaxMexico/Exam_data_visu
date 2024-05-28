fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data) {
    sortByCountryPopulation(data);

    Top30countries = data.slice(data.length - 30);

    const countries = Top30countries.map(item => item.country);
    const populations = Top30countries.map(item => item.population);

    const trace = {
        x: countries,
        y: populations,
        type: 'bar',
        marker: {
            color: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf',
                    '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf',
                    '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'],
            line: {
                color: '#333',
                width: 1
            }
        }
    };

    const layout = {
        title: 'Les 30 pays les plus peuplés',
        xaxis: { title: 'Pays' },
        yaxis: { title: 'Population' },
    };

    Plotly.newPlot('plot', [trace], layout);
}

function sortByCountryPopulation(data) {
    data.sort((acc, value) => acc.population < value.population ? -1 : 1);

}
