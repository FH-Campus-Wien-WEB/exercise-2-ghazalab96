window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {

      const mainTitle = document.createElement("h1")
      mainTitle.textContent = "Best Movies Ever!"
      bodyElement.append(mainTitle)
      const movies = JSON.parse(xhr.responseText);
      /* Task 1.3. Add your code from exercise 1 here 
         and include a non-functional 'Edit' button
         to pass this test */
      for (const movie of movies) {
        //working on each movie info here
        const articleElement = document.createElement("article")
        articleElement.id = movie.imdbID

        //layout element
        const layoutElement = document.createElement("div")
        layoutElement.className = "movie-layout"

        const leftElement = document.createElement("div")
        leftElement.className = "movie-left"

        const rightElement = document.createElement("div")
        rightElement.className = "movie-right"
        //end of the layout element

        //leftElement
        const posterElement = document.createElement("img")
        posterElement.src = movie.Poster
        posterElement.alt = movie.Title
        leftElement.append(posterElement)

        const imdbRatingElement = document.createElement("div")
        imdbRatingElement.className = "score-box imdb-box"
        imdbRatingElement.textContent = "IMDb rating: " + movie.imdbRating
        leftElement.append(imdbRatingElement)

        const metascoreElement = document.createElement("div")
        metascoreElement.className = "score-box metascore-box"
        metascoreElement.textContent = "Metascore: " + movie.Metascore
        leftElement.append(metascoreElement)


        //rightElement

        const titleElement = document.createElement("h2")
        titleElement.textContent = movie.Title
        rightElement.append(titleElement)

        const releasedElement = document.createElement("p")
        releasedElement.textContent = "Released: " + movie.Released
        rightElement.append(releasedElement)

        const runtimeElement = document.createElement("p")
        runtimeElement.textContent = "Runtime: " + movie.Runtime + " min"
        rightElement.append(runtimeElement)

        const genresElement = document.createElement("p")
        genresElement.textContent = "Genres: "
        for (const genre of movie.Genres) {
          const genreElement = document.createElement("span")
          genreElement.textContent = genre
          genreElement.className = "genre"
          genresElement.append(genreElement)
        }
        rightElement.append(genresElement)

        const directorsTitleElement = document.createElement("h3")
        directorsTitleElement.textContent = "Directors"
        rightElement.append(directorsTitleElement)

        const directorsListElement = document.createElement("ul")
        for (const director of movie.Directors) {
          const directorItemElement = document.createElement("li")
          directorItemElement.textContent = director
          directorsListElement.append(directorItemElement)
        }
        rightElement.append(directorsListElement)

        const writersTitleElement = document.createElement("h3")
        writersTitleElement.textContent = "Writers"
        rightElement.append(writersTitleElement)

        const writersListElement = document.createElement("ul")
        for (const writer of movie.Writers) {
          const writerItemElement = document.createElement("li")
          writerItemElement.textContent = writer
          writersListElement.append(writerItemElement)
        }
        rightElement.append(writersListElement)

        const actorsTitleElement = document.createElement("h3")
        actorsTitleElement.textContent = "Actors"
        rightElement.append(actorsTitleElement)

        const actorsListElement = document.createElement("ul")
        for (const actor of movie.Actors) {
          const actorItemElement = document.createElement("li")
          actorItemElement.textContent = actor
          actorsListElement.append(actorItemElement)
        }
        rightElement.append(actorsListElement)

        const plotElement = document.createElement("p")
        plotElement.textContent = "Plot: " + movie.Plot
        rightElement.append(plotElement)

        const buttonElement = document.createElement('button')
        rightElement.append(buttonElement)
        buttonElement.textContent = 'Edit'
        buttonElement.onclick = function () {
          location.href = 'edit.html?imdbID=' + movie.imdbID
        }

        layoutElement.append(leftElement)
        layoutElement.append(rightElement)
        articleElement.append(layoutElement)
        bodyElement.append(articleElement)
      }
    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
        xhr.status +
        " - " +
        xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};
