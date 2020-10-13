export default class Filter extends HTMLElement {
 connectedCallback() {
   let categories = getCategories(); //From app.js
  
    this.innerHTML = `
      <ion-header translucent>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/" id="back"></ion-back-button>
          </ion-buttons>
          <ion-title>Filter</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-content fullscreen class="ion-padding">
          <ion-item>
            <ion-label>Start Date</ion-label>
            <ion-datetime display-format="DD-MMM-YYYY" placeholder="Select Date"  value="${new Date()}"></ion-datetime>
          </ion-item>
          
          <ion-item>
            <ion-label>End Date</ion-label>
            <ion-datetime display-format="DD-MMM-YYYY" placeholder="Select Date"  value="${new Date()}"></ion-datetime>
          </ion-item>
          
      
        <ion-list>
          <ion-list-header lines="inset">
            <ion-label>Category</ion-label>
          </ion-list-header>
            <ion-item>
              <ion-checkbox slot="start" value="all" checked></ion-checkbox>
              <ion-avatar slot="end"  style="background-color: #000000;">
                <ion-icon name="checkmark-done"></ion-icon>
              </ion-avatar>
              <ion-label>
                <h3>All</h3>
              </ion-label>
            </ion-item>
            ${listHTMLData(categories)}
        </ion-list>
        
      </ion-content>
      <ion-button color="primary" id="btnSubmit">Save</ion-button>
    `;
    
    function listHTMLData(categories) {
        return categories.map(
            (category) => `
                <ion-item>
                  <ion-checkbox slot="start" value="${category.id}" checked=false></ion-checkbox>
                  <ion-avatar slot="end"  style="background-color: ${category.color};">
                    <ion-icon name="${category.icon}"></ion-icon>
                  </ion-avatar>
                  <ion-label>
                    <h3>${category.name}</h3>
                  </ion-label>
                </ion-item>
        `
          )
          .join("")
    }
    
    
  }
}
 
customElements.define("filter-page", Filter);
 