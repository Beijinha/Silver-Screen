const URL = "https://api.themoviedb.org/3/movie/now_playing?api_key=971047b106704813c630da0a5695afaa";

async function fetchData() {

  const response = await fetch(`${URL}`);

  return response.json();
};

async function getFilm(index) {
  //return films[index]
}

async function getFilms() {

  try {

    const repos = await Promise.all([
      fetchData()
    ]);

    console.log(repos[0].results);

    return repos[0].results;

  } catch (err) {

    alert(err.message);
  }
}

export default { getFilm, getFilms };