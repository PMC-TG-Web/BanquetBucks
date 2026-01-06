// Data storage
let participants = [];
let auctionItemCounter = 1;

// Initialize with sample data
function initializeSampleData() {
    // Real participants from employee list
    participants = [
        { name: "Alvin Huyard", hireDate: "11/13/2017", years: 8.15, bucks: 2534, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Ben Zook", hireDate: "2/27/2023", years: 2.86, bucks: 1992, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Dan Hess", hireDate: "6/17/2019", years: 6.56, bucks: 2189, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Danny Hess (Son)", hireDate: "3/18/2024", years: 1.81, bucks: 2190, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Danny Jones", hireDate: "5/24/2018", years: 7.63, bucks: 1978, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Dave Barrett", hireDate: "5/2/2022", years: 3.68, bucks: 1201, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Ervin Stoltzfus", hireDate: "3/27/2023", years: 2.78, bucks: 2138, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Francisco \"Poncho\" Romero", hireDate: "6/24/2024", years: 1.54, bucks: 2222, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Isaac Stoltzfus, Jr.", hireDate: "12/4/2012", years: 13.10, bucks: 2043, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Ivan Zavaleta", hireDate: "3/4/2024", years: 1.84, bucks: 2170, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "James King", hireDate: "1/30/2023", years: 2.94, bucks: 2091, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Jane Dropeskey", hireDate: "8/21/2023", years: 2.38, bucks: 1918, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Japheth King", hireDate: "7/14/2025", years: 0.48, bucks: 412, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Jason Stoltzfus", hireDate: "4/1/2019", years: 6.77, bucks: 2216, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "John King", hireDate: "3/26/2024", years: 1.78, bucks: 1990, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Jose Alpizar", hireDate: "5/13/2024", years: 1.65, bucks: 1768, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Jose Ivan Cruz", hireDate: "9/9/2024", years: 1.33, bucks: 1851, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Joseph Beiler", hireDate: "8/31/2020", years: 5.35, bucks: 2028, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Joshua Quidroz", hireDate: "7/24/2023", years: 2.46, bucks: 1747, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Lee Zook", hireDate: "8/4/2025", years: 0.42, bucks: 409, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Logan Spence", hireDate: "10/7/2024", years: 1.25, bucks: 1779, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Matt Beiler", hireDate: "6/15/2020", years: 5.56, bucks: 2067, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Matthew King", hireDate: "11/6/2018", years: 7.17, bucks: 1851, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Mervin Allgyer", hireDate: "3/16/2015", years: 10.82, bucks: 2040, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Moses Zook", hireDate: "5/16/2022", years: 3.65, bucks: 2099, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Omar Garcia Cruz", hireDate: "9/23/2024", years: 1.29, bucks: 1891, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Omar Stoltzfus", hireDate: "4/27/2017", years: 8.70, bucks: 1809, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Raymond King", hireDate: "4/23/2019", years: 6.71, bucks: 2094, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Scott Swinehart", hireDate: "10/28/2013", years: 12.20, bucks: 1941, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Shelly Swinehart", hireDate: "3/11/2015", years: 10.83, bucks: 1984, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Todd Gilmore", hireDate: "9/2/2025", years: 0.35, bucks: 315, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "William Stoltzfus", hireDate: "6/14/2021", years: 4.57, bucks: 2205, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false }
    ];

    saveData();
    renderAll();
}

// Load data from localStorage
function loadData() {
    const savedParticipants = localStorage.getItem('participants');
    const savedCounter = localStorage.getItem('auctionItemCounter');
    
    if (savedParticipants) {
        participants = JSON.parse(savedParticipants);
        auctionItemCounter = savedCounter ? parseInt(savedCounter) : 1;
        return true;
    }
    return false;
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('participants', JSON.stringify(participants));
    localStorage.setItem('auctionItemCounter', auctionItemCounter.toString());
}

// Award auction item to participant
function awardAuctionItem(index, itemNumber = null) {
    const participant = participants[index];
    const itemNum = itemNumber || auctionItemCounter;
    
    const price = parseInt(prompt(`Enter price for Auction Item #${itemNum}:`));
    
    if (price === null || isNaN(price) || price <= 0) return;
    
    if (participant.bucks < price) {
        alert(`${participant.name} doesn't have enough bucks! They have ${participant.bucks}, but need ${price}.`);
        return;
    }
    
    participant.auctionItems = participant.auctionItems || [];
    participant.auctionItems.push(itemNum);
    participant.bucks -= price;
    
    // Only increment if we're awarding the current item
    if (itemNum === auctionItemCounter) {
        auctionItemCounter++;
    }
    
    saveData();
    renderParticipants();
    updateStats();
}

// Skip current auction item
function skipAuctionItem() {
    if (confirm(`Skip Auction Item #${auctionItemCounter}?`)) {
        auctionItemCounter++;
        saveData();
        renderParticipants();
    }
}

// Award a specific auction item number
function awardSpecificItem() {
    const itemNum = parseInt(prompt(`Enter the auction item number to award:`));
    if (itemNum === null || isNaN(itemNum) || itemNum <= 0) return;
    
    // Find participants with enough bucks
    const eligibleParticipants = participants
        .map((p, i) => ({ participant: p, index: i }))
        .filter(({ participant }) => participant.bucks > 0);
    
    if (eligibleParticipants.length === 0) {
        alert('No participants with bucks available!');
        return;
    }
    
    const participantIndex = parseInt(prompt(`Enter participant row number (1-${participants.length}) to award item #${itemNum} to:`));
    if (participantIndex === null || isNaN(participantIndex) || participantIndex < 1 || participantIndex > participants.length) {
        return;
    }
    
    awardAuctionItem(participantIndex - 1, itemNum);
}

// Add a participant
function addParticipant() {
    const nameInput = document.getElementById('participantName');
    const hireDateInput = document.getElementById('hireDate');
    const yearsInput = document.getElementById('yearsEmployed');
    const bucksInput = document.getElementById('initialBucks');
    
    const name = nameInput.value.trim();
    const hireDate = hireDateInput.value.trim();
    const years = parseFloat(yearsInput.value) || 0;
    const bucks = parseInt(bucksInput.value) || 10;
    
    if (name === '') {
        alert('Please enter a participant name');
        return;
    }
    
    // Check for duplicate names
    if (participants.some(p => p.name.toLowerCase() === name.toLowerCase())) {
        alert('A participant with this name already exists');
        return;
    }
    
    participants.push({ name, hireDate, years, bucks });
    saveData();
    renderParticipants();
    updateStats();
    
    // Clear inputs
    nameInput.value = '';
    hireDateInput.value = '';
    yearsInput.value = '';
    bucksInput.value = '';
}

// Award game bucks to a participant
function awardGame(index, gameName, amount) {
    const participant = participants[index];
    const gameFields = {
        'toolbox': 'toolbox',
        'motivating': 'motivating',
        'organized': 'organized',
        'safety': 'safety',
        'humorous': 'humorous',
        'wordSearch': 'wordSearch',
        'yardage': 'yardage'
    };
    
    const field = gameFields[gameName];
    
    if (participant[field]) {
        alert(`${participant.name} has already won this game!`);
        return;
    }
    
    const customAmount = amount === 'custom' ? 
        parseInt(prompt(`Enter bucks to award for this game:`)) : 
        amount;
    
    if (customAmount === null || isNaN(customAmount) || customAmount <= 0) return;
    
    participant[field] = true;
    participant.gameAmounts = participant.gameAmounts || {};
    participant.gameAmounts[field] = customAmount;
    participant.bucks += customAmount;
    
    saveData();
    renderParticipants();
    updateStats();
}

// Undo a game award
function undoGameAward(index, gameName) {
    const participant = participants[index];
    const gameFields = {
        'toolbox': 'toolbox',
        'motivating': 'motivating',
        'organized': 'organized',
        'safety': 'safety',
        'humorous': 'humorous',
        'wordSearch': 'wordSearch',
        'yardage': 'yardage'
    };
    
    const field = gameFields[gameName];
    
    if (!confirm(`Undo ${participant.name}'s win for this game?`)) {
        return;
    }
    
    // Refund the bucks
    if (participant.gameAmounts && participant.gameAmounts[field]) {
        participant.bucks -= participant.gameAmounts[field];
        delete participant.gameAmounts[field];
    }
    
    participant[field] = false;
    
    saveData();
    renderParticipants();
    updateStats();
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
    
    // Update the Auction Items header with current item number
    const headers = document.querySelectorAll('#participantsTable th');
    headers[5].textContent = `Auction Item #${auctionItemCounter}`;
    
    participants.forEach((participant, index) => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td><strong>${participant.name}</strong></td>
            <td>${participant.hireDate || '-'}</td>
            <td>${participant.years ? participant.years.toFixed(2) : '-'}</td>
            <td><span class="bucks-amount">💰 ${participant.bucks}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="adjust-btn" onclick="adjustBucks(${index}, 'custom')">Adjust Bucks</button>
                </div>
            </td>
            <td style="text-align: center;">
                <button class="action-btn" onclick="awardAuctionItem(${index})">Award Item</button>
            </td>
            <td style="text-align: center;">
                ${participant.toolbox ? 
                    `<span style="cursor: pointer; font-size: 20px;" onclick="undoGameAward(${index}, 'toolbox')" title="Click to undo">✅</span>` : 
                    `<button class="action-btn" onclick="awardGame(${index}, 'toolbox', 'custom')">Award</button>`}
            </td>
            <td style="text-align: center;">
                ${participant.motivating ? 
                    `<span style="cursor: pointer; font-size: 20px;" onclick="undoGameAward(${index}, 'motivating')" title="Click to undo">✅</span>` : 
                    `<button class="action-btn" onclick="awardGame(${index}, 'motivating', 'custom')">Award</button>`}
            </td>
            <td style="text-align: center;">
                ${participant.organized ? 
                    `<span style="cursor: pointer; font-size: 20px;" onclick="undoGameAward(${index}, 'organized')" title="Click to undo">✅</span>` : 
                    `<button class="action-btn" onclick="awardGame(${index}, 'organized', 'custom')">Award</button>`}
            </td>
            <td style="text-align: center;">
                ${participant.safety ? 
                    `<span style="cursor: pointer; font-size: 20px;" onclick="undoGameAward(${index}, 'safety')" title="Click to undo">✅</span>` : 
                    `<button class="action-btn" onclick="awardGame(${index}, 'safety', 'custom')">Award</button>`}
            </td>
            <td style="text-align: center;">
                ${participant.humorous ? 
                    `<span style="cursor: pointer; font-size: 20px;" onclick="undoGameAward(${index}, 'humorous')" title="Click to undo">✅</span>` : 
                    `<button class="action-btn" onclick="awardGame(${index}, 'humorous', 'custom')">Award</button>`}
            </td>
            <td style="text-align: center;">
                ${participant.wordSearch ? 
                    `<span style="cursor: pointer; font-size: 20px;" onclick="undoGameAward(${index}, 'wordSearch')" title="Click to undo">✅</span>` : 
                    `<button class="action-btn" onclick="awardGame(${index}, 'wordSearch', 'custom')">Award</button>`}
            </td>
            <td style="text-align: center;">
                ${participant.yardage ? 
                    `<span style="cursor: pointer; font-size: 20px;" onclick="undoGameAward(${index}, 'yardage')" title="Click to undo">✅</span>` : 
                    `<button class="action-btn" onclick="awardGame(${index}, 'yardage', 'custom')">Award</button>`}
            </td>
            <td style="text-align: center; font-size: 12px; color: #666; max-width: 150px; word-wrap: break-word; white-space: normal;">
                ${participant.auctionItems && participant.auctionItems.length > 0 ? 
                    participant.auctionItems.join(', ') : 
                    '-'}
            </td>
        `;
    });
}

// Update statistics
function updateStats() {
    document.getElementById('totalParticipants').textContent = participants.length;
    
    const totalBucks = participants.reduce((sum, p) => sum + p.bucks, 0);
    document.getElementById('totalBucks').textContent = totalBucks;
}

// Render everything
function renderAll() {
    renderParticipants();
    updateStats();
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
        auctionItemCounter = 1;
        initializeSampleData();
    }
}
