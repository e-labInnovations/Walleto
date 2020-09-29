export default class CategoriesPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header translucent>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Category Settings</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-content>
      <ion-segment value="Expenses" id="typeSelector">
        <ion-segment-button value="Expenses">
          <ion-label>Expenses</ion-label>
        </ion-segment-button>
        <ion-segment-button value="Income">
          <ion-label>Income</ion-label>
        </ion-segment-button>
      </ion-segment>
      </ion-content>
    `;
    
    // Listen for ionChange on all segments
    const typeSelector = document.querySelector('#typeSelector')
    typeSelector.addEventListener('ionChange', (ev) => {
        console.log('Segment changed', ev);
      })
  }
}
 
customElements.define("categories-page", CategoriesPage);
 