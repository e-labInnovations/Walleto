customElements.define(
  'sidemenu-component',
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
    
     <script type="module">
        import { menuController } from 'https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/index.esm.js';
        window.menuController = menuController;
    </script>
   `;
    }
  }
);
