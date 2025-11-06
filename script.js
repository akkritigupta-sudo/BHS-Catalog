fetch('items.json')
  .then(response => response.json())
  .then(items => {
    const container = document.getElementById('items-container');
    items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'item';

      let tableRows = "";
      item.variants.forEach(v => {
        const size = v.size || v.type || v.designs ? (v.size || v.type || `${v.designs} designs`) : "-";
        const price = v.price ? `₹${v.price}` : "-";
        const qty = v.quantity ? `${v.quantity} pcs` : "-";
        tableRows += `<tr><td>${size}</td><td>${price}</td><td>${qty}</td></tr>`;
      });

      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <table>
          <thead><tr><th>Size/Type</th><th>Price</th><th>Quantity</th></tr></thead>
          <tbody>${tableRows}</tbody>
        </table>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => {
    console.error("Error loading items:", err);
    document.getElementById('items-container').innerHTML = `<p style="color:red;">Failed to load catalog data.</p>`;
  });
