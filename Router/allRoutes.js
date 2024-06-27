import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/services", "Les services", "/pages/services.html", [], "/js/services.js"),
    new Route("/habitats", "Les habitats", "/pages/habitats.html", [], "/js/habitats.js"),
    new Route("/contact", "Contact", "/pages/contact.html", []),
    new Route("/avis", "Avis", "/pages/avis.html", []),
    new Route("/connexion", "Connexion Staff", "/pages/auth/connexionstaff.html", ["disconnected"], "/js/auth/connexionstaff.js"),
    new Route("/alertsigninstaff", "Alerte inscription staff", "/pages/auth/alertsigninstaff.html", ["disconnected"]),
    new Route("/accountempl", "Mon compte Employé", "/pages/auth/accountempl.html", ["Employé"], "/js/auth/accountempl.js"),
    new Route("/editpassword", "Changement de mot de passe", "/pages/auth/editpassword.html", ["admin"]),
    new Route("/accountvete", "Mon compte Vétérinaire", "/pages/auth/accountvete.html", ["Vétérinaire"], "/js/auth/accountvete.js"),
    new Route("/dashboard", "Dashboard du Zoo", "/pages/dashboard/dashboard.html", ["admin", "Vétérinaire", "Employé"]), 
    new Route("/gestioncompte", "Gestion des comptes pro", "/pages/gestioncompte/gestioncompte.html", ["admin"]),  
    new Route("/accountadmin", "Mon compte Administrateur", "/pages/auth/accountadmin.html", ["admin"], "/js/auth/accountadmin.js"),
    new Route("/loginadmin", "Connexion Administrateur", "/pages/auth/loginadmin.html", ["disconnected"], "/js/auth/loginadmin.js"),         
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo ARCADIA";