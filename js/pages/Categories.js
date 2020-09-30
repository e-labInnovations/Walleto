import { categories } from '../categories.js';

export default class CategoriesPage extends HTMLElement {
  connectedCallback() {
    let currentCategories = categories.filter(categorie => categorie.type != "income");
    
    this.innerHTML = `
      <ion-header translucent>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Category Settings</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-segment value="Expenses" id="typeSelector">
        <ion-segment-button value="Expenses">
          <ion-label>Expenses</ion-label>
        </ion-segment-button>
        <ion-segment-button value="Income">
          <ion-label>Income</ion-label>
        </ion-segment-button>
      </ion-segment>
      
      <ion-content>
      
      <ion-list id="categoriesList">
        ${listHTMLData(currentCategories)}
      </ion-list>
      
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button href="/categories/addNew">
          <ion-icon name="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      </ion-content>
    `;
    
    // Listen for ionChange on all segments
    const typeSelector = document.querySelector('#typeSelector');
    const categoriesList = document.querySelector('#categoriesList');
    
    typeSelector.addEventListener('ionChange', (ev) => {
        let currentSelect = ev.detail.value; 
        if(currentSelect == "Income"){
            currentCategories = categories.filter(categorie => categorie.type != "expenses");
        } else {
            currentCategories = categories.filter(categorie => categorie.type != "income");
        }
        categoriesList.innerHTML = listHTMLData(currentCategories);
        
    })
    
    function listHTMLData(categories) {
        return currentCategories.map(
            (categorie) => `
              <ion-item-sliding>
                <ion-item-options side="start" onclick="deleteItem('${categorie.id}')">
                  <ion-item-option color="danger">
                    <ion-icon slot="icon-only" name="trash"></ion-icon>
                  </ion-item-option>
                </ion-item-options>
                <ion-item-options side="end">
                  <ion-item-option color="tertiary">
                    <ion-icon slot="icon-only" name="create"></ion-icon>
                  </ion-item-option>
                </ion-item-options>
                
                <ion-item>
                  <ion-avatar slot="start"  style="background-color: ${categorie.color};">
                    <ion-icon name="${categorie.icon}"></ion-icon>
                  </ion-avatar>
                  <ion-label>
                    <h3>${categorie.name}</h3>
                  </ion-label>
                </ion-item>
              </ion-item-sliding>
        `
          )
          .join("")
    }
  }
}
 
customElements.define("categories-page", CategoriesPage);
 