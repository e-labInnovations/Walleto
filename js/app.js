const nav = document.querySelector('ion-nav');
const showDetail = (title) => {
  const tech = techs.find(tech => tech.title === title);
  nav.push('nav-detail', { tech });
}

const openDetailedItemModal = () => {
  // create the modal with the `modal-page` component
  const modalElement = document.createElement('ion-modal');
  modalElement.component = 'detailed-item-modal';
  //modalElement.cssClass = 'my-custom-class';
  // present the modal
  document.body.appendChild(modalElement);
  return modalElement.present();
}

    
function deleteItem(id) {
    alert(id);
}
    
function handleIconSelect(icon, color){
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

function handleCategorySelect(icon, color, id){
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