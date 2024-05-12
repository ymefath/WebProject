// main.js

document.addEventListener("DOMContentLoaded", function() {
    fetch('json/products.json')
        .then(response => response.json())
        .then(products => {
            const productContainer = document.querySelector('.row');

            products.forEach(product => {
                const productCard = `
                    <div class="col">
                        <div class="card h-100">
                            <img src="${product.image}" class="card-img-top" alt="Product Image">
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text fs-5"><strong>Price:</strong> ${product.price}</p>
                                <div class="d-flex justify-content-end">
                                    <a href="pro.htm?name=${encodeURIComponent(product.name)}
                                    &price=${encodeURIComponent(product.price)}&description=${encodeURIComponent(product.description)}
                                    &image=${encodeURIComponent(product.image)}" class="btn btn-warning align-self-end">View Product</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                productContainer.innerHTML += productCard;
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});

