fetch('items.json')
  .then(response => response.json())
  .then(items => {
    const container = document.getElementById('items-container');
    items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'item';

      const sizesHTML = item.sizes.map(s => 
        `<li>${s.size} — ₹${s.price}</li>`
      ).join('');

      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <ul>${sizesHTML}</ul>
      `;
      container.appendChild(div);
    });
  });
