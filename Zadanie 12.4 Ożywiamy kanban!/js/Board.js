$('.create-column')
		.click(function() {
				var columnName = prompt('Enter a column name');
				$.ajax ({
						url: baseUrl + '/column',
						method: 'POST',
						data: {
								name: columnName
						},
						success: function(response) {
							var column = new Column(response.id, columnName);
							board.createColumn(column);
						}
				})
		})