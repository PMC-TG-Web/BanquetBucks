// Data storage
let participants = [];
let items = [];
let currentFilter = 'all';
let currentItemIndex = null;

// Initialize with sample data
function initializeSampleData() {
    // Sample participants
    participants = [
        { name: "John Smith", bucks: 100 },
        { name: "Jane Doe", bucks: 100 },
        { name: "Bob Johnson", bucks: 100 },
        { name: "Alice Williams", bucks: 100 },
        { name: "Charlie Brown", bucks: 100 }
    ];

    // Sample auction items
    items = [
        { name: "Dinner for Two at Luigi's Restaurant", price: 50, status: "available", winner: null },
        { name: "Weekend Getaway Package", price: 150, status: "available", winner: null },
        { name: "Spa Day Gift Certificate", price: 75, status: "available", winner: null },
        { name: "Concert Tickets (2)", price: 100, status: "available", winner: null },
        { name: "Golf Foursome", price: 120, status: "available", winner: null },
        { name: "Wine Tasting Tour", price: 80, status: "available", winner: null },
        { name: "Cooking Class for Two", price: 60, status: "available", winner: null },
        { name: "Professional Photo Session", price: 90, status: "available", winner: null },
        { name: "Theater Season Tickets", price: 200, status: "available", winner: null },
        { name: "Gym Membership (6 months)", price: 85, status: "available", winner: null }
    ];

    saveData();
    renderAll();
}

// Load data from localStorage
function loadData() {
    const savedParticipants = localStorage.getItem('participants');
    const savedItems = localStorage.getItem('items');
    
    if (savedParticipants && savedItems) {
        participants = JSON.parse(savedParticipants);
        items = JSON.parse(savedItems);
        return true;
    }
    return false;
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('participants', JSON.stringify(participants));
    localStorage.setItem('items', JSON.stringify(items));
}

// Add a participant
function addParticipant() {
    const nameInput = document.getElementById('participantName');
    const bucksInput = document.getElementById('initialBucks');
    
    const name = nameInput.value.trim();
    const bucks = parseInt(bucksInput.value) || 100;
    
    if (name === '') {
        alert('Please enter a participant name');
        return;
    }
    
    // Check for duplicate names
    if (participants.some(p => p.name.toLowerCase() === name.toLowerCase())) {
        alert('A participant with this name already exists');
        return;
    }
    
    participants.push({ name, bucks });
    saveData();
    renderParticipants();
    updateStats();
    
    // Clear inputs
    nameInput.value = '';
    bucksInput.value = '100';
}

// Adjust participant bucks
function adjustBucks(index, amount) {
    const customAmount = amount === 'custom' ? 
        parseInt(prompt('Enter amount to add (negative to subtract):')) : 
        amount;
    
    if (customAmount === null || isNaN(customAmount)) return;
    
    participants[index].bucks += customAmount;
    
    if (participants[index].bucks < 0) {
        participants[index].bucks = 0;
    }
    
    saveData();
    renderParticipants();
    updateStats();
}

// Delete participant
function deleteParticipant(index) {
    if (confirm(`Are you sure you want to delete ${participants[index].name}?`)) {
        participants.splice(index, 1);
        saveData();
        renderParticipants();
        updateStats();
    }
}

// Render participants table
function renderParticipants() {
    const tbody = document.getElementById('participantsBody');
    tbody.innerHTML = '';
    
    participants.forEach((participant, index) => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td><strong>${participant.name}</strong></td>
            <td><span class="bucks-amount">💰 ${participant.bucks}</span></td>
            <td>
                <div class="action-buttons">
                    <div class="adjust-controls">
                        <button class="adjust-btn" onclick="adjustBucks(${index}, 10)">+10</button>
                        <button class="adjust-btn" onclick="adjustBucks(${index}, 25)">+25</button>
                        <button class="adjust-btn" onclick="adjustBucks(${index}, 50)">+50</button>
                        <button class="adjust-btn" onclick="adjustBucks(${index}, -10)">-10</button>
                        <button class="adjust-btn" onclick="adjustBucks(${index}, 'custom')">Custom</button>
                    </div>
                    <button class="delete-btn" onclick="deleteParticipant(${index})">Delete</button>
                </div>
            </td>
        `;
    });
}

// Add auction item
function addItem() {
    const nameInput = document.getElementById('itemName');
    const priceInput = document.getElementById('itemPrice');
    
    const name = nameInput.value.trim();
    const price = parseInt(priceInput.value) || 10;
    
    if (name === '') {
        alert('Please enter an item name');
        return;
    }
    
    items.push({ 
        name, 
        price, 
        status: 'available', 
        winner: null 
    });
    
    saveData();
    renderItems();
    updateStats();
    
    // Clear inputs
    nameInput.value = '';
    priceInput.value = '10';
}

// Open auction modal
function openAuctionModal(index) {
    currentItemIndex = index;
    const item = items[index];
    
    document.getElementById('modalItemName').textContent = item.name;
    document.getElementById('modalItemPrice').textContent = item.price;
    
    // Populate winner select with participants who have enough bucks
    const select = document.getElementById('winnerSelect');
    select.innerHTML = '<option value="">-- Select Participant --</option>';
    
    participants.forEach((participant, i) => {
        if (participant.bucks >= item.price) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `${participant.name} (${participant.bucks} bucks)`;
            select.appendChild(option);
        }
    });
    
    if (select.options.length === 1) {
        alert('No participants have enough Banquet Bucks for this item!');
        return;
    }
    
    document.getElementById('auctionModal').style.display = 'block';
}

// Close auction modal
function closeAuctionModal() {
    document.getElementById('auctionModal').style.display = 'none';
    currentItemIndex = null;
}

// Confirm auction
function confirmAuction() {
    const select = document.getElementById('winnerSelect');
    const winnerIndex = select.value;
    
    if (winnerIndex === '') {
        alert('Please select a winner');
        return;
    }
    
    const item = items[currentItemIndex];
    const participant = participants[winnerIndex];
    
    // Deduct bucks
    participant.bucks -= item.price;
    
    // Update item status
    item.status = 'sold';
    item.winner = participant.name;
    
    saveData();
    renderAll();
    closeAuctionModal();
}

// Delete or reset item
function deleteItem(index) {
    const item = items[index];
    
    if (item.status === 'sold') {
        if (confirm(`This item was sold to ${item.winner}. Do you want to refund and delete it?`)) {
            // Find winner and refund
            const winner = participants.find(p => p.name === item.winner);
            if (winner) {
                winner.bucks += item.price;
            }
            items.splice(index, 1);
        }
    } else {
        if (confirm(`Are you sure you want to delete "${item.name}"?`)) {
            items.splice(index, 1);
        }
    }
    
    saveData();
    renderAll();
}

// Reset item (make available again and refund)
function resetItem(index) {
    const item = items[index];
    
    if (item.status === 'sold') {
        if (confirm(`Reset "${item.name}" and refund ${item.winner}?`)) {
            // Find winner and refund
            const winner = participants.find(p => p.name === item.winner);
            if (winner) {
                winner.bucks += item.price;
            }
            
            item.status = 'available';
            item.winner = null;
            
            saveData();
            renderAll();
        }
    }
}

// Filter items
function filterItems(filter) {
    currentFilter = filter;
    
    // Update button states
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderItems();
}

// Render items table
function renderItems() {
    const tbody = document.getElementById('itemsBody');
    tbody.innerHTML = '';
    
    const filteredItems = items.filter(item => {
        if (currentFilter === 'all') return true;
        if (currentFilter === 'available') return item.status === 'available';
        if (currentFilter === 'sold') return item.status === 'sold';
        return true;
    });
    
    filteredItems.forEach((item, originalIndex) => {
        // Find the original index in the full items array
        const index = items.indexOf(item);
        
        const row = tbody.insertRow();
        row.innerHTML = `
            <td><strong>${item.name}</strong></td>
            <td><span class="bucks-amount">${item.price}</span></td>
            <td><span class="status-${item.status}">${item.status.toUpperCase()}</span></td>
            <td>${item.winner || '-'}</td>
            <td>
                <div class="action-buttons">
                    ${item.status === 'available' ? 
                        `<button class="award-btn" onclick="openAuctionModal(${index})">Award Item</button>` : 
                        `<button class="action-btn" onclick="resetItem(${index})">Reset</button>`
                    }
                    <button class="delete-btn" onclick="deleteItem(${index})">Delete</button>
                </div>
            </td>
        `;
    });
}

// Update statistics
function updateStats() {
    document.getElementById('totalParticipants').textContent = participants.length;
    document.getElementById('totalItems').textContent = items.length;
    
    const soldCount = items.filter(item => item.status === 'sold').length;
    document.getElementById('soldItems').textContent = soldCount;
    
    const revenue = items
        .filter(item => item.status === 'sold')
        .reduce((sum, item) => sum + item.price, 0);
    document.getElementById('totalRevenue').textContent = revenue;
}

// Render everything
function renderAll() {
    renderParticipants();
    renderItems();
    updateStats();
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('auctionModal');
    if (event.target === modal) {
        closeAuctionModal();
    }
}

// Initialize on page load
window.onload = function() {
    if (!loadData()) {
        // First time loading - initialize with sample data
        initializeSampleData();
    } else {
        renderAll();
    }
}

// Reset all data
function resetAllData() {
    if (confirm('Are you sure you want to reset ALL data? This cannot be undone!')) {
        localStorage.clear();
        initializeSampleData();
    }
}
