const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnConnexionStaff = document.getElementById("btnconnexionstaff");

btnConnexionStaff.addEventListener("click", checkCredentials);

function checkCredentials () {

   // ici, il faudra appeler l'API pour vérifier les crédentials en BDO
   if(mailInput.value == "test@mail.com" && passwordInput.value == "123") {
   
    // il faudra récupérer le vrai token 
    const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
    setToken(token);


    setCookie(RoleCookieName, "admin", 7);
    window.location.replace ("/");
    // Placer le token en cookie
    
   }
   else if (mailInput.value == "test2@mail.com" && passwordInput.value == "1234"){
         
         // il faudra récupérer le vrai token 
         const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskhyfgdfgsdgf";
         setToken(token);

         setCookie(RoleCookieName, "Vétérinaire", 7);
         window.location.replace ("/");
         // Placer le token en cookie
   }
   else if (mailInput.value == "test3@mail.com" && passwordInput.value == "12345"){
         
      // il faudra récupérer le vrai token 
      const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfyhyjgbqslkfdgbskldfgdfgsdgf";
      setToken(token);

      setCookie(RoleCookieName, "Employé", 7);
      window.location.replace ("/");
      // Placer le token en cookie
   }
   else {
      mailInput.classList.add("is-invalid");
      passwordInput.classList.add("is-invalid");
   }
}






