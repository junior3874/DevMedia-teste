const main = document.querySelector("main");
let news = [];
const URL_TO_FETCH = "http://localhost:3000/all-news";

function renderingNews(data) {
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
}

var httpRequest = null;
if (window.XMLHttpRequest) {
    // Mozilla, Safari, ...
    httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    // IE 8 and older
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

httpRequest.open("GET", "/all-news", true);

httpRequest.setRequestHeader("Content-Type", "application/json");
httpRequest.setRequestHeader("Accept", "application/json");
httpRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
httpRequest.responseType = "json";

httpRequest.send();

httpRequest.onreadystatechange = function(evt) {
    if (httpRequest.readyState !== 4) {
        return;
    }
    console.log("waited for it to finish");
    news = httpRequest.response;
    renderingNews(news);
};

// processar a resposta do servidor

// const news = fetch(URL_TO_FETCH, {
//     method: "get",
//     headers: {
//         "Content-type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//         Vary: origin,
//     },
//     crossDomain: true,
//     dataType: "jsonp",
//     mode: "cors",
// }).then((res) =>
//     res
//     .json()
//     .then((result) => result)
//     .catch((err) => console.log(err))
// );