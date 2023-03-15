fetch("https://striveschool-api.herokuapp.com/books")
  .then(responseObj => responseObj.json())
  .then(books => {
    console.log(books);

    const grid = document.getElementById("books-container");
    grid.innerHTML = "";

    books.forEach(book => {
      const col = document.createElement("div");
      col.className = "col";
      col.innerHTML = `
                    <div class="card">
                        <div class="card-body" id="card">
                            <h5 class="card-title">${book.title}</h5>
                            <img class="w-100" src=${book.img}>
                            <span class="badge bg-dark">${book.category}</span >
                            <p class="card-text">€ ${book.price}</p>
                        </div>
                    </div>
                        `;
      grid.appendChild(col);
      const btn = document.createElement("button");
      col.appendChild(btn);
      btn.addEventListener("click", event => {
        event.preventDefault();
        col.className = "d-none";
      });
    });
  })
  .catch(error => console.log("CATCH", error));
