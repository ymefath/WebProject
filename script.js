// Fetch JSON data from products.json file
fetch('products.json')
    .then(response => response.json())
    .then(products => {
        const container = document.getElementById('product-container');

        // Iterate over each product and generate HTML for product cards
        products.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card','col-md-4', 'my-3');
            card.innerHTML = `
            <div class="card-container d-inline-flex flex-row flex-wrap justify-content-center gap-3 ">
<div  class="card" style="width: 18rem;">
        <a href="product.htm" style="text-decoration:none;">
        <img src="${product.image}" class="card-img-top" alt="...">
        <div class="card-body d-inline-flex gap-3">
          <p  class="card-text p-0 fs-5">${product.name}</p>
          <p  class="card-text p-0 fw-bolder fs-1">${product.price}</p>
        </div>
</div>
            `;
            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching products:', error);
    });
