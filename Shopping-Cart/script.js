document.addEventListener("DOMContentLoaded", function () {
  function createTable() {
    const wishlist = document.getElementById("wishlist");
    wishlist.innerHTML = "";

    const table = document.createElement("table");
    table.classList.add("myTable");
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const selectAllChekBox = document.createElement("input");
    selectAllChekBox.type = "checkbox";
    selectAllChekBox.classList.add("selectAllChekBox");

    const colNames = [
      selectAllChekBox,
      "Product",
      "Quantity",
      "Price",
      "Action",
    ];

    colNames.forEach((value) => {
      const th = document.createElement("th");
      if (value instanceof HTMLElement) {
        th.appendChild(value);
      } else {
        th.textContent = value;
      }
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    tbody.innerHTML = "";

    const inputElement = [
      { class: "checkBox", type: "checkbox" },
      { class: "prodName", type: "select" },
      { class: "quantity", type: "number", min: 1, max: 5, value: 1 },
      { class: "itemPrice", type: "number", readonly: true },
    ];

    for (let i = 0; i < 8; i++) {
      const row = document.createElement("tr");

      inputElement.forEach((item, index) => {
        const td = document.createElement("td");

        var input;

        if (item.type == "select") {
          input = productList();
          input.classList.add(item.class);
        } else {
          input = document.createElement("input");

          if (item.type === "number") {
            input.min = item.min;
            input.max = item.max;
            input.value = item.value;
            input.readOnly = item.readonly;
          }

          input.type = item.type;
          input.classList.add(item.class);
        }
        td.appendChild(input);
        row.appendChild(td);
      });

      const buttonTd = document.createElement("td");
      const addToCartButton = document.createElement("button");
      addToCartButton.classList.add("addToCart");
      addToCartButton.innerHTML =
        '<i class="fas fa-shopping-cart"></i>Add to cart';
      buttonTd.appendChild(addToCartButton);
      row.appendChild(buttonTd);
      tbody.appendChild(row);
    }

    table.appendChild(tbody);
    wishlist.appendChild(table);
  }

  createTable();

  function productList() {
    const products = [
      { prodName: "Aloo Bhuja", price: 50 },
      { prodName: "Kurkure", price: 80.5 },
      { prodName: "Lays Classic", price: 30 },
      { prodName: "Pepsi", price: 40 },
      { prodName: "Coca Cola", price: 45 },
      { prodName: "Doritos", price: 60 },
      { prodName: "Pringles", price: 110 },
      { prodName: "Haldiram's Bhujia", price: 55 },
      { prodName: "Maggie Noodles", price: 12 },
      { prodName: "KitKat", price: 20 },
      { prodName: "Snickers", price: 25 },
      { prodName: "Cadbury Dairy Milk", price: 30 },
      { prodName: "5 Star", price: 15 },
      { prodName: "Choco Pie", price: 25 },
      { prodName: "Bingo Mad Angles", price: 35 },
      { prodName: "Parle-G", price: 10 },
      { prodName: "Marie Gold", price: 25 },
      { prodName: "Bourbon Biscuits", price: 35 },
      { prodName: "Good Day Biscuits", price: 20 },
      { prodName: "Cheetos", price: 45 },
    ];

    const select = document.createElement("select");
    select.id = "selectElement";
    const defaultOption = document.createElement("option");
    defaultOption.textContent = "Please select";
    defaultOption.value = "";
    defaultOption.selected = true;
    defaultOption.disabled = true;
    select.appendChild(defaultOption);

    products.forEach((item, index) => {
      const option = document.createElement("option");
      option.textContent = item.prodName;
      option.classList.add("prodOption");
      option.value = item.price;
      select.appendChild(option);
    });
    return select;
  }
});

// document.querySelectorAll('.delBtn').forEach(element =>{
//     element.addEventListener('click', function (){
//        let element = this.closest('tr')
//        element.remove()
//     })
// })
// document.querySelectorAll('tbody tr').forEach((row, index) =>{
//     const cells = row.querySelectorAll('td');
//     cells.forEach((cell, cellIndex) => {
//         console.log(`Row ${index + 1}, Cell ${cellIndex + 1}: ${cell.textContent}`);

// })
// })
