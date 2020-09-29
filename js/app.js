const nav = document.querySelector('ion-nav');
const showDetail = (title) => {
  const tech = techs.find(tech => tech.title === title);
  nav.push('nav-detail', { tech });
}

const openAddModal = () => {
  // create the modal with the `modal-page` component
  const modalElement = document.createElement('ion-modal');
  modalElement.component = 'modal-page';
  modalElement.cssClass = 'my-custom-class';
  // present the modal
  document.body.appendChild(modalElement);
  return modalElement.present();
}

function dismissModal() {
  const input = document.querySelector('#input-name');
  const modalElement = document.querySelector('ion-modal');
  modalElement.dismiss({
    'dismissed': true
  });
  alert(input.value);
}
    
function deleteItem(id) {
    alert(id);
}