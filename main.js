// MENU DESKTOP
const menuEmail = document.querySelector('.nav-email');
const desktopMenu = document.querySelector('.desktop-menu');

//MENU MOBILE
const menuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

//SHOPPING CART
const shoppingIcon = document.querySelector('.nav-shopping-cart')
const asideShopping = document.querySelector('.my-order-container')
//RENDER CARTS
const cardsContainer =document.querySelector('.cards-container')
//INFO PRODUCT
const asideInfoP = document.querySelector('.product-detail')
const asideInfoPclose =document.querySelector('.product-detail-close')
//MENU DESKTOP LOGIC
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    asideShopping.classList.add('inactive-aside');
    asideInfoP.classList.add('inactive-aside')
}
//MENU MOBILE LOGIC
menuIcon.addEventListener('click', toggleMobilepMenu)

function toggleMobilepMenu(){
    asideShopping.classList.add('inactive-aside');
    asideInfoP.classList.add('inactive-aside')
    mobileMenu.classList.toggle('slideMenuB')
}
//SHOPPING CART LOGIC
shoppingIcon.addEventListener('click', toggleShoppingMenu)

function toggleShoppingMenu(){
    asideShopping.classList.toggle('inactive-aside')
    asideInfoP.classList.add('inactive-aside')
    mobileMenu.classList.add('slideMenuB')
    desktopMenu.classList.add('inactive');
}

const productList = [];
productList.push(
{
    name: 'TBH&C',
    price: 120,
    image: 'https://www.dominomusic.com/res/oVEN/1200_1200/AM%20Silver%20LP.jpg',
},
{
    name: 'The new abnormal',
    price: 150,
    image: 'https://cdn.shopify.com/s/files/1/0105/4542/products/strokes-newabnormal-blackvinyl-1_1000x1000.jpg',
},
{
    name: 'OK Computer',
    price: 130,
    image: 'https://m.media-amazon.com/images/I/41-s9tCmoSL.jpg',
},
{
    name: "Everything You've Come To Expect",
    price: 150,
    image: 'https://cdn.shopify.com/s/files/1/0105/4542/products/lastshadowpuppets-everything_1000x1000.jpg',
},
{
    name: 'Submarine',
    price: 150,
    image: 'https://senseirecords.net/wp-content/uploads/2021/07/submarine-submarine-510x510.jpg',
},
{
    name: 'Dynamo',
    price: 110,
    image: 'https://senseirecords.net/wp-content/uploads/2017/04/disco500px_sodastereo_dynamo.jpg',
},
{
    name: 'Blue Banisters',
    price: 150,
    image: 'https://cdn.dc5.ro/img-prod/1351240835-0.jpeg',
},
{
    name: 'Happier Than Ever',
    price: 150,
    image: 'https://cdn.shopify.com/s/files/1/0105/4542/products/billieeilish-happierthanever-blackvinyl-1_1000x1000.jpg',
}
)
function renderProducts(array) {
    for (product of array){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.classList.add('product-img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
        
        const productShop = document.createElement('div');
        productShop.classList.add('product-shop');
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfo.append(productPrice, productName)
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart)
    
        productShop.append(productInfo, productInfoFigure)
    
        productCard.append(productImg, productShop)
    
        cardsContainer.appendChild(productCard)
    }
}
renderProducts(productList)
// INFO PRODUCT LOGIC
function openProductDetailAside() {
    asideInfoP.classList.remove('inactive-aside')
    asideShopping.classList.add('inactive-aside')
    mobileMenu.classList.add('slideMenuB')
    desktopMenu.classList.add('inactive');
}
asideInfoPclose.addEventListener('click', closeProductInfo)
function closeProductInfo(){
    asideInfoP.classList.add('inactive-aside')
}