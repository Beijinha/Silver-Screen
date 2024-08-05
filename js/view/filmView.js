function render(films) {
  const container = document.querySelector('#container');
  container.innerHTML = '<br>'; //removes the previous elements
  const list = document.createElement('div');
  list.style = `display: flex; margin-top: 10%`;
  list.className = `text-center`;

  films.forEach(({ id, name }) => {
    const item = document.createElement('div');
    item.className = `col card text-white bg-primary mb-3" style="max-width: 18rem;`;
    item.innerHTML = `<div class="card-header">Genres</div>
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">
                                    <p>${name}</p>
                                </p>
                        </div>`;
    list.appendChild(item);
  });

  container.appendChild(list);
};

export default { render };
