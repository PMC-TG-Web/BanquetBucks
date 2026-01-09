// Data storage
let participants = [];
let auctionItemCounter = 1;

// Initialize with sample data
function initializeSampleData() {
    // Real participants from employee list
    participants = [
        { name: "Alvin Huyard", hireDate: "11/13/2017", years: 8.16, bucks: 3328, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Ben Zook", hireDate: "2/27/2023", years: 2.87, bucks: 2694, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Dan Hess", hireDate: "6/17/2019", years: 6.57, bucks: 3028, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Danny Hess (Son)", hireDate: "3/18/2024", years: 1.81, bucks: 3051, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Danny Jones", hireDate: "5/24/2018", years: 7.64, bucks: 2683, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Dave Garrett", hireDate: "5/2/2022", years: 3.69, bucks: 1793, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Ervin Stoltzfus", hireDate: "3/27/2023", years: 2.79, bucks: 2715, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Isaac Stoltzfus Jr.", hireDate: "12/4/2012", years: 13.11, bucks: 2731, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "James King", hireDate: "1/30/2023", years: 2.95, bucks: 2782, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Jane Dropeskey", hireDate: "8/21/2023", years: 2.39, bucks: 2625, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Japheth King", hireDate: "7/14/2025", years: 0.49, bucks: 998, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Jason Stoltzfus", hireDate: "4/1/2019", years: 6.78, bucks: 2638, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "John King", hireDate: "3/26/2024", years: 1.79, bucks: 2628, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Jose Alpizar", hireDate: "5/13/2024", years: 1.66, bucks: 2502, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Joshua Guidroz", hireDate: "7/24/2023", years: 2.47, bucks: 2320, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Josh Wallace", hireDate: "11/17/2025", years: 0.15, bucks: 253, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Lee Zook", hireDate: "8/4/2025", years: 0.43, bucks: 1018, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Logan Spence", hireDate: "10/7/2024", years: 1.26, bucks: 2422, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Matt Beiler", hireDate: "6/15/2020", years: 5.57, bucks: 2837, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Matthew King", hireDate: "11/6/2018", years: 7.18, bucks: 2351, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Mervin Allgyer", hireDate: "3/16/2015", years: 10.83, bucks: 2607, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Moses Zook", hireDate: "5/16/2022", years: 3.65, bucks: 2873, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Omar Garcia Cruz", hireDate: "9/23/2024", years: 1.30, bucks: 2636, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Omar Stoltzfus", hireDate: "4/27/2017", years: 8.71, bucks: 2413, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Raymond King", hireDate: "4/23/2019", years: 6.72, bucks: 2868, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Scott Swinehart", hireDate: "10/28/2013", years: 12.21, bucks: 2525, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Shelly Swinehart", hireDate: "3/11/2015", years: 10.84, bucks: 2611, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Todd Gilmore", hireDate: "9/2/2025", years: 0.35, bucks: 1135, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "William Stoltzfus", hireDate: "6/14/2021", years: 4.58, bucks: 3106, auctionItems: [], toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false }
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

// Upload employee file (CSV or TXT format)
function uploadEmployeeFile(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const content = e.target.result;
        parseEmployeeFile(content);
    };
    reader.readAsText(file);
    
    // Reset the file input
    event.target.value = '';
}

// Parse employee file and update participants
function parseEmployeeFile(content) {
    const lines = content.split('\n').filter(line => line.trim() !== '');
    
    if (lines.length === 0) {
        alert('File is empty!');
        return;
    }
    
    const newParticipants = [];
    let hasErrors = false;
    let errorMessages = [];
    
    // Check if first line is a header (contains "name" or "employee")
    const firstLine = lines[0].toLowerCase();
    const hasHeader = firstLine.includes('name') || firstLine.includes('employee');
    const startIndex = hasHeader ? 1 : 0;
    
    for (let i = startIndex; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line === '') continue;
        
        // Split by comma, tab, or multiple spaces
        const parts = line.split(/[,\t]+|  +/).map(p => p.trim());
        
        if (parts.length < 2) {
            errorMessages.push(`Line ${i + 1}: Not enough data (need at least name and bucks)`);
            hasErrors = true;
            continue;
        }
        
        const name = parts[0];
        const hireDate = parts.length > 3 ? parts[1] : '';
        const years = parts.length > 3 ? parseFloat(parts[2]) || 0 : 0;
        const bucks = parseInt(parts[parts.length - 1]) || 0;
        
        if (name === '' || bucks === 0) {
            errorMessages.push(`Line ${i + 1}: Invalid data (name or bucks missing)`);
            hasErrors = true;
            continue;
        }
        
        newParticipants.push({
            name,
            hireDate,
            years,
            bucks,
            auctionItems: [],
            toolbox: false,
            motivating: false,
            organized: false,
            safety: false,
            humorous: false,
            wordSearch: false,
            yardage: false
        });
    }
    
    if (hasErrors) {
        const proceed = confirm(`Found ${errorMessages.length} error(s):\n${errorMessages.slice(0, 5).join('\n')}${errorMessages.length > 5 ? '\n...' : ''}\n\nContinue with ${newParticipants.length} valid entries?`);
        if (!proceed) return;
    }
    
    if (newParticipants.length === 0) {
        alert('No valid employee data found in file!');
        return;
    }
    
    const confirmMsg = `Replace current ${participants.length} participants with ${newParticipants.length} from file?`;
    if (confirm(confirmMsg)) {
        participants = newParticipants;
        auctionItemCounter = 1;
        saveData();
        renderAll();
        alert(`Successfully loaded ${newParticipants.length} employees!`);
    }
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
    
    // Sort participants by bucks (highest to lowest)
    const sortedParticipants = [...participants].sort((a, b) => b.bucks - a.bucks);
    
    sortedParticipants.forEach((participant, displayIndex) => {
        const index = participants.indexOf(participant);
        const row = tbody.insertRow();
        row.innerHTML = `
            <td><strong>${displayIndex + 1}. ${participant.name}</strong></td>
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
// Export data to Excel
function exportToExcel() {
    // Prepare data for export
    const exportData = participants.map((participant, index) => {
        return {
            'Row': index + 1,
            'Employee Name': participant.name,
            'Hire Date': participant.hireDate || '-',
            'Years Employed': participant.years ? participant.years.toFixed(2) : '-',
            'Banquet Bucks': participant.bucks,
            'Items Won': participant.auctionItems && participant.auctionItems.length > 0 ? participant.auctionItems.join(', ') : '-',
            'Rookie of the Year': participant.toolbox ? 'Yes' : 'No',
            'Most Motivating': participant.motivating ? 'Yes' : 'No',
            'Most Organized': participant.organized ? 'Yes' : 'No',
            'Most Safety Minded': participant.safety ? 'Yes' : 'No',
            'Most Humorous': participant.humorous ? 'Yes' : 'No',
            'Concrete Word Search': participant.wordSearch ? 'Yes' : 'No',
            'Concrete Yardage': participant.yardage ? 'Yes' : 'No'
        };
    });

    // Create workbook and worksheet
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(exportData);

    // Set column widths
    ws['!cols'] = [
        { wch: 5 },   // Row
        { wch: 25 },  // Employee Name
        { wch: 12 },  // Hire Date
        { wch: 14 },  // Years Employed
        { wch: 14 },  // Banquet Bucks
        { wch: 20 },  // Items Won
        { wch: 18 },  // Most Toolbox Talks
        { wch: 16 },  // Most Motivating
        { wch: 15 },  // Most Organized
        { wch: 18 },  // Most Safety Minded
        { wch: 15 },  // Most Humorous
        { wch: 20 },  // Concrete Word Search
        { wch: 16 }   // Concrete Yardage
    ];

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Auction Results');

    // Generate filename with timestamp
    const date = new Date();
    const filename = `BanquetBucks_Results_${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}.xlsx`;

    // Download file
    XLSX.writeFile(wb, filename);
}