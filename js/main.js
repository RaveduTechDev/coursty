// para variabel 
const articles      = document.querySelectorAll("article")
const navLinks      = document.querySelectorAll("header nav a")
const navigation    = document.getElementById("navigation")
const modalCourse   = document.getElementById("courseModal")
const closeModal    = document.getElementById("closeBtn")

const testiSlide    = document.querySelector(".testi-slide")
const card         = document.querySelectorAll(".testimony-card")
const sebelumBtn    = document.getElementById("sebelumnya")
const lanjutBtn     = document.getElementById("selanjutnya")
let slideTranslate  = 0 

// aksi scroll
window.onscroll = () => {
    // scroll style navbar menambahkan kelas baru (scrolling)
    navigation.classList.toggle("scrolling", window.scrollY > 0)
  
    // melakukan link active ketika discroll 
    articles.forEach(article => {
        const top = window.scrollY
        const offset = article.offsetTop - 15 
        const height = article.offsetHeight
        const idArticle = article.getAttribute("id") 
 
        if (top > offset && top < offset + height) {
         navLinks.forEach(link => {
             link.classList.remove("active")
             this.document.querySelector("nav a[href*="+ idArticle + "]").classList.add("active")
         })
        }
     });
}

// fungsi menampilkan modal
const tampilkanModal = () => {
    modalCourse.classList.add("activePopup")
}
// fungsi close modal
closeModal.addEventListener("click", () => {
    modalCourse.classList.remove("activePopup")
})

// fungsi close modal pada bagian luar modal
window.onclick = (event) => {
    if (event.target == modalCourse) {
        modalCourse.classList.remove("activePopup")
     
    }
}

// fungsi posisi slider
const posisiSlider = () => {
    testiSlide.style.transform = `translateX(-${slideTranslate * 20}%)`
}

// otomatis slider
setInterval(() => {
    slideTranslate++;
    
    if (slideTranslate >= card.length) {
        slideTranslate = 0;
    }
    posisiSlider()
}, 10000);

// klick kanan slider
lanjutBtn.onclick = () => {
    slideTranslate++;
    
    if (slideTranslate >= card.length) {
        slideTranslate = 0;
    }
    posisiSlider()
}
// klick kiri slider
sebelumBtn.onclick = () => {
    slideTranslate--
    
    if (slideTranslate < 0) {
        slideTranslate = card.length - 1
    }
    posisiSlider()
}
posisiSlider()


const menuHumbergur = document.querySelector(".nav-responsive input")
const navSlider     = document.querySelector("nav ul")

console.log(navSlider)

menuHumbergur.onclick = () => {
    navSlider.classList.toggle('slide');
}