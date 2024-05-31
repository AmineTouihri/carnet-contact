/************* Model liste of contacts *************/
let contacts = [];

/************* View *************/
// seclect nodes
let ajouterContact = document.getElementById("ajouter");
let afficherForm = document.getElementById("ouvrir");
let restFormButton = document.getElementById("effacer");
let side2 = document.getElementById("side2");

let filtre= document.getElementById("filtre");

let filter="normal"


filtre.addEventListener('change',(e)=>{

  hydrateContacts()
  filter=e.target.value;
  if(filter=="normal"){
     contacts=contacts;
  }else{
    contacts.sort((a,b)=>{
      if ( a.civilite=="Feminin"){
        return -1;
      }
      else {
        return 1;
      }
      return 0;
    })
  }

  insertContacts()

})



// to call when the page first loaded to create list of contacts
const insertContacts = () => {
  let contactList = document.getElementById("contact");

  console.log(contacts)

  //loop through the contacts array and create li elemenets
  const htmlToInject = contacts.map(
    c => `
    <li
    id="${c.telephone}"
    class="contact-item"
    style="cursor: pointer" 
    >
      <span
        style="font-weight: bold"
      >${c.nom} ${c.prenom} </span>
      
    </li>
  `
  );


  //check if contacts length is 0 dispaly vide message else liste of

  if (contacts.length == 0) contactList.innerHTML = `<p style="text-align: start">Liste des contacts vide </p> `

  else contactList.innerHTML = `        <p style="text-align: start">Liste des contacts</p>  ` + htmlToInject.join("");



  const contactItems = document.querySelectorAll("li");



  // loop through the item and add event listner and the methode associate 
  contactItems.forEach(item => {
    item.addEventListener("click", e => {
      const contact = contacts.find(contact => contact.telephone === e.target.id);

      side2.innerHTML = displayContact(contact)

      const supp_contact = document.querySelector(".supp-contact")


      // add event listener to handle delete button click
      supp_contact.addEventListener("click", e => {

        contacts = contacts.filter(contact => contact.telephone != e.target.id)
        persistContact()
        insertContacts()
        alert("supp avec succéss")
        side2.innerHTML = `Hello Contact`;

      })


      const modifier = document.querySelector(".modifier");


      // add click event listener to render the  side 2 then add event listeners

      modifier.addEventListener("click", e => {
        const contactIndex = contacts.findIndex(contact => contact.telephone === e.target.id);
        let contact = contacts[contactIndex]

        // update the side 2 with contact form

        side2.innerHTML = modifierContactForm(contact)

        let form = document.getElementById("form");

        // add event listener to handel modification  
        form.addEventListener("submit", event => {

          event.preventDefault();
          // contacts = contacts.filter(contact => contact.telephone !== event.target.id);



          let civilite = document.getElementById("civilite");
          let nom = document.getElementById("nom");
          let prenom = document.getElementById("prenom");
          let telephone = document.getElementById("telephone");



          contact = {
            civilite: civilite.value,
            nom: nom.value,
            prenom: prenom.value,
            telephone: telephone.value,
          };

          contacts[contactIndex] = contact

          contacts = contacts.sort(compare)

          persistContact();

          insertContacts();

        });
      });


    });
  });
};


// submit form to add new contact function

const submit = () => {
  let civilite = document.getElementById("civilite");
  let nom = document.getElementById("nom");
  let prenom = document.getElementById("prenom");
  let telephone = document.getElementById("telephone");



  const contact = {
    civilite: civilite.value,
    nom: nom.value,
    prenom: prenom.value,
    telephone: telephone.value,
  };

  contacts.push(contact);

  contacts = contacts.sort(compare)

  persistContact();

  insertContacts();
};



// delete contact
const deletecontact = telephone => {
  contacts.filter(contact => contact.telephone !== telephone);
  persistContact();
};




// get contacts from local storage





afficherForm.addEventListener("click", () => {
  side2.innerHTML = formHtmlToAddNewContact()
  let form = document.getElementById("form");
  form.addEventListener("submit", e => {
    e.preventDefault();


    //check inputs values
    if (civilite.value == "" || telephone.value == "" || prenom.value == "" || nom.value == "") {
      alert("check ur inputs some are required *")
      return
    }


    //check if the numero is already exists 




    submit();
    nom.value = "";
    prenom.value = "";
    telephone.value = "";

  });
});

restFormButton?.addEventListener("click", () => {

});



// hydrate state from local storage on page load
document.addEventListener("DOMContentLoaded", () => {
  hydrateContacts();
  insertContacts();
});
