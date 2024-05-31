formHtmlToAddNewContact= ()=>{formHtmlToAddNewContact

   return `
<h1>Ajouter un contact</h1>
<form style="width: 100%" id="form">
  <div>
    <select name="civilite" id="civilite">
      <option value="Masculin" selected>
        Masculin
      </option>
      <option value="Feminin">Feminin</option>
    </select>
  </div>
  <div>
    <input name="prenom" id="prenom" placeholder="prenom" type="text" />
  </div>
  <div>
    <input type="text" id="nom" name="nom" placeholder="nom" />
  </div>
  <div>
    <input name="telephone" placeholder="telephone" id="telephone" type="number" />
  </div>

  <button type="submit" id="ajouter">
    Ajouter
  </button>
  <button type="reset" id="effacer">
    Effacer
  </button>
</form>`

}



modifierContactForm= (contact)=>{

    return `
        
    <p>Modifier le contact</p>
    <form style="width: 100%" id="form">
      <div>
        <select name="civilite" id="civilite">
          <option value="Masculin" selected>
            Masculin
          </option>
          <option value="Feminin">Feminin</option>
        </select>
      </div>
      <div>
        <input value=${contact.prenom} name="prenom" id="prenom" placeholder="prenom" type="text" />
      </div>
      <div>
        <input value=${contact.nom} type="text" id="nom" name="nom" placeholder="nom" />
      </div>
      <div>
        <input value=${contact.telephone} name="telephone" placeholder="telephone" id="telephone" type="number" />
      </div>

      <button type="submit" id="ajouter">
        Modifier
      </button>
      
    </form>`
 
 }


 displayContact= (contact)=>{

  return  `
  <div>
    <h1>Nom : ${contact.nom} ${contact.prenom}</h1>
    <p>Telephone : ${contact.telephone}</p>
    <p>civilite : ${contact.civilite}</p>
    <button class="modifier" id=${contact.telephone} >Modifier</button>
    <button class="supp-contact" id=${contact.telephone} >Supprimer</button>


  </div>
  `

}





 





