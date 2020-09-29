export default class AddNewCategory extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header translucent>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/categories"></ion-back-button>
          </ion-buttons>
          <ion-title>Add New Category</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-content>
        <ion-item>
          <ion-avatar slot="start"  style="background-color: #ffaa55;">
            <ion-icon name="add"></ion-icon>
          </ion-avatar>
          <ion-label position="floating">Category Name</ion-label>
          <ion-input id="input-categorie" enterkeyhint="done"></ion-input>
        </ion-item>
      
      <ion-item>
        <ion-label>Type</ion-label>
        <ion-select value="expenses">
          <ion-select-option value="expenses">Expenses</ion-select-option>
          <ion-select-option value="income">Income</ion-select-option>
          <ion-select-option value="both">Both</ion-select-option>
        </ion-select>
      </ion-item>
      
      
      </ion-content>
    `;
  }
}

customElements.define("add-new-category-page", AddNewCategory);