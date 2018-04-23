SendAjax('/board', 'GET', null, function(response) {
      setupColumns(response.columns);
    });

//TWORZENIE KOLUMNY ORAZ DODAWANIE JEJ DO TABLICY
function setupColumns(columns) {
    columns.forEach(function (column) {
  		var col = new Column(column.id, column.name);
        board.createColumn(col);
		setupCards(col, column.cards);
    });
}

function setupCards(col, cards) {
	cards.forEach(function (card) {
        var cardObj = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    	col.createCard(cardObj);
  	})
}


