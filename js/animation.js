const loader = document.querySelector(".spinner");
let loaded = false;
window.addEventListener("load", () => {
  loader.style.display = "none";
  document.body.style.overflow = "unset";
  document.querySelector(".fade").classList.add("fade-out");
  loaded = !loaded;
});

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if(loaded){
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('animation-visible');
//             } else {
//                 entry.target.classList.remove('animation-visible');
//             }
//         }
//     });
// })
//
// const hiddenElements = document.querySelectorAll('.animation-hidden')
// hiddenElements.forEach(element => {
//     console.log(observer)
//     observer.observe(element)
// })
