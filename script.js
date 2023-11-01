const thumbBtns = document.querySelectorAll('.thumb-btn');
const currentShoe = document.getElementById('current-shoe-img');



const imagectonary= {1:'./images/image-product-1.jpg', 2:'./images/image-product-2.jpg', 3:'./images/image-product-3.jpg', 4:'./images/image-product-4.jpg'};
let initialCounter = 0;





thumbBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const newImgId = e.target.id;
        const selectedThum = e.target;
        currentShoe.innerHTML =
        `
        <img src=${imagectonary[newImgId]} alt="" class="shoe-img">
        `
        currentShoe.classList.remove(...currentShoe.classList);
        currentShoe.classList.add(`${newImgId}`);
        if(currentShoe.classList.contains(`${newImgId}`)){
            selectedThum.parentElement.classList.add('btn-borders');
        } else{
            selectedThum.parentElement.classList.remove('btn-borders');
        }
    })   
});