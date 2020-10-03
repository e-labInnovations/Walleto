const nav = document.querySelector('ion-nav');

const data = {
    test : "data"
}
const showDetail = (title) => {
  const tech = techs.find(tech => tech.title === title);
  nav.push('nav-detail', { tech });
}

const openDetailedItemModal = (id) => {
  // create the modal with the `modal-page` component
  const modalElement = document.createElement('ion-modal');
  modalElement.component = 'detailed-item-modal';
  //modalElement.cssClass = 'my-custom-class';
    modalElement.componentProps = {id};
  // present the modal
  document.body.appendChild(modalElement);
  return modalElement.present();
}

    
const deleteItem = (id) => {
    alert(id);
}
    
const handleIconSelect = (icon, color) => {
    let avatarIcon = document.getElementById("avatar-"+icon);
    let iconIcon = document.getElementById("icon-"+icon);
    let currentCategoryAvatar = document.getElementById("currentCategoryAvatar");
    let currentCategoryIcon = document.getElementById("currentCategoryIcon");
    
    currentCategoryAvatar.style.backgroundColor = color;
    currentCategoryIcon.setAttribute("name", icon);
    
    var iconAvatarElements, iconIconElements, i;
    iconAvatarElements = document.querySelectorAll(".iconAvatar");
    iconIconElements = document.querySelectorAll(".iconIcon");
    
    for (i = 0; i < iconAvatarElements.length; i++) {
      iconAvatarElements[i].style.backgroundColor = "#F5F5F5";
    }
    for (i = 0; i < iconAvatarElements.length; i++) {
      iconIconElements[i].style.color = "#000";
    }
    
    iconIcon.style.color = "#FFF";
    avatarIcon.style.backgroundColor = color;
    
    
}

const handleCategorySelect = (icon, color, id) => {
    let avatarIcon = document.getElementById("avatar-"+id);
    let iconIcon = document.getElementById("icon-"+id);
    let currentCategoryAvatar = document.getElementById("currentCategoryAvatar");
    let currentCategoryIcon = document.getElementById("currentCategoryIcon");
    
    currentCategoryAvatar.style.backgroundColor = color;
    currentCategoryIcon.setAttribute("name", icon);
    
    var iconAvatarElements, iconIconElements, i;
    iconAvatarElements = document.querySelectorAll(".iconAvatar");
    iconIconElements = document.querySelectorAll(".iconIcon");
    
    for (i = 0; i < iconAvatarElements.length; i++) {
      iconAvatarElements[i].style.backgroundColor = "#F5F5F5";
    }
    for (i = 0; i < iconAvatarElements.length; i++) {
      iconIconElements[i].style.color = "#000";
    }
    
    iconIcon.style.color = "#FFF";
    avatarIcon.style.backgroundColor = color; 
}

const getAllItems = () => {
    var items = JSON.parse(localStorage.getItem('Walleto-allItems'));
    if(items == null) {
        items = []
        localStorage.setItem('Walleto-allItems',JSON.stringify([]));
    }
    return items;
}

const addItem = (newItem) => {
    var items = JSON.parse(localStorage.getItem('Walleto-allItems'));
    if(items == null) {
        items = []
        localStorage.setItem('Walleto-allItems',JSON.stringify(items));
    }
    items.push(newItem);
    localStorage.setItem('Walleto-allItems',JSON.stringify(items));
}

const getCategories = () => {
    var items = JSON.parse(localStorage.getItem('Walleto-categories'));
    if(items == null) {
        items = [
        {
        "id":"food",
        "icon":"restaurant",
        "name":"Food",
        "color":"#2693ff",
        "type":"expenses",
        "userAdded":false
        },{
        "id":"bills",
        "icon":"receipt",
        "name":"Bills",
        "color":"#FF0000",
        "type":"expenses",
        "userAdded":false
        }]
        localStorage.setItem('Walleto-categories',JSON.stringify(items));
    }
    return items;
}

const addCategoryItem = (newItem) => {
    var items = JSON.parse(localStorage.getItem('Walleto-categories'));
    if(items == null) {
        items = []
        localStorage.setItem('Walleto-categories',JSON.stringify(items));
    }
    items.push(newItem);
    localStorage.setItem('Walleto-categories',JSON.stringify(items));
}