const main = document.querySelector("main");

const URL_TO_FETCH = "http://localhost:3000/all-news";

const myHeader = new Headers();

const news = fetch(URL_TO_FETCH, {
    method: "get",
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Vary: origin,
    },
    crossDomain: true,
    dataType: "jsonp",
    mode: "cors",
}).then((res) =>
    res
    .json()
    .then((result) => result)
    .catch((err) => console.log(err))
);
news.then((data) => {
    data.map((noticias) => {
        main.innerHTML += `
        <div class="ideia">
            <h1>${noticias.title}</h1>
            <p>
                ${noticias.description}
            </p>
        <a href="#">ACESSAR</a>
    </div>
        `;
    });
});