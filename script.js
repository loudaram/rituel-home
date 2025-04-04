const summaryList = document.getElementById('kit-summary');
const kitInput = document.getElementById('kit-input');

function addToKit(button) {
  const product = button.parentElement;
  const name = product.getAttribute('data-name');
  const freq = product.querySelector('select').value;
  const qty = product.querySelector('input').value;

  if (qty <= 0) return;

  const item = `${name} - ${qty}x (${freq})`;
  const li = document.createElement('li');
  li.textContent = item;
  summaryList.appendChild(li);
}

function submitKit() {
  const items = Array.from(summaryList.children).map(li => li.textContent);
  if (items.length === 0) {
    alert("Ajoutez au moins un produit à votre kit !");
    return;
  }

  kitInput.value = items.join('; ');
  document.forms["kit-form"].submit();
}

// 🔍 Filtres dynamiques
function filterProducts(category) {
  const products = document.querySelectorAll('.product');
  const buttons = document.querySelectorAll('.filters button');

  products.forEach(product => {
    const productCategory = product.getAttribute('data-category');
    if (category === 'tout' || productCategory === category) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });

  buttons.forEach(btn => btn.classList.remove('active'));
  const activeBtn = Array.from(buttons).find(btn => 
    btn.textContent.toLowerCase() === category
  );
  if (activeBtn) activeBtn.classList.add('active');
}
