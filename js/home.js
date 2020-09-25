customElements.define(
  'page-home',
  class extends HTMLElement {
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
          <ion-item>
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

		<ion-card>
            <ion-card-content>
                <ion-list>
                <ion-list-header>
                  09/21 Mon
                </ion-list-header>

                <ion-item>
                  <ion-avatar slot="start" style="color: #FFF; background-color: #b31f6f;">
                    <ion-icon name="barbell"></ion-icon>
                  </ion-avatar>
                  <ion-label>
                    <h2>Finn</h2>
                    <h3>I'm a big deal</h3>
                    <p>Listen, I've had a pretty messed up day...</p>
                  </ion-label>
                </ion-item>

                <ion-item>
                  <ion-avatar slot="start">
                    <ion-icon name="flash"></ion-icon>
                  </ion-avatar>
                  <ion-label>
                    <h2>Han</h2>
                    <h3>Look, kid...</h3>
                    <p>I've got enough on my plate as it is, and I...</p>
                  </ion-label>
                </ion-item>
            </ion-card-content>
            </ion-card>

      <ion-list>
        <ion-list-header>
          Online
        </ion-list-header>

        <ion-item>
          <ion-avatar slot="start">
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
          </ion-avatar>
          <ion-label>
            <h2>Poe</h2>
            <h3>New Ride</h3>
            <p>I just upgraded my X-Wing. Next time...</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
          </ion-avatar>
          <ion-label>
            <h2>Ben</h2>
            <h3>Move Along</h3>
            <p>These aren't the droids you're looking for...</p>
          </ion-label>
        </ion-item>
      </ion-list>
      
      <ion-button expand="block">Show Modal</ion-button>
      
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button>
          <ion-icon name="add" onclick="createModal"></ion-icon>
        </ion-fab-button>
      </ion-fab>
  
      </ion-content>
    </div>
 `;
    }
  }
);
