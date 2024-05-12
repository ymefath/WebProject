fetch('Json/products.json')
    .then(response => response.json())
    .then(products => {
        const container = document.getElementById('product-container');

        // Iterate over each product and generate HTML for product cards
        products.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card', 'col-md-2' , 'my-2'); 
            card.innerHTML = `
                <div class="card-container d-flex flex-row flex-wrap gap-1">
                    <div class="card" style="width: 12rem;">
                        <a href="pro.htm" style="text-decoration:none;">
                            <img src="${product.image}" class="card-img-top" alt="...">
                            <div class="card-body d-inline-block">
                                <p class="card-text p-0 fs-6 m-0">${product.name}</p>
                                <p class="card-text p-0 fw-bolder m-0 fs-4">${product.price}</p>
                            </div>
                        </a>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching products:', error);
    });