let addContactBtn = document.querySelector('#addContactBtn');
let getDetail = document.querySelector('#getDetail');
let reset = document.querySelector('#reset');

const addContact = () =>{
   let inpName = document.querySelector('#inpName').value;
   let inpNumber = document.querySelector('#inpNumber').value;
   let error = document.querySelector('#error');

   if (inpName === '' || inpNumber === ''){
      error.innerHTML = 'Please Enter Details !';
   } else{
      error.innerHTML = 'Successfully Added New Contact';
      error.style.color = 'green';
      sessionStorage.setItem(inpName, inpNumber);
   }
};

const getContact = () => {
   let displayContact = document.querySelector('#displayContact');
   let getContactName = document.querySelector('#getContactName').value;
   let output = sessionStorage.getItem(getContactName);

   if(output === null){
      displayContact.innerHTML = 'This Contact is not added';
   } else{
      displayContact.innerHTML = `${getContactName}: ${output}`;
   }
}

const resetPage = () => {
   window.location.reload();
}

addContactBtn.addEventListener('click', addContact);
getDetail.addEventListener('click', getContact);
reset.addEventListener('click', resetPage);