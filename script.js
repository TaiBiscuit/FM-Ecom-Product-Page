const thumbBtns = document.querySelectorAll('.thumb-btn');
const thumbImg = document.querySelectorAll('.thumb-img');
const shoeImg = document.getElementsByClassName('shoe-img');
const currentShoe = document.getElementById('current-shoe-img');
const minusBtn = document.getElementById('minus-btn');
const plusBtn = document.getElementById('more-btn');
const addToCartBtn = document.getElementById('add-btn');
const amountTxt = document.getElementById('amount');
const cart = document.getElementById('cart-zone');
const cartBtn = document.getElementById('cart-icon');
const product = document.getElementById('product-cart-zone');
const productPrice = document.getElementById('product-price');
const delBtn = document.getElementById('delete-btn');

const imagectonary= {1:'./images/image-product-1.jpg', 2:'./images/image-product-2.jpg', 3:'./images/image-product-3.jpg', 4:'./images/image-product-4.jpg'};



thumbBtns.forEach(btn => {

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const newImgId = e.target.id ;
        let selectedThum = e.target;
        currentShoe.innerHTML =
        `
        <img src=${imagectonary[newImgId]} alt="" class="shoe-img" id="${newImgId}">
        `
        checkImg(selectedThum)
    })   
});

minusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(initialCounter != 0) {
        initialCounter--
        amountTxt.innerText = `${initialCounter}`
    }    
});

plusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    initialCounter++
    amountTxt.innerText = `${initialCounter}`
});

addToCartBtn.addEventListener('click', (e) => {
    const finalCount = initialCounter;
    addToCart(finalCount)
});

delBtn.addEventListener('click', (e) => {
    initialCounter = 0;
    product.classList.add('hide');
    amountTxt.innerText = `${initialCounter}`
});

cartBtn.addEventListener('click', (e) => {
    if(cart.classList.contains('hide')) {
        cart.classList.remove('hide');
    } else {
        cart.classList.add('hide');
    }
})


currentShoe.addEventListener('click', (e) => {
    openModal(e.target)
})






function addToCart (count) {
    if(initialCounter == 0) {
        alert('Please introduce more than 1!')
    } else {
        product.classList.remove('hide');
        productPrice.innerHTML =
        `
        $125.00 x ${count}
        `
    }
}

function checkImg(selectedThum) {
    for(let i = 0; i < thumbImg.length; i++) {
        const t = thumbImg[i].id.charAt(thumbImg[i].id.length-1)

        if(t == shoeImg[0].id){
            selectedThum.classList.add('over');
            selectedThum.classList.add('btn-borders');
        } else {
            thumbImg[i].parentElement.classList.remove('over');
            thumbImg[i].parentElement.classList.remove('btn-borders');
        }
    }
}

function openModal(currentShoeImg) {
    console.log(currentShoeImg)
}