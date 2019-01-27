$(function() {
	function ajaxTable(){
  let table;
  $.ajax({
    url: 'json/file.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function(data){
      $(data).each(function(index, value){
        table += '<tr><td>' + value.Ccy + '</td><td>' + value.Rate + '</td></tr>';
      });
      let th = $(".currency_table").find("table").html();
      console.log(th);
      $(".currency_table").find("table").html(th + table);
    }
  });
}

});
