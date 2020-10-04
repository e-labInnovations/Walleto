const nav = document.querySelector('ion-nav');

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

async function presentToast(msg) {
  const toast = document.createElement('ion-toast');
  toast.message = msg;
  toast.duration = 2000;

  document.body.appendChild(toast);
  return toast.present();
}

    
const deleteItem = (id) => {
    let categoryItem = getCategories().find(category => category.id == id);
    
    const deleteItem = () => {
        deleteCategoryItem(id, (data) => {
            document.querySelector('categories-page').connectedCallback();
        })
        //document.querySelector('ion-nav').setRoot('categories-page')
    }
    
    const alert = document.createElement('ion-alert');
    alert.header = 'Alert';
    //alert.subHeader = 'Subtitle';
    alert.message = `Do you really want delete ${categoryItem.name} category?`;
    alert.buttons = [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Yes',
          handler: deleteItem
        }
      ];

    document.body.appendChild(alert);
    return alert.present();
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
    currentCategoryAvatar.setAttribute("category", id)
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

const getHomeData = () => {
    let walletoItems = getWalletoItems();
    let dateSet = new Set(walletoItems.map(item => convertDate(item.date)));
    
    let dateArray = Array.from(dateSet).sort(function(a,b){
      return new Date(b) - new Date(a);
    });
    
    let expenseArray = walletoItems.filter(item => item.type === "expenses").map(item => Number(item.money));
    let incomeArray = walletoItems.filter(item => item.type === "income").map(item => Number(item.money));
    let totalExpenses = expenseArray.reduce((a, b) => a + b, 0);
    let totalIncome = incomeArray.reduce((a, b) => a + b, 0);
    
    return {dateArray, totalIncome, totalExpenses};
}
const getWalletoItems = () => {
    var items = JSON.parse(localStorage.getItem('Walleto-allItems'));
    if(items == null) {
        items = []
        localStorage.setItem('Walleto-allItems',JSON.stringify([]));
    }
    return items;
}

const getSingleWalletoItem = (id) => {
    let walletoItems = getWalletoItems();
    let categories = getCategories();
    let walletoItem = walletoItems.find(element => element.id === id);
    walletoItem.category = categories.find(element => element.id === walletoItem.category);
    return walletoItem;
}

const addWalletoItem = (newItem, callback) => {
    var items = JSON.parse(localStorage.getItem('Walleto-allItems'));
    if(items == null) {
        items = []
        localStorage.setItem('Walleto-allItems',JSON.stringify(items));
    }
    
    if(!newItem.id){
        var newID = Math.random().toString(36).substr(2, 9);
        newItem.id = newID;
    }
    
    items.push(newItem);
    localStorage.setItem('Walleto-allItems', JSON.stringify(items));
    callback(undefined, items);
}

const getWalletoItemsByDate = (date) => {
    let items = getWalletoItems();
    let categories = getCategories();
    
    let newItems = items.filter(item => convertDate(item.date) === date);
    newItems = newItems.map(item => {
        let category = item.category;
        let categoryObj = categories.find(itemCat => itemCat.id === item.category)
        item.category = categoryObj;
        return item;
    });
    
    let expenseArray = newItems.filter(item => item.type === "expenses").map(item => Number(item.money));
    let incomeArray = newItems.filter(item => item.type === "income").map(item => Number(item.money));
    let totalExpenses = expenseArray.reduce((a, b) => a + b, 0);
    let totalIncome = incomeArray.reduce((a, b) => a + b, 0);
    
    return { newItems, totalIncome, totalExpenses };
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

const addCategoryItem = (newItem, callback) => {
    var items = JSON.parse(localStorage.getItem('Walleto-categories'));
    
    if(items == null) {
        items = []
        localStorage.setItem('Walleto-categories',JSON.stringify(items));
    }
    
    var isExist = items.some(category => category.id == newItem.id);
    if (isExist) {
      callback(`Category already exist with the name ${newItem.name}`, undefined)
    } else {
       items.push(newItem);
       localStorage.setItem('Walleto-categories', JSON.stringify(items));
       callback(undefined, items)
    }
}

const deleteCategoryItem = (id, callback) => {
    let categories = getCategories();
    categories = categories.filter((item) => {
        return item.id !== id;
    });
    localStorage.setItem('Walleto-categories', JSON.stringify(categories));
    callback(categories)
}


//Utility Functions

//Function to convert rgb color to hex format
function rgb2hex(rgb) {
    var hexDigits = new Array ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 
    
    function hex(x) {
        return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
    }
 
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function convertDate(inputFormat, withDay = false) {
    var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    function pad(s) { 
        return (s < 10) ? '0' + s : s; 
    }
    var d = new Date(inputFormat);
    if(withDay) {
        let day = weekday[d.getDay()];
        return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('-') + " " + day;
    } else {
        return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('-');
    }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


