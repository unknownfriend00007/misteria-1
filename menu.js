// Menu page JavaScript
// Handles menu loading, search, filtering, and quick order modal

let menuData = [];
let currentCategory = 'all';
let searchQuery = '';

// Load menu data when page loads
document.addEventListener('DOMContentLoaded', async () => {
    await loadMenu();
    setupSearchAndFilters();
    setupModal();
});

// Load menu from JSON file
async function loadMenu() {
    try {
        const response = await fetch('menu.json');
        const data = await response.json();
        menuData = data.items;
        displayMenu(menuData);
    } catch (error) {
        console.error('Error loading menu:', error);
        showError('Failed to load menu. Please refresh the page.');
    }
}

// Display menu items
function displayMenu(items) {
    const menuGrid = document.getElementById('menuGrid');
    const noResults = document.getElementById('noResults');
    
    if (!menuGrid) return;
    
    if (items.length === 0) {
        menuGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    menuGrid.innerHTML = items.map(item => `
        <div class="menu-card" data-category="${item.category}">
            <div class="menu-card-image-wrapper">
                <img src="${item.image}" alt="${item.name}" class="menu-card-image" loading="lazy">
                <span class="menu-card-badge">${item.category}</span>
            </div>
            <div class="menu-card-content">
                <div class="menu-card-header">
                    <span class="veg-indicator ${item.veg ? 'veg' : 'non-veg'}" title="${item.veg ? 'Vegetarian' : 'Non-vegetarian'}"></span>
                    <h3 class="menu-card-title">${item.name}</h3>
                </div>
                <p class="menu-card-description">${item.description}</p>
                <div class="menu-card-footer">
                    <span class="menu-card-price">₹${item.price}</span>
                    <button class="btn btn-secondary btn-small" onclick="openOrderModal('${item.id}')">Order This</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Setup search and filter functionality
function setupSearchAndFilters() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilters = document.querySelectorAll('.category-pill');
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            filterMenu();
        });
    }
    
    // Category filter functionality
    categoryFilters.forEach(pill => {
        pill.addEventListener('click', () => {
            // Remove active class from all pills
            categoryFilters.forEach(p => p.classList.remove('active'));
            // Add active class to clicked pill
            pill.classList.add('active');
            // Update current category
            currentCategory = pill.dataset.category;
            // Filter menu
            filterMenu();
        });
    });
}

// Filter menu based on search and category
function filterMenu() {
    let filteredItems = menuData;
    
    // Filter by category
    if (currentCategory !== 'all') {
        filteredItems = filteredItems.filter(item => item.category === currentCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
        filteredItems = filteredItems.filter(item => {
            const nameMatch = item.name.toLowerCase().includes(searchQuery);
            const descriptionMatch = item.description.toLowerCase().includes(searchQuery);
            const categoryMatch = item.category.toLowerCase().includes(searchQuery);
            return nameMatch || descriptionMatch || categoryMatch;
        });
    }
    
    displayMenu(filteredItems);
}

// Open order modal
function openOrderModal(itemId) {
    const item = menuData.find(i => i.id === itemId);
    if (!item) return;
    
    const modal = document.getElementById('orderModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="modal-item">
            <img src="${item.image}" alt="${item.name}" class="modal-item-image">
            <div class="modal-item-info">
                <div class="modal-item-header">
                    <span class="veg-indicator ${item.veg ? 'veg' : 'non-veg'}"></span>
                    <h3 class="modal-item-title">${item.name}</h3>
                </div>
                <p class="modal-item-description">${item.description}</p>
                <p class="modal-item-price">₹${item.price}</p>
            </div>
        </div>
        
        <div class="modal-form">
            <div class="form-group">
                <label for="modalQuantity" class="form-label">Quantity</label>
                <select id="modalQuantity" class="form-input">
                    ${Array.from({length: 10}, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('')}
                </select>
            </div>
            
            <div class="form-group">
                <label for="modalInstructions" class="form-label">Special instructions?</label>
                <textarea id="modalInstructions" class="form-textarea" rows="3" placeholder="Any special requests?"></textarea>
            </div>
            
            <button class="btn btn-primary btn-full" onclick="proceedToOrder('${item.id}')">
                Continue to Order Form
            </button>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Setup modal close functionality
function setupModal() {
    const modal = document.getElementById('orderModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Proceed to order form with prefilled data
function proceedToOrder(itemId) {
    const item = menuData.find(i => i.id === itemId);
    if (!item) return;
    
    const quantity = document.getElementById('modalQuantity').value;
    const instructions = document.getElementById('modalInstructions').value;
    
    // Calculate total
    const total = item.price * parseInt(quantity);
    
    // Create order string
    let orderString = `${item.name} x${quantity} (₹${total})`;
    if (instructions.trim()) {
        orderString += `\nSpecial: ${instructions.trim()}`;
    }
    
    // Redirect to contact page with order data
    const params = new URLSearchParams({
        order: orderString
    });
    
    window.location.href = `contact.html?${params.toString()}`;
}

// Show error message
function showError(message) {
    const menuGrid = document.getElementById('menuGrid');
    if (menuGrid) {
        menuGrid.innerHTML = `
            <div class="error-message-box">
                <p>${message}</p>
            </div>
        `;
    }
}