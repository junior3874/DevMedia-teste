function activeModal() {
    const body = document.querySelector("body");
    body.style = `overflow:hidden`;

    let modalHTML = `
    <div class="modal">
    <form action="javascript:handleSendInformation()">
        <div class="input-block">
            <div class="input-field">
                <label for="title">Titulo da ideia</label>
                <input type="text" name="title">
            </div>
            <div class="input-field">
                <label for="description">Descrição da ideia</label>
                <textarea type="text" name="description" /></textarea>
            </div>
        </div>
        <button onClick="{handleSendInformation(), desactiveModal(event)}">
            Cadastrar
        </button>
    </form>
    </div>
`;

    body.innerHTML += modalHTML;
    const modal = document.querySelector(".modal");

    modal.addEventListener("click", desactiveModal);

    function desactiveModal(e) {
        if (e.target == modal) {
            body.removeChild(modal);
            body.style = `overflow: scrool`;
        }
    }
}

function handleActiveForm() {
    const ideiaName = document.getElementsByName("ideia")[0].value;
}

function postForm(title, description) {
    var httpRequest = null;
    if (window.XMLHttpRequest) {
        // Mozilla, Safari, ...
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        // IE 8 and older
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }

    httpRequest.open("POST", "/news", false);

    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.setRequestHeader("Accept", "application/json");

    // processar a resposta do servidor

    httpRequest.send(
        JSON.stringify({
            title,
            description,
        })
    );
}

function handleSendInformation() {
    const title = document.getElementsByName("title")[0].value;
    const description = document.getElementsByName("description")[0].value;

    postForm(title, description);
}

function desactiveModal() {
    const body = document.querySelector("body");
    const modal = document.querySelector(".modal");
    body.removeChild(modal);
    body.style = `overflow: scrool`;
}