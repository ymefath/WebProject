 // Get the product information from the URL parameters
 const urlParams = new URLSearchParams(window.location.search);
 const productName = urlParams.get('name');
 const productDescription = urlParams.get('description');
 const productPrice = urlParams.get('price');
 const productImage = urlParams.get('image');

 // Set the product details on the page
 document.getElementById('productName').textContent = productName || 'Product Name';
 document.getElementById('productDescription').textContent = productDescription || 'Product Description';
 document.getElementById('productPrice').textContent = `Price: ${productPrice || 'N/A'}`;
 document.getElementById('productImage').src = productImage || 'images/product1.png';
 document.getElementById('productImage1').src = productImage || 'images/product1.png';
 document.getElementById('productImage2').src = productImage || 'images/product1.png';