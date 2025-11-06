async function loadItems() {
  try {
    const response = await fetch('items.json');
    const items = await response.json();
    const container = document.getElementById('itemList');

    items.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'item';
      itemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div>
          <div class="item-name">${item.name}</div>
          <div class="item-price">₹${item.price}</div>
        </div>
      `;
      container.appendChild(itemDiv);
    });
  } catch (error) {
    console.error('Error loading items:', error);
  }
}

loadItems();
