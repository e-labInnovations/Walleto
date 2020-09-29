export default class ItemCard extends HTMLElement {
      connectedCallback() {
        this.innerHTML = `
		<ion-card>
		<ion-card-header>
		    <ion-card-subtitle>09/21 Mon  <span class="ion-float-right"> Income: 60 Expenses: 50</span> </ion-card-subtitle>
		  </ion-card-header>
            <ion-card-content>
                <ion-item>
                  <ion-avatar style="background-color: #4CAF50;" slot="start">
                    <ion-icon name="barbell"></ion-icon>
                  </ion-avatar>
                  <ion-label>
                    <h3>Finn <span class="ion-float-right"> -50 </span></h3>
                  </ion-label>
                </ion-item>

                <ion-item>
                  <ion-avatar slot="start"  style="background-color: #2196F3;">
                    <ion-icon name="flash"></ion-icon>
                  </ion-avatar>
                  <ion-label>
                    <h3>Han <span class="ion-float-right"> 60 </span></h3>
                  </ion-label>
                </ion-item>
            </ion-card-content>
            </ion-card>
        `;
      }
    }
    
customElements.define("component-item-card", ItemCard);