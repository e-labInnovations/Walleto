export default class addNewItemModal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <ion-header>
      <ion-toolbar>
        <ion-title>Modal Header</ion-title>
        <ion-buttons slot="primary">
          <ion-button id="btnClose">
            <ion-icon slot="icon-only" name="close"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      Modal Content
      <ion-item>
        <ion-label position="floating">Floating Label</ion-label>
        <ion-input id="input-name"></ion-input>
      </ion-item>
      <ion-button color="primary" id="btnSubmit">Save</ion-button>
    </ion-content>`;
    
    
    const btnClose = document.getElementById("btnClose");
    const btnSubmit = document.getElementById("btnSubmit");
    const input = document.getElementById('input-name');
    const modalElement = document.querySelector('ion-modal');
    
    btnClose.addEventListener("click", () => {
        modalElement.dismiss({
            'dismissed': true
        });
    });
    btnSubmit.addEventListener("click", () => {
        modalElement.dismiss({
            'dismissed': true
        });
        alert(input.value);
    });
  }
}

customElements.define("add-item-modal", addNewItemModal);