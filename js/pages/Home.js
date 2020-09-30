import ItemCard from "./components/ItemCard.js";
import addNewItemModal from "./components/addModal.js";
import { menuController } from 'https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/index.esm.js';

export default class HomePage extends HTMLElement {
      connectedCallback() {
        this.innerHTML = `
          <ion-menu side="start" content-id="main-content">
              <ion-header>
                <ion-toolbar translucent>
                  <ion-title>Menu</ion-title>
                </ion-toolbar>
              </ion-header>
      
              <ion-content>
                <ion-list>
                  <ion-item>
                    <ion-icon name="pie-chart-outline" slot="start"></ion-icon>
                    <ion-label>Charts</ion-label>
                  </ion-item>
                  <ion-item href="/categories">
                    <ion-icon name="grid-outline" slot="start"></ion-icon>
                    <ion-label>Categories</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-icon name="open-outline" slot="start"></ion-icon>
                    <ion-label>Expert</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-icon name="settings-outline" slot="start"></ion-icon>
                    <ion-label>Settings</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-icon name="star-outline" slot="start"></ion-icon>
                    <ion-label>Rate Us</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-icon name="information-circle-outline" slot="start"></ion-icon>
                    <ion-label>About</ion-label>
                  </ion-item>
                </ion-list>
              </ion-content>
            </ion-menu>

            <div class="ion-page" id="main-content">
              <ion-header>
                <ion-toolbar>
                  <ion-buttons slot="start">
                    <ion-menu-button></ion-menu-button>
                  </ion-buttons>
                  <ion-title>Walleto</ion-title>
                </ion-toolbar>
              </ion-header>
              
              <ion-content>
                <ion-card>
                    <ion-card-content>
                        <ion-grid>
                            <ion-row>
                                <ion-col class="ion-text-center">
                                    <ion-text color="secondary">
                                        <p>2020</p>
                                        <h1>May</h1>
                                    </ion-text>
                                </ion-col>
                                <ion-col class="ion-text-center">
                                    <ion-text color="secondary">
                                        <p>Income</p>
                                        <h1>0.00</h1>
                                    </ion-text>
                                </ion-col>
                                <ion-col class="ion-text-center">
                                    <ion-text color="secondary">
                                        <p>Expense</p>
                                        <h1>0.00</h1>
                                    </ion-text>
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </ion-card-content>
                </ion-card>
                <component-item-card></component-item-card>
                <component-item-card></component-item-card>
              
              <ion-fab vertical="bottom" horizontal="end" slot="fixed">
                <ion-fab-button onclick="openAddModal()">
                  <ion-icon name="add"></ion-icon>
                </ion-fab-button>
              </ion-fab>
          
              </ion-content>
            </div>
        `;
        let router = document.querySelector('ion-router');
        router.addEventListener("ionRouteWillChange", () => {
            if(menuController.isOpen()){
                menuController.close();
            }
        })
      }
    }
    
customElements.define("home-page", HomePage);