function render(films) {

  const container = document.querySelector('#container');
  container.innerHTML = ''; //removes the previous elements

  const div = document.createElement('div');
  div.className = `text-center`;

  const item = document.createElement('div');
  item.innerHTML = `<div class="top">
	<div class="columns">
		<div class="column is-full featured_wrapper p-0">
			<img src="${films[0].poster_path}" class="featured">
			<div class="title_wrapper">
				<span class="has-text-white">Trending Today</span>
				<h1 class="title is-1 has-text-white">${films[0].original_title}</h1>
				<button class="button is-medium">Watch It Now</button>
			</div>
		</div>
	</div>
</div>
<div class="container">
	<div class="columns is-multiline p-0 pt-6 last">
		<div class="column is-full">
			<p class="has-text-white">Action Movies Collection</p>
		</div>
		<div class="column is-one-quarter">
			<img src="">
		</div>
		<div class="column is-one-quarter">
			<img src="">
		</div>
		<div class="column is-one-quarter">
			<img src="">
		</div>
		<div class="column is-one-quarter">
			<img src="">
		</div>
	</div>
	<div class="columns last">
		<div class="column is-one-quarter">
			<img src="">
		</div>
		<div class="column is-one-quarter">
			<img src="">
		</div>
		<div class="column is-one-quarter">
			<img src="">
		</div>
		<div class="column is-one-quarter">
			<img src="">
		</div>
	</div>
</div>`;

  div.appendChild(item);

  container.appendChild(div);
};

export default { render };
