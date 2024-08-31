var quantity = 1;
var varValue = document.getElementById("var-value");

document.getElementById("btn-minus").addEventListener("click", function () {
    if (quantity > 1) {
        quantity--;
        varValue.innerText = quantity;
    }
});

document.getElementById("btn-plus").addEventListener("click", function () {
    quantity++;
    varValue.innerText = quantity;
});

document.querySelectorAll('.product-overlay a').forEach(function (iconLink) {
    iconLink.addEventListener('click', function (event) {
        event.preventDefault();
        this.querySelector('i').classList.toggle('fas');
        this.querySelector('i').classList.toggle('far');
    });
});

// Function to create carousel items
function createCarouselItem(imageSrc, altText) {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col-4');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const link = document.createElement('a');
    link.href = '#';

    const img = document.createElement('img');
    img.classList.add('card-img', 'img-fluid');
    img.src = imageSrc;
    img.alt = altText;

    link.appendChild(img);
    imageContainer.appendChild(link);
    colDiv.appendChild(imageContainer);

    return colDiv;
}

const images = [
    { src: 'assets/images/product-12.png', alt: 'Product Image 1' },
    { src: 'assets/images/product-12.png', alt: 'Product Image 2' },
    { src: 'assets/images/product-12.png', alt: 'Product Image 3' },
    { src: 'assets/images/product-12.png', alt: 'Product Image 4' },
    { src: 'assets/images/product-12.png', alt: 'Product Image 5' },
    { src: 'assets/images/product-12.png', alt: 'Product Image 6' },
    { src: 'assets/images/product-12.png', alt: 'Product Image 7' },
    { src: 'assets/images/product-12.png', alt: 'Product Image 8' },
    { src: 'assets/images/product-12.png', alt: 'Product Image 9' }
];

const carouselInner = document.querySelector('.carousel-inner')

for (let i = 0; i < images.length; i += 3) {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (i === 0) {
        carouselItem.classList.add('active');
    }

    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    for (let j = i; j < i + 3 && j < images.length; j++) {
        const colDiv = createCarouselItem(images[j].src, images[j].alt);
        rowDiv.appendChild(colDiv);
    }

    carouselItem.appendChild(rowDiv);
    carouselInner.appendChild(carouselItem);
}

// Quantity
document.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.getElementById('product-quanity');
    const minusButton = document.getElementById('btn-minus');
    const plusButton = document.getElementById('btn-plus');
    const varValue = document.getElementById('var-value');

    minusButton.addEventListener("click", function () {
        let value = parseInt(quantityInput.value);
        if (value > 1) {
            value--;
            quantityInput.value = value;
            varValue.textContent = value;
        }
    });

    plusButton.addEventListener("click", function () {
        let value = parseInt(quantityInput.value);
        value++;
        quantityInput.value = value;
        varValue.textContent = value;
    });
});

// Navigate to cart.html when click "Buy"
// document.addEventListener('DOMContentLoaded', function () {
//     const buyButton = document.getElementById('buy-button');
//     buyButton.addEventListener('click', function (event) {
//         event.preventDefault();
//         window.location.href = 'cart.html';
//     });
// });

// Page wrapper
const products = [
    {
        title: 'Basic Eyeglasses',
        image: 'assets/images/category_img.jpg',
        color: 'Black / Gray',
        price: {
            amount: 20.45,
            currency: '$'
        },
        stars: [true, true, true, true, false]
    },
];

const container = document.querySelector('.row');

for (let i = 0; i < 4; i++) {
    const product = products[0];

    const colDiv = document.createElement('div');
    colDiv.classList.add('col-md-3');
    colDiv.style.marginTop = '20px';

    const productDiv = document.createElement('div');
    productDiv.className = "p-2 pb-3";
    productDiv.style.background = 'white';

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('product-wap', 'card', 'rounded-0');

    const img = document.createElement('img');
    img.classList.add('card-img', 'rounded-0', 'img-fluid');
    img.src = product.image;

    const overlayDiv = document.createElement('div');
    overlayDiv.classList.add('card-img-overlay', 'rounded-0', 'product-overlay', 'd-flex', 'align-items-center', 'justify-content-center');

    const ul = document.createElement('ul');
    ul.classList.add('list-unstyled', 'd-flex');

    const heartLi = document.createElement('li');
    heartLi.classList.add('icon-item');
    const heartLink = document.createElement('a');
    heartLink.classList.add('btn', 'btn-success', 'text-white', 'heart-icon');
    heartLink.href = product.heartLink;
    const heartIcon = document.createElement('i');
    heartIcon.classList.add('far', 'fa-heart');
    heartLink.appendChild(heartIcon);
    heartLink.addEventListener('click', function (event) {
        event.preventDefault();
        if (heartIcon.classList.contains('far')) {
            heartIcon.classList.remove('far');
            heartIcon.classList.add('fas');
        } else {
            heartIcon.classList.remove('fas');
            heartIcon.classList.add('far');
        }
    });

    heartLi.appendChild(heartLink);
    ul.appendChild(heartLi);

    const eyeLi = document.createElement('li');
    eyeLi.classList.add('icon-item');
    const eyeLink = document.createElement('a');
    eyeLink.classList.add('btn', 'btn-success', 'text-white');
    eyeLink.href = '/product-details';
    const eyeIcon = document.createElement('i');
    eyeIcon.classList.add('far', 'fa-eye');
    eyeLink.appendChild(eyeIcon);
    eyeLi.appendChild(eyeLink);
    ul.appendChild(eyeLi);

    const cartLi = document.createElement('li');
    cartLi.classList.add('icon-item');
    const cartLink = document.createElement('a');
    cartLink.classList.add('btn', 'btn-success', 'text-white');
    cartLink.href = product.cartLink;
    const cartIcon = document.createElement('i');
    cartIcon.classList.add('fas', 'fa-cart-plus');
    cartLink.appendChild(cartIcon);
    cartLi.appendChild(cartLink);
    ul.appendChild(cartLi);

    overlayDiv.appendChild(ul);
    cardDiv.appendChild(img);
    cardDiv.appendChild(overlayDiv);

    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');

    const productTitleLink = document.createElement('a');
    productTitleLink.classList.add('h3', 'text-decoration-none');
    productTitleLink.href = product.eyeLink;
    productTitleLink.textContent = product.title;
    cardBodyDiv.appendChild(productTitleLink);

    const colorList = document.createElement('ul');
    colorList.classList.add('w-100', 'list-unstyled', 'd-flex', 'justify-content-between', 'mb-0');
    const colorLi = document.createElement('li');
    colorLi.style.color = 'gray';
    colorLi.textContent = product.color;
    colorList.appendChild(colorLi);
    cardBodyDiv.appendChild(colorList);

    const starList = document.createElement('ul');
    starList.classList.add('list-unstyled', 'd-flex', 'justify-content-center', 'mb-1');
    const starLi = document.createElement('li');
    product.stars.forEach((star, index) => {
        const starIcon = document.createElement('i');
        starIcon.classList.add('fa', 'fa-star', 'text-warning', star ? 'fa' : 'far');
        starLi.appendChild(starIcon);
    });
    starList.appendChild(starLi);
    cardBodyDiv.appendChild(starList);

    const priceParagraph = document.createElement('p');
    priceParagraph.classList.add('text-center', 'mb-0');
    priceParagraph.style.color = 'red';
    priceParagraph.textContent = product.price.currency + product.price.amount;
    cardBodyDiv.appendChild(priceParagraph);

    productDiv.appendChild(cardDiv);
    productDiv.appendChild(cardBodyDiv);
    colDiv.appendChild(productDiv);
    container.appendChild(colDiv);
}
