

var ctx = document.getElementById('root').getContext('2d');
var chart = new chart(ctx, {
    type: 'doughnut',

    data: {
        labels: [],
        datasets:[{}],
    },

    options: {}
});