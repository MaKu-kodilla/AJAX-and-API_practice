var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
    'X-Client-Id': 2988,
    'X-Auth-Token': '5e0f22fbff7d878eb4e21e5e0ca66e2f'
};

$.ajaxSetup ({
    header: myHeaders
});

$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
        setupColumns(response.columns);
    }
});

function setupColumns (columns) {
    columns.forEach (function (colum) {
        var col = new Column(column.id, column.name);
        board.createColumn(col);
        setupCards(col, column.cards)
    });
}

function setupCards (col, cards) {
    cards.forEach(function (card) {
        var cardObj = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
        col.createCard(cardObj);
    });
}