window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      for (const movie of movies) {
        /* Task 1.3. Add your code from exercise 1 here 
           and include a non-functional 'Edit' button
           to pass this test */
        const article = document.createElement("article");
        article.id = movie.imdbID;

        const buttonElement = document.createElement("button");
        buttonElement.textContent = "Edit";
        buttonElement.onclick = function () {
          location.href = "edit.html?imdbID=" + movie.imdbID;
        };
        article.appendChild(buttonElement);

        const poster = document.createElement("img");
        poster.src = movie.Poster;
        poster.alt = movie.Title;
        article.appendChild(poster);

        const title = document.createElement("h1");
        title.textContent = movie.Title;
        article.appendChild(title);

        const meta = document.createElement("p");
        const hours = Math.floor(movie.Runtime / 60);
        const minutes = movie.Runtime % 60;
        meta.textContent = `Runtime ${hours}h ${minutes}m • Released on ${movie.Released}`;
        article.appendChild(meta);

        const genreDiv = document.createElement("div");
        movie.Genres.forEach((genre) => {
          const span = document.createElement("span");
          span.className = "genre";
          span.textContent = genre;
          genreDiv.appendChild(span);
        });
        article.appendChild(genreDiv);

        const plot = document.createElement("p");
        plot.textContent = movie.Plot;
        article.appendChild(plot);

        function createListSection(headerText, dataArray) {
          const header = document.createElement("h2");
          header.textContent = headerText;
          article.appendChild(header);

          const ul = document.createElement("ul");
          dataArray.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            ul.appendChild(li);
          });
          article.appendChild(ul);
        }

        createListSection("Director", movie.Directors);
        createListSection("Writers", movie.Writers);
        createListSection("Actors", movie.Actors);

        bodyElement.appendChild(article);
      }
    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
          xhr.status +
          " - " +
          xhr.statusText,
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};
