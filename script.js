document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#btn-generate').addEventListener('click', function () {
		let paras = document.querySelector('#paras').value;
		fetch(buildURL(paras)).then(response => {
			response.json().then(data => {
				document.querySelector('#result').innerHTML = '';
				for (var item in data) {
					var p = document.createElement('p');
					p.setAttribute('style', 'text-align:justify;');
					p.innerHTML = data[item];
					document.querySelector('#result').appendChild(p);
				}
          	});
        });
	});

	function buildURL(paras = 1) {
      	let url = `https://baconipsum.com/api/?type=meat-and-filler&paras=${paras}`;
      	return url;
    }
});