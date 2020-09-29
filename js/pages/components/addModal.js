export default class ModalPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <ion-header>
      <ion-toolbar>
        <ion-title>Modal Header</ion-title>
        <ion-buttons slot="primary">
          <ion-button onClick="dismissModal()">
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
      <ion-button color="primary" onClick="dismissModal()">Save</ion-button>
    </ion-content>`;
  }
}

customElements.define("modal-page", ModalPage);