const userTab1 = document.querySelector(".tab1");
const userTab2 = document.querySelector(".tab2");
const userTab3 = document.querySelector(".tab3");

const mainImage1 = document.querySelector("#image1");
const mainImage2 = document.querySelector("#image2");
const mainImage3 = document.querySelector("#image3");

userTab1.addEventListener('click', () => {
    switchTab(userTab1, mainImage1);
})

userTab2.addEventListener('click', () => {
    switchTab(userTab2, mainImage2);
})

userTab3.addEventListener('click', () => {
    switchTab(userTab3, mainImage3);
})

let oldTab = userTab1;
oldTab.classList.add("current-tab");
mainImage2.classList.add('hiddenImage');
mainImage3.classList.add('hiddenImage');

function switchTab(newTab, newImage){
    if(oldTab!=newTab)
    {
        oldTab.classList.remove("current-tab");
        oldTab=newTab;
        oldTab.classList.add("current-tab");
    }
    for (const img of [mainImage1, mainImage2, mainImage3])
    {
        if (img == newImage) {
            img.classList.remove('hiddenImage')
        } else {
            img.classList.add('hiddenImage')
        }
    }
}