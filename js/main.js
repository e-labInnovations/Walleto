import HomePage from "./pages/Home.js"
import CategoriesPage from "./pages/Categories.js"
import AddNewCategory from "./pages/AddNewCategory.js"
import AddItem from './pages/AddItem.js'
import DetailedItemModal from './pages/components/DetailedItemModal.js'
const Router = document.querySelector('ion-router');

Router.addEventListener('ionRouteDidChange', (e) => {
    let routeTo = e.detail.to;
    let routerFrom = e.detail.from;
    
    if(routeTo === '/categories' && routerFrom === '/categories/addNew') {
        document.querySelector('categories-page').connectedCallback()
    }
    if(routeTo === '/' && routerFrom === '/addItem') {
        document.querySelector('home-page').connectedCallback()
    }
})
    
    const techs = [
      {
        'title': 'Angular',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      },
      {
        'title': 'CSS3',
        'icon': 'css3',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      },
      {
        'title': 'HTML5',
        'icon': 'html5',
        'description': 'The latest version of the web\'s markup language.',
        'color': '#F46529'
      },
      {
        'title': 'JavaScript',
        'icon': 'javascript',
        'description': 'One of the most popular programming languages on the Web!',
        'color': '#FFD439'
      },
      {
        'title': 'Sass',
        'icon': 'sass',
        'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
        'color': '#CE6296'
      },
      {
        'title': 'NodeJS',
        'icon': 'nodejs',
        'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
        'color': '#78BD43'
      },
      {
        'title': 'Python',
        'icon': 'python',
        'description': 'A clear and powerful object-oriented programming language!',
        'color': '#3575AC'
      },
      {
        'title': 'Markdown',
        'icon': 'markdown',
        'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
        'color': '#412159'
      },
      {
        'title': 'Tux',
        'icon': 'tux',
        'description': 'The official mascot of the Linux kernel!',
        'color': '#000'
      },
    ];

    

    customElements.define('nav-detail', class NavDetail extends HTMLElement {
      connectedCallback() {
        let tech = techs.find(t => t.title === this.tech_title);
        this.innerHTML = `
          <ion-header translucent>
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-back-button defaultHref="/"></ion-back-button>
              </ion-buttons>
              <ion-title>${tech.title}</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content fullscreen class="ion-padding">
            <ion-icon name="logo-${tech.icon}" style="color: ${tech.color};" size="large"></ion-icon>
            <p>${tech.description}</p>
          </ion-content>
        `;
      }
    });