var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var authHeaders = {
  'X-Client-Id': 2988,
  'X-Auth-Token': '5e0f22fbff7d878eb4e21e5e0ca66e2f'
};

function SendAjax (url, method, data, onSuccess) {
  $.ajax({
    headers: authHeaders,
    url: baseUrl + url,
    method: method,
    data: data,
    success: onSuccess
  });
}

function initSortable() {
  $('.card-list').sortable({
    connectWith: '.card-list',
    placeholder: 'card-placeholder'
  }).disableSelection();
}

$(function(){
  // TWORZENIE NOWYCH EGZEMPLARZY KOLUMN
  var todoColumn = new Column('Do zrobienia');
  var doingColumn = new Column('W trakcie');
  var doneColumn = new Column('Skończone');

  // DODAWANIE KOLUMN DO TABLICY
  board.createColumn(todoColumn);
  board.createColumn(doingColumn);
  board.createColumn(doneColumn);

  // TWORZENIE NOWYCH EGZEMPLARZY KART
  var card1 = new Card('Nowe zadanie');
  var card2 = new Card('stworzyc tablice kanban');

  // DODAWANIE KART DO KOLUMN
  todoColumn.createCard(card1);
  doingColumn.createCard(card2);
})

$('.create-column').click(function() {
	var columnName = prompt('Enter a column name');

	SendAjax('/column', 'POST', {name: columnName}, function(response){
		var column = new Column(response.id, columnName);
		board.createColumn(column);
	});
});