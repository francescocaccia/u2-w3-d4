fetch("https://striveschool-api.herokuapp.com/books")
  // fetch fa una HTTP Request, che richiederà un tempo indefinito per risolversi e ricevere la Response dal server
  // quando la response arriva, fetch chiama internamente il metodo resolve()
  // chiamare resolve in una Promise fa scattare il metodo .then() concatenato alla esecuzione della Promise

  .then(responseObj => responseObj.json())
  // per ottenere dati usabili, dovremo convertire il reponseObj.body, che arriva come ReadableStream, in un elemento JS utilizzabile
  // questo processo lo fa il metodo .json(), che è a sua volta una Promise che noi stiamo tornando implicitamente dalla nostra arrow function
  .then(books => {
    // questa funzione verrà eseguita dal suo metodo .then() al momento opportuno, ovvero: quando la Promise corrispondente al metodo .json() si è risolta correttamente
    // in caso contrario si salta direttamente, in caso di problemi, dentro al metodo .catch()

    // se siamo qui possiamo dare per assodato che abbiamo i dati, in questo caso nel parametro di questa funzione chiamato todos (il body parsato)

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
