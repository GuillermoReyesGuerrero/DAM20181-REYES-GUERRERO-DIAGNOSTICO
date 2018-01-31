function factorial(){
	var factorial = 1;
  var exp=1;
  var val=1;
  var table = document.getElementById("myTable");
            table.innerHTML=" ";
        for (var i=1; i <= document.getElementById ('factorial').value; i++){

            var datos;
                datos = {
                    iteracion: i,
                    expresion:exp+="*"+i,
                    valor: val*=i,
                };

                var row = table.insertRow(i-1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);

                cell1.innerHTML = datos.iteracion,
                cell2.innerHTML = datos.expresion,
                cell3.innerHTML = datos.valor;
            }
}
