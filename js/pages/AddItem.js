import { categories } from '../categories.js';

export default class addItem extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <ion-header translucent>
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-back-button default-href="/"></ion-back-button>
              </ion-buttons>
              <ion-title>Add New Category</ion-title>
            </ion-toolbar>
          </ion-header>
    
    
    <ion-item>
        <ion-avatar id="currentCategoryAvatar" slot="start"  style="background-color: ${categories[0].color};">
            <ion-icon id="currentCategoryIcon" name="${categories[0].icon}"></ion-icon>
        </ion-avatar>
        <ion-input placeholder="Memo" id="input-categorie" enterkeyhint="next"></ion-input>
        <ion-input placeholder="Amount" autofocus=true enterkeyhint="done" inputmode="numeric" required="true"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label>MM DD YY</ion-label>
      <ion-datetime display-format="MM DD YY" placeholder="Select Date"></ion-datetime>
    </ion-item>
    
    <ion-content class="ion-padding">
      
      <ion-grid class="ion-text-center">
        <ion-row>
            ${listCategories()}
        </ion-row>
      </ion-grid>
    </ion-content>
    
    <ion-button color="primary" id="btnSubmit">Save</ion-button>
      
      `;


    const btnSubmit = document.getElementById("btnSubmit");
    const input = document.getElementById('input-name');

    btnSubmit.addEventListener("click", () => {
      alert(input.value);
    });

    function listCategories() {
      return categories.map((category) => `
            <ion-col size="3">
                <ion-avatar class="iconAvatar" id="avatar-${category.icon}" style="margin: 0 auto; height:50px; width:50px; background-color: ${category.icon==categories[0].icon?category.color:"#F5F5F5"};">
                    <ion-icon class="iconIcon" id="icon-${category.icon}" name="${category.icon}" style="color: ${category.icon==categories[0].icon?"#FFF":"#000"};"></ion-icon>
                </ion-avatar>
                <ion-note>${category.name}</ion-note>
            </ion-col>
        `).join("")
    }
  }
}

customElements.define("add-item-page", addItem);