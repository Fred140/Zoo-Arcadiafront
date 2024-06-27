export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;   }
}


/*
12
[] -> Tout le monde peut y accéder
13
["disconnected"] -> Réserver aux utilisateurs déconnecté 
14
["client"] -> Réserver aux utilisateurs avec le rôle client 
15
["admin"] -> Réserver aux utilisateurs avec le rôle admin 
16
["admin", "client"] -> Réserver aux utilisateurs avec le rôle client OU admin
17
*/