
const form = {

clientName: "",

clientFirstName : "",

address: " ",

reservatonInCourt: false,

checkName: true,

checkFirstName: true,

checkFirstName: true,

checkAddress: false,

initialiseForm()
{
  nameElmnt.value = localStorage.getItem("nom");
  firstNameElmnt.value = localStorage.getItem("prenom");

},

recoverStationAddress()
{
  const addressElmnt = document.getElementById("address").textContent;
  form.address = addressElmnt;
  if (addressElmnt == "")
   {
    form.checkAddress = false;
   }
   else
   {
    form.checkAddress = true;
   }



},

recoverName(e)
{

  //  Recover the input content
   form.clientName = e.target.value;
   localStorage.setItem('nom', e.target.value);


     if (e.target.value == "")
     {
        form.checkName = false;
     }
     else
     {
        form.checkName = true;
     }


},

emptyForm()
{
  if(nameElmnt.value == ""){form.clientName = false} else {form.clientName = localStorage.getItem("nom")};
  if(firstNameElmnt.value == ""){ form.firstNameElmnt = false} else {form.clientFirstName = localStorage.getItem("prenom")};
},

recoverFisrtName(e)
{

   localStorage.setItem('prenom', e.target.value);

  //  Recover the input content
   form.clientFirstName = e.target.value;
    if (e.target.value == "")
       {
          form.checkFirstName = false;
       }
       else
       {
          form.checkFirstName = true;
       }
},

 addToFooter(e)
    {
       e.preventDefault(); // Annulation de l'envoi des données
      if (form.reservatonInCourt == false)
        {

        const errorName = document.getElementById("errorName");
        const errorFirstName = document.getElementById("errorFirstName");
        const errorStation = document.getElementById("errorStation");
        const color = "red";
        form.recoverStationAddress();

        if ((form.checkName == true) && (form.checkFirstName == true) && (form.checkAddress == true))
         {
             form.reservatonInCourt = true;
             footer.style.display = "inline";
             // get the station address
            const infoBooking = document.createElement("div");
            infoBooking.textContent = `${form.clientName} ${form.clientFirstName} à resever un vélo à l'${form.address} `;

            footer.insertBefore(infoBooking, document.getElementById("before"));
            form.expirationReservation();
         }
        else
          {
            if (form.checkAddress == false)
              {
               errorStation.textContent = " Choissisez une station sur la carte";
               errorStation.style.color = color;

              };
            if (form.checkFirstName == false)
              {
               errorFirstName.textContent = "Indiquez votre prenom ";
               errorFirstName.style.color = color;
              };
            if (form.checkName == false)
              {
               errorName.textContent = "Indiquez votre nom ";
               errorName.style.color = color;
              };

              // Delete the error messages of the form after 3s
        setTimeout(function ()
          {
            errorStation.textContent = "";
            errorFirstName.textContent = "";
            errorName.textContent = "";
         }, 3000);
          }

        }
        else
        {
          const errorAlreadyRes = document.getElementById("alreadyReserv");
          errorAlreadyRes.textContent = " Vous avez déja une reservation en cour";
           setTimeout(function ()
          {
            errorAlreadyRes.textContent = "";
         }, 3000);

        }
    },


  expirationReservation()
  {
      setTimeout(function ()
          {
            document.querySelector("footer").textContent = "";
            form.reservatonInCourt = false;
            footer.style.display = "none";
          }, 120000);

      let compteurSegElmnt = document.getElementById("seg");
      let compteurMinElmnt = document.getElementById("min");


             decrease = () =>
              {
               let seg = Number(compteurSegElmnt.textContent);
               let min = Number(compteurMinElmnt.textContent)
               if (seg == 0 )
                {
                  compteurSegElmnt.textContent = 60;
                  compteurMinElmnt.textContent = min -1 ;

                }
                else
                {
                  compteurSegElmnt.textContent = seg -1;

                }

             };
            setInterval(decrease, 1000);
  }

}

const footer = document.querySelector("footer");
const nameElmnt = document.getElementById('name');
const firstNameElmnt = document.getElementById("firstName");

nameElmnt.addEventListener("blur", form.recoverName);
firstName.addEventListener("blur", form.recoverFisrtName);

var elmntform = document.querySelector("form");
elmntform.addEventListener("submit", form.addToFooter);





form.initialiseForm();
form.emptyForm()
