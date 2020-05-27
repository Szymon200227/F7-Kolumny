$$(document).on('page:init', '.page[data-name="kolumny"]', function (e) {
    var liczba=1;
        $$('button[id="dodaj"]').on('click', function() {
          var table = document.getElementById("myTable");
          var row = table.insertRow(0);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
            cell1.style.border="1px solid black";
            cell2.style.border="1px solid black";
            cell3.style.border="1px solid black";
          cell1.innerHTML = "9";
          cell2.innerHTML = liczba;
          cell3.innerHTML = "9x"+liczba+" = "+9*liczba;
            liczba++;
        });


      })
