const ulProyects = document.querySelector('.projects__ctn')
const ulPractices = document.querySelector('.practices__ctn')

fetch('./db.json')
	.then(res => res.json())
	.then(items => {
		items.forEach(item => {
			if (item.projectName) {
				const li = document.createElement('li')
				li.setAttribute('class', 'li')
				li.innerHTML = `
					<a class="a" href="${item.url}" target="_blank" rel="noopener noreferrer">
						<img class="img" src="${item.urlImg}" alt="Imagen del proyecto ${item.projectName}" />
						<h3 class="title">${item.projectName}</h3>
						<p class="description">${item.projectDescription}</p>
					</a>
				`
				ulProyects.appendChild(li)
			}
			else if(item.name){
				const li = document.createElement('li')
				li.setAttribute('class', 'li')
				li.innerHTML = `
					<a class="a" href="${item.url}" target="_blank" rel="noopener noreferrer">
						<p class="title">${item.name}</p>
					</a>
				`
				ulPractices.appendChild(li)
			}
		})
	})
	.catch(() => {
		const li = document.createElement('li')
		li.setAttribute('class', 'li errorText')
		li.textContent = "¡Ups! ¡Error al cargar los elementos!"
		ulPractices.appendChild(li)
	})