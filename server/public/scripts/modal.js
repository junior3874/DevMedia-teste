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