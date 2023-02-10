// TODO: Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.












// ************************************************************************************** 
// ******************************** VERSIONE SENZA VueJS ******************************** 
// ************************************************************************************** 

// const images = [
//     {
//         image: 'img/01.webp',
//         title: 'Marvel\'s Spiderman Miles Morale',
//         text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
//     }, {
//         image: 'img/02.webp',
//         title: 'Ratchet & Clank: Rift Apart',
//         text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
//     }, {
//         image: 'img/03.webp',
//         title: 'Fortnite',
//         text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
//     }, {
//         image: 'img/04.webp',
//         title: 'Stray',
//         text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
//     }, {
//         image: 'img/05.webp',
//         title: "Marvel's Avengers",
//         text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
//     }
// ];

// console.log(images);



// let my_images = document.getElementById("my-images");
// let my_thumbnails = document.querySelector(".preview-img");

// let image_active = 0;

// images.forEach((image, index) => {

//     my_images.innerHTML += `
//      <div class="banner position-relative ${(index == image_active) ? "active" : " "}">
//         <img src="./${image.image}" alt="img">
                    
//         <div class="position-absolute text-light text-end bottom-0 end-0 m-5">
//             <h2 id="title">${image.title}</h2>
//             <p class="h4" id="text">${image.text}</p>
//         </div>
//     </div>`;

//     my_thumbnails.innerHTML += `
//     <img src="./${image.image}" alt="img" class="thumbnail" data-index="${index}">
    
//     `

// })


// // cambio immagine banner al click della corrispondente immagine thumbnail
// const change_image = (attiva) => {
//     let active = document.querySelector(".active");
//     let all = document.querySelectorAll(".banner");

//     active.classList.remove("active");
//     all[attiva].classList.add("active");
// }


// let thumbnail = document.querySelectorAll(".thumbnail");
// thumbnail.forEach((thumbnail, index) => {
//     thumbnail.addEventListener("click", function () {
//         let thumbnail_selected = this.getAttribute("data-index");
//         change_image(thumbnail_selected);
//     })
// })

//     // forward
// const click_fw = () => {
//     image_active++;

//     if (image_active >= images.length) {
//         image_active = 0;
//     }

//     change_image(image_active);
// }

//     let next_img = document.querySelector(".fa-chevron-down");
//     next_img.addEventListener("click", click_fw);


//     // backward
// const click_bw = () => {
//     image_active--;

//     if (image_active < 0) {
//         image_active = images.length -1;
//     }

//     change_image(image_active);
// }

//     let prev_img = document.querySelector(".fa-chevron-up");
//     prev_img.addEventListener("click", click_bw);