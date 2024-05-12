
  // Get the product information from the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const productName = urlParams.get('name');
  const productDescription = urlParams.get('description');
  const productPrice = urlParams.get('price');
  const productImage = urlParams.get('image');

  // Set the product details on the page
  document.getElementById('productName').textContent = productName;
  document.getElementById('productDescription').textContent = productDescription;
  document.getElementById('productPrice').textContent = `Price: ${productPrice}`;
  document.getElementById('productImage').src = productImage;
