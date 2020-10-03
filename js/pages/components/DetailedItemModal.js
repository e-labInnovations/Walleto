import { categories } from '../../categories.js';

export default class DetailedItemModal extends HTMLElement {
  connectedCallback() {
    const modalElement = document.querySelector('ion-modal');
    console.log(modalElement.componentProps);
    
    this.innerHTML = `
    <ion-header>
      <ion-toolbar>
        <ion-title>${modalElement.componentProps.id}</ion-title>
        <ion-buttons slot="primary">
          <ion-button id="btnClose">
            <ion-icon slot="icon-only" name="close"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content class="ion-padding">
    </ion-content>
      
      `;
    
    
    const btnClose = document.getElementById("btnClose");
    
    btnClose.addEventListener("click", () => {
        modalElement.dismiss({
            'dismissed': true
        });
    });
  }
}

customElements.define("detailed-item-modal", DetailedItemModal);