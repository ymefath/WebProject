document.addEventListener("DOMContentLoaded", function() {
    fetch('json/products.json')
        .then(response => response.json())
        .then(products => {
            const productContainer = document.querySelector('.row.flex-row.flex-wrap');

            products.forEach(product => {
                const productCard = `
                    <div class="col mb-5">
                        <div class="card h-100">
                            <img src="${product.image}" class="card-img-top" alt="Product Image">
                            <div class="card-body">
                                <h6 class="card-title fs-5">${product.name}</h6>
                                <p class="card-text fs-6"><strong>Price:</strong> ${product.price}</p>
                            </div>
                            <div class="card-footer p-0">
                                <a href="pro.htm?name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}&description=${encodeURIComponent(product.description)}&image=${encodeURIComponent(product.image)}" 
                                class="btn btn-warning w-100" style="border-radius: 0;">View Product</a>
                            </div>
                        </div>
                    </div>
                `;
                productContainer.innerHTML += productCard;
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});
