export function viewAlert(title, mensaje){
    const body = 
    `
    <div class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content bentobox">
                <div class="modal-header">
                    <h5 class="modal-title">${title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>${mensaje}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn otherbt" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', body); // Añade el modal al body del documento
    const modal = new bootstrap.Modal(document.querySelector('.modal'));
    modal.show();
}

export function chargeSpinner(){
    const body = 
    `
    <div id="chargeSpinner" class="mdl-modal">
        <div class="spinner-border text-light" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    `
    document.body.insertAdjacentHTML('beforeend', body);
}

export function quitSpinner(){
    document.getElementById('chargeSpinner').remove();
}