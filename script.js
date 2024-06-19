document.addEventListener('DOMContentLoaded', () => {
    // Registration Form Validation
    const registerForm = document.querySelector('#registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.querySelector('#username').value;
            const password = document.querySelector('#password').value;
            if (username && password) {
                alert('Registration successful');
            } else {
                alert('Please fill in all fields');
            }
        });
    }

    // Login Form Validation
    const loginForm = document.querySelector('#loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.querySelector('#loginUsername').value;
            const password = document.querySelector('#loginPassword').value;
            if (username && password) {
                alert('Login successful');
            } else {
                alert('Please fill in all fields');
            }
        });
    }

    // Simulate User Profile
    const profileUsername = document.querySelector('#profileUsername');
    if (profileUsername) {
        profileUsername.textContent = 'John Doe';
    }

    // Product Management
    const productForm = document.querySelector('#productForm');
    const productList = document.querySelector('#productList');
    if (productForm && productList) {
        productForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const productName = document.querySelector('#productName').value;
            const productDescription = document.querySelector('#productDescription').value;
            const productPrice = document.querySelector('#productPrice').value;
            const productImage = document.querySelector('#productImage').files[0];
            if (productName && productDescription && productPrice && productImage) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <img src="${e.target.result}" alt="Product Image">
                        <span>${productName} - $${productPrice}</span>
                    `;
                    productList.appendChild(li);
                };
                reader.readAsDataURL(productImage);
            } else {
                alert('Please fill in all fields');
            }
        });
    }

    // Load Products on Products Page
    const productListPage = document.querySelector('#productListPage');
    if (productListPage) {
        const products = [
            { name: 'Apple', description: 'Fresh Apple', price: '1.00', image: 'apple.jpg' },
            { name: 'Banana', description: 'Fresh Banana', price: '0.50', image: 'banana.jpg' },
            { name: 'Carrot', description: 'Fresh Carrot', price: '0.75', image: 'carrot.jpg' }
        ];
        products.forEach(product => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <span>${product.name} - $${product.price}</span>
            `;
            productListPage.appendChild(li);
        });
    }

    // Product Details
    const productNamePage = document.querySelector('#productNamePage');
    const productImagePage = document.querySelector('#productImagePage');
    const productDescriptionPage = document.querySelector('#productDescriptionPage');
    const productPricePage = document.querySelector('#productPricePage');
    if (productNamePage && productImagePage && productDescriptionPage && productPricePage) {
        const product = {
            name: 'Apple',
            description: 'Fresh Apple',
            price: '1.00',
            image: 'apple.jpg'
        };
        productNamePage.textContent = product.name;
        productImagePage.src = product.image;
        productDescriptionPage.textContent = product.description;
        productPricePage.textContent = `$${product.price}`;
    }

    // Add to Cart Button
    const addToCartButton = document.querySelector('#addToCartButton');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', () => {
            alert('Product added to cart');
        });
    }
});




/*------------------REGISTRATION-------------------*/

// Get the navigation menu and its links
const nav = document.querySelector('nav');
const navLinks = nav.querySelectorAll('a');

// Add an event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Toggle the active class on the clicked link
    link.classList.toggle('active');
  });
});

// Add a media query to toggle the navigation menu on small screens
const mediaQuery = window.matchMedia('(max-width: 768px)');

mediaQuery.addEventListener('change', event => {
  if (event.matches) {
    // Toggle the navigation menu on small screens
    nav.classList.toggle('active');
  }
});

// Add an event listener to the document to close the navigation menu when clicking outside
document.addEventListener('click', event => {
  if (event.target !== nav && event.target !== navLinks) {
    nav.classList.remove('active');
  }
});