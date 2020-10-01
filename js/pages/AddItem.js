import { categories } from '../categories.js';

export default class addItem extends HTMLElement {
  connectedCallback() {
    let currentCategories = categories.filter(category => category.type != "income").sort(sortByName());
    this.innerHTML = `
    <ion-header translucent>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button default-href="/"></ion-back-button>
            </ion-buttons>
            <ion-select value="expenses" interface="popover" style="width:90%;" id="typeSelector">
                <ion-select-option value="expenses">Expenses</ion-select-option>
                <ion-select-option value="income">Income</ion-select-option>
            </ion-select>
        </ion-toolbar>
    </ion-header>
    
    
    <ion-item>
        <ion-avatar id="currentCategoryAvatar" slot="start"  style="background-color: ${currentCategories[0].color};">
            <ion-icon id="currentCategoryIcon" name="${currentCategories[0].icon}"></ion-icon>
        </ion-avatar>
        <ion-grid>
            <ion-row>
                <ion-col size="8">
                    <ion-input placeholder="Memo" autocomplete="on" id="input-category" enterkeyhint="next" spellcheck=true></ion-input>
                </ion-col>
                <ion-col size="4">
                    <ion-input class="ion-text-end" placeholder="Amount" type="number" autofocus=true enterkeyhint="done" inputmode="numeric" required=true style="font-weight: bold; font-size:18px;"></ion-input>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-item>
    <ion-item>
      <ion-label>Date</ion-label>
      <ion-datetime display-format="DD-MMM-YYYY" placeholder="Select Date"  value="${new Date()}"></ion-datetime>
    </ion-item>
    
    <ion-content class="ion-padding">
      
      <ion-grid class="ion-text-center">
        <ion-row id="categoriesList">
            ${listCategories(currentCategories)}
        </ion-row>
      </ion-grid>
    </ion-content>
    
    <ion-button color="primary" id="btnSubmit">Save</ion-button>
      
      `;


    const btnSubmit = document.getElementById("btnSubmit");
    const input = document.getElementById('input-name');
    const typeSelector = document.getElementById('typeSelector');
    const categoriesList = document.getElementById('categoriesList');
    
    typeSelector.addEventListener('ionChange', (ev) => {
        let currentCategoryAvatar = document.getElementById("currentCategoryAvatar");
        let currentCategoryIcon = document.getElementById("currentCategoryIcon");
        let currentSelect = ev.detail.value; 
        
        if(currentSelect == "income"){
            currentCategories = categories.filter(category => category.type != "expenses");
        } else {
            currentCategories = categories.filter(category => category.type != "income");
        }
        categoriesList.innerHTML = listCategories(currentCategories.sort(sortByName()));
        currentCategoryAvatar.style.backgroundColor = currentCategories[0].color;
        currentCategoryIcon.setAttribute("name", currentCategories[0].icon);
        
    })

    btnSubmit.addEventListener("click", () => {
      alert(input.value);
    });

    function listCategories(currentCategories) {
      return currentCategories.map((category) => `
            <ion-col size="3" onclick="handleCategorySelect('${category.icon}','${category.color}','${category.id}')">
                <ion-avatar class="iconAvatar" id="avatar-${category.id}" style="margin: 0 auto; height:50px; width:50px; background-color: ${category.icon==currentCategories[0].icon?category.color:"#F5F5F5"};">
                    <ion-icon class="iconIcon" id="icon-${category.id}" name="${category.icon}" style="color: ${category.icon==currentCategories[0].icon?"#FFF":"#000"};"></ion-icon>
                </ion-avatar>
                <ion-note>${category.name}</ion-note>
            </ion-col>
        `).join("")
    }
    
    function sortByName() {
      return function(a, b) {
          var nameA = a.name.toUpperCase(); // ignore upper and lowercase
          var nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA == 'OTHER' | a.userAdded) {
            return 1;
          }
          if (nameB == 'OTHER' | b.userAdded) {
            return -1;
          }
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        }
    }
  }
}

customElements.define("add-item-page", addItem);