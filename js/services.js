const servicesImage = document.getElementById("allImage");
const servicesImage2 = document.getElementById("allImage2");
const servicesImage3 = document.getElementById("allImage3");

let titre = ' <img class="rounded w-100" src="../Assets/petit train.jpg">';
let imgSource = "../Assets/restaurant.jpg";

let monImage = getImage(titre, imgSource);
let monImage2 = getImage2("titre2", "../Assets/guide.jpg");
let monImage3 = getImage3("titre3", "../Assets/petit train.jpg");

servicesImage.innerHTML = monImage;
servicesImage2.innerHTML = monImage2;
servicesImage3.innerHTML = monImage3;

function getImage(titre, urlImage) {
  titre = sanitizeHtml(titre);
  urlImage = sanitizeHtml(urlImage);
  return `<div class="col">
         <div class="jumbotron rounded bg-primary text-center text-justify text-white">
         <div class="action-image-buttons" data-show="admin">
            <button class="button" class="btn btn-outline-light" data-bs-toggle="modal"
            data-bs-target="#EditionTextModal"><i class="bi bi-pencil-square"></i></button>
          </div>
     <h3 class="display-4 m-3">Le Restaurant</h3>
     <p class="lead m-3">Fast-foods pour familles, voyageurs et les curieux est situé dans le Parc Zoologique. Voici
       ce que vous pouvez y découvrir :<br />
       <br />
       Cuisine traditionnelle française :<br />Les recettes phares sont revisitées et privilégient les produits de
       saison et locaux. Les entrées et desserts sont dressés dans des verrines, et les plats sont servis dans des
       cocottes.
     </p>
     <div class="action-image-buttons" data-show="admin">
       <button type="button" class="btn btn-outline-light" data-bs-toggle="modal"
         data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
       <button type="button" class="btn btn-outline-light" data-bs-toggle="modal"
         data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></button>
     </div>
     <img class="rounded w-100" src="${urlImage}" alt="Restaurant du Zoo"/>
     <p class="text-center id="EditionPhotoModal">${titre}</p>
     </div>
   </div>`;
}

function getImage2(titre2, urlImage2) {
  titre2 = sanitizeHtml(titre2);
  urlImage2 = sanitizeHtml(urlImage2);
  return ` <div class="col">
    <div class="jumbotron rounded bg-primary text-center text-justify text-white">
    <div class="action-image-buttons" data-show="admin">
      <button class="button" class="btn btn-outline-light" data-bs-toggle="modal"
        data-bs-target="#EditionTextModal"><i class="bi bi-pencil-square"></i></button>
    </div>
    <h3 class="display-4  m-3">Visite des habitats avec un guide</h3>
    <h5>(gratuit)</h5>
    <p class="lead m-3">Le guide est votre compagnon idéal pour explorer les merveilles de notre royaume animal.</p>
    <div class="action-image-buttons" data-show="admin">
      <button type="button" class="btn btn-outline-light" data-bs-toggle="modal"
        data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
      <button type="button" class="btn btn-outline-light" data-bs-toggle="modal"
        data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></button>
    </div>
    <img class="rounded w-100" src="${urlImage2}" alt="Guide"/>
    <p class="text-center">${titre2}</p>
  </div>
  </div>`;
}

function getImage3(titre3, urlImage3) {
  titre3 = sanitizeHtml(titre3);
  urlImage3 = sanitizeHtml(urlImage3);
  return ` <div class="col">
       <div class="jumbotron rounded bg-primary text-center text-justify text-white">
    <div class="action-image-buttons" data-show="admin">
      <button class="button" class="btn btn-outline-light" data-bs-toggle="modal"
        data-bs-target="#EditionTextModal"><i class="bi bi-pencil-square"></i></button>
    </div>
    <h3 class="display-4 m-3">Visite du zoo en petit train</h3>
    <p class="lead m-3">Imaginez une visite pittoresque du Zoo Enchanté à bord d’un petit train qui serpente à
      travers les divers habitats naturels, offrant une expérience immersive et éducative pour tous les âges. </p>
    <div class="action-image-buttons" data-show="admin">
      <button type="button" class="btn btn-outline-light" data-bs-toggle="modal"
        data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
      <button type="button" class="btn btn-outline-light" data-bs-toggle="modal"
        data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></button>
    </div>
    <img class="rounded w-100" src="${urlImage3}" alt="Petit train"/>
    <p class="text-center">${titre3}</p>
  </div>
  </div>`;
}

