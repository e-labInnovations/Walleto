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
            <ion-icon name="mail" slot="start"></ion-icon>
            <ion-label>Inbox</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="paper-plane" slot="start"></ion-icon>
            <ion-label>Outbox</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="heart" slot="start"></ion-icon>
            <ion-label>Favorites</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="archive" slot="start"></ion-icon>
            <ion-label>Archived</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="trash" slot="start"></ion-icon>
            <ion-label>Trash</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="warning" slot="start"></ion-icon>
            <ion-label>Spam</ion-label>
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
          <ion-title>Inbox</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
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

        <ion-list>
        <ion-list-header>
          09/21 Mon
        </ion-list-header>

        <ion-item>
          <ion-avatar slot="start" style="color: #FFF; background-color: #b31f6f;">
            <ion-icon slot="center" name="barbell"></ion-icon>
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

      <ion-list>
        <ion-list-header>
          Online
        </ion-list-header>

        <ion-item>
          <ion-avatar slot="start">
            <img src="./avatar-poe.png">
          </ion-avatar>
          <ion-label>
            <h2>Poe</h2>
            <h3>New Ride</h3>
            <p>I just upgraded my X-Wing. Next time...</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="./avatar-ben.png">
          </ion-avatar>
          <ion-label>
            <h2>Ben</h2>
            <h3>Move Along</h3>
            <p>These aren't the droids you're looking for...</p>
          </ion-label>
        </ion-item>
      </ion-list>
      </ion-content>
    </div>
 <script type="module">
    import { menuController } from 'https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/index.esm.js';
    window.menuController = menuController;
</script>
 `;
    }
  }
);
