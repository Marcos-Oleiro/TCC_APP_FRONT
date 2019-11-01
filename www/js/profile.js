import { Service } from "./service/Service.js";

const divPhoto = document.querySelector('div.photo');
const divName = document.querySelector('div.name');
const txtDesc = document.querySelector('#desc_text');
const img = document.querySelector('img');
const desc_verif_fail = document.querySelector('div.desc_verif_fail');
const desc_verif_suc = document.querySelector('div.desc_verif_suc');

document.addEventListener('deviceready', function () {
  console.clear();
  divName.textContent = localStorage['nickname'];
  // document.querySelector('#desc_text').value = localStorage['desc'];
  // img.src = "../img/icon_profile5.png";
  loadCurrentDesc();
  
  $('#form_desc').submit(UpDateDesc);
});

function loadCurrentDesc() {
  // localStorage['description'] = "teste"; 
  if (localStorage['description'] !== 'null') {
    // txtDesc.textContent = localStora
    txtDesc.textContent = localStorage['description'];
  }
}

function UpDateDesc() {
  event.preventDefault();
  const new_description = ($(this).serializeArray())[0].value.trim();

  if (new_description.length === 0) {
    desc_verif_suc.textContent = null;
    desc_verif_fail.textContent = 'A nova descrição não poder ser vazia!';
  } else {

    const new_desc_info = {
      'new_description': new_description,
    };

    const service = new Service(`profile/edit/desc/${localStorage.getItem("id")}`);
    const myJSON = JSON.stringify(new_desc_info);
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('tkn'),
    }

    let status;

    service.doReq('PUT', myJSON, headers)
      .then(res => {
        localStorage['description'] = new_description

      })
  }

  event.preventDefault();
}
