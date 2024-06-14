// Sample product data
const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is the description of Product 1',
    price: 32.99,
    image: '/product/product-01.png'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is the description of Product 2',
    price: 24.99,
    image: '/product/product-02.png'
  },
  {
    id: 1,
    name: 'Product 3',
    description: 'This is the description of Product 1',
    price: 19.99,
    image: 'product/product-03.png'
  },
  {
    id: 2,
    name: 'Product 4',
    description: 'This is the description of Product 2',
    price: 24.99,
    image: 'product/product-04.png'
  },
  {
    id: 1,
    name: 'Product 3',
    description: 'This is the description of Product 1',
    price: 19.99,
    image: '/product/product-03.png'
  },
  {
    id: 2,
    name: 'Product 1',
    description: 'This is the description of Product 2',
    price: 88.99,
    image: '/assets/imgs/product-01.png'
  },
  {
    id: 1,
    name: 'Product 4',
    description: 'This is the description of Product 1',
    price: 19.99,
    image: 'product/product-04.png'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is the description of Product 2',
    price: 24.99,
    image: 'product/product-02.png'
  }
  
 
  // Add more products as needed
];

// Function to render products
function renderProducts() {
  const productGrid = document.getElementById('productGrid');
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productCardContent = document.createElement('div');
    productCardContent.classList.add('product-card-content');

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;
    productImage.classList.add('product-image');

    const productName = document.createElement('h3');
    productName.classList.add('product-name');
    productName.textContent = product.name;

    const productDescription = document.createElement('p');
    productDescription.classList.add('product-description');
    productDescription.textContent = product.description;

    const productPrice = document.createElement('p');
    productPrice.classList.add('product-price');
    productPrice.textContent = `$${product.price}`;

    const productActions = document.createElement('div');
    productActions.classList.add('product-actions');

    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('add-to-cart');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.addEventListener('click', () => {
      window.location.href = `product-detail.html?id=${product.id}`;
    });

    productActions.appendChild(addToCartButton);
    productCardContent.appendChild(productImage);
    productCardContent.appendChild(productName);
    productCardContent.appendChild(productDescription);
    productCardContent.appendChild(productPrice);
    productCardContent.appendChild(productActions);
    productCard.appendChild(productCardContent);
    productGrid.appendChild(productCard);
  });
}

// Function to render the product detail
function renderProductDetail() {
  const productDetailContainer = document.getElementById('productDetail');

  // Get the product ID from the URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  // Fetch the product data based on the product ID
  const product = products.find(p => p.id === parseInt(productId));

  if (product) {
    const productDetail = document.createElement('div');
    productDetail.classList.add('product-detail');

    const productImage = document.createElement('div');
    productImage.classList.add('product-image');
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    productImage.appendChild(img);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productName = document.createElement('h2');
    productName.textContent = product.name;
    productInfo.appendChild(productName);

    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;
    productInfo.appendChild(productDescription);

    const productPrice = document.createElement('p');
    productPrice.classList.add('price');
    productPrice.textContent = `$${product.price}`;
    productInfo.appendChild(productPrice);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('add-to-cart');
    addToCartButton.textContent = 'Add to Cart';
    buttonContainer.appendChild(addToCartButton);

    const backToShopButton = document.createElement('button');
    backToShopButton.classList.add('back-to-shop');
    backToShopButton.textContent = 'Back to Shop';
    backToShopButton.addEventListener('click', () => {
      window.location.href = 'shop.html';
    });
    buttonContainer.appendChild(backToShopButton);

    productInfo.appendChild(buttonContainer);

    productDetail.appendChild(productImage);
    productDetail.appendChild(productInfo);
    productDetailContainer.appendChild(productDetail);
  } else {
    // Handle the case when the product is not found
    console.error('Product not found');
  }
}

// Call the renderProducts function to display products on page load
if (window.location.pathname === '/shop.html' || window.location.pathname === '/') {
  renderProducts();
}

// Check if the URL has a product ID query parameter
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// If a product ID is present, render the product detail
if (productId) {
  renderProductDetail();
}