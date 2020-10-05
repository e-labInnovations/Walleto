import HomePage from "./pages/Home.js"
import CategoriesPage from "./pages/Categories.js"
import AddNewCategory from "./pages/AddNewCategory.js"
import AddItem from './pages/AddItem.js'
import DetailedItemModal from './pages/components/DetailedItemModal.js'
import Settings from './pages/Settings.js'

const Router = document.querySelector('ion-router');

Router.addEventListener('ionRouteDidChange', (e) => {
    let routeTo = e.detail.to;
    let routerFrom = e.detail.from;
    
    if(routeTo === '/') {
        let refresh = sessionStorage.getItem("refreshHome");
        if(refresh) {
            document.querySelector('home-page').connectedCallback();
            sessionStorage.setItem("refreshHome", false);
        }
    }
    if(routeTo === '/categories') {
        let refresh = sessionStorage.getItem("refreshCategories");
        if(refresh) {
            document.querySelector('categories-page').connectedCallback();
            sessionStorage.setItem("refreshCategories", false);
        }
    }
})

let enableDarkMode = localStorage.getItem('enableDarkMode');
if (enableDarkMode) {
  document.querySelector('body').classList.add('dark')
}