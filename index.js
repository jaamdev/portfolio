const ulProyects = document.querySelector(".projects__ctn");
const moon = document.querySelector(".moon")
const arrowUp = document.querySelector(".arrow-up")

window.onload = () => {

  let darkMode = localStorage.getItem("dark") || false

  darkMode
    ? moon.classList.add("active")
    : moon.classList.remove("active")

  window.onscroll = () => {
    scrollY > 300
     ? arrowUp.classList.add("active")
     : arrowUp.classList.remove("active")
  }

  arrowUp.addEventListener("click", () => {
    scrollTo({
      top: 0,
      behavior: "smooth"
    })
  })

  moon.addEventListener("click", () => {
    if(!moon.classList.contains("active")){
      moon.classList.add("active")
      localStorage.setItem("dark", true)
    }else{
      moon.classList.remove("active")
      localStorage.setItem("dark", false)
    }
  })

  fetch("./db.json")
  .then((res) => res.json())
  .then((items) => {
    items.forEach((item) => {
      if (item.projectName) {
        const li = document.createElement("li");
        li.setAttribute("class", "li");
        li.innerHTML = `
          <img class="img" alt="Imagen del proyecto ${item.projectName}" src="${item.urlImg}" />
          <article class="article">
            <h3 class="title">${item.projectName}</h3>
            <p class="description">${item.projectDescription}</p>
            <a class="a" href="${item.url}" target="_blank" rel="noopener noreferrer">
              <span class="span">Ir al repositorio</span>
            </a>
            <a class="a" href="${item.urlDeploy}" target="_blank" rel="noopener noreferrer">
              <span class="span">Ir al deploy</span>
            </a>
          </article>
        `;
        ulProyects.appendChild(li);
      }
    });
  })
  .catch(() => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    li.setAttribute("class", "li");
    p.setAttribute("class", "errorText");
    p.textContent = "¡Ups! ¡Error al cargar los elementos!";
    li.appendChild(p);
    ulProyects.appendChild(li);
  });
}
