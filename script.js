// Data storage
let participants = [];

// Initialize with sample data
function initializeSampleData() {
    // Real participants from employee list
    participants = [
        { name: "Alvin Huyard", hireDate: "11/13/2017", years: 8.15, bucks: 2534, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Ben Zook", hireDate: "2/27/2023", years: 2.86, bucks: 1992, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Dan Hess", hireDate: "6/17/2019", years: 6.56, bucks: 2189, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Danny Hess (Son)", hireDate: "3/18/2024", years: 1.81, bucks: 2190, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Danny Jones", hireDate: "5/24/2018", years: 7.63, bucks: 1978, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Dave Barrett", hireDate: "5/2/2022", years: 3.68, bucks: 1201, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Ervin Stoltzfus", hireDate: "3/27/2023", years: 2.78, bucks: 2138, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Francisco \"Poncho\" Romero", hireDate: "6/24/2024", years: 1.54, bucks: 2222, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Isaac Stoltzfus, Jr.", hireDate: "12/4/2012", years: 13.10, bucks: 2043, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Ivan Zavaleta", hireDate: "3/4/2024", years: 1.84, bucks: 2170, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "James King", hireDate: "1/30/2023", years: 2.94, bucks: 2091, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Jane Dropeskey", hireDate: "8/21/2023", years: 2.38, bucks: 1918, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Japheth King", hireDate: "7/14/2025", years: 0.48, bucks: 412, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Jason Stoltzfus", hireDate: "4/1/2019", years: 6.77, bucks: 2216, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "John King", hireDate: "3/26/2024", years: 1.78, bucks: 1990, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Jose Alpizar", hireDate: "5/13/2024", years: 1.65, bucks: 1768, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Jose Ivan Cruz", hireDate: "9/9/2024", years: 1.33, bucks: 1851, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Joseph Beiler", hireDate: "8/31/2020", years: 5.35, bucks: 2028, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Joshua Quidroz", hireDate: "7/24/2023", years: 2.46, bucks: 1747, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Lee Zook", hireDate: "8/4/2025", years: 0.42, bucks: 409, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Logan Spence", hireDate: "10/7/2024", years: 1.25, bucks: 1779, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Matt Beiler", hireDate: "6/15/2020", years: 5.56, bucks: 2067, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Matthew King", hireDate: "11/6/2018", years: 7.17, bucks: 1851, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Mervin Allgyer", hireDate: "3/16/2015", years: 10.82, bucks: 2040, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Moses Zook", hireDate: "5/16/2022", years: 3.65, bucks: 2099, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Omar Garcia Cruz", hireDate: "9/23/2024", years: 1.29, bucks: 1891, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Omar Stoltzfus", hireDate: "4/27/2017", years: 8.70, bucks: 1809, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Raymond King", hireDate: "4/23/2019", years: 6.71, bucks: 2094, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Scott Swinehart", hireDate: "10/28/2013", years: 12.20, bucks: 1941, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Shelly Swinehart", hireDate: "3/11/2015", years: 10.83, bucks: 1984, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "Todd Gilmore", hireDate: "9/2/2025", years: 0.35, bucks: 315, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false },
        { name: "William Stoltzfus", hireDate: "6/14/2021", years: 4.57, bucks: 2205, toolbox: false, motivating: false, organized: false, safety: false, humorous: false, wordSearch: false, yardage: false }
    ];

    saveData();
    renderAll();
}

// Load data from localStorage
function loadData() {
    const savedParticipants = localStorage.getItem('participants');
    
    if (savedParticipants) {
        participants = JSON.parse(savedParticipants);
        return true;
    }
    return false;
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('participants', JSON.stringify(participants));
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
    bucksInput.value = '10';
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
        alert(`${participant.name} already won this game!`);
        return;
    }
    
    const customAmount = amount === 'custom' ? 
        parseInt(prompt(`Enter bucks to award for this game:`)) : 
        amount;
    
    if (customAmount === null || isNaN(customAmount) || customAmount <= 0) return;
    
    participant[field] = true;
    participant.bucks += customAmount;
    
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
    
    participants.forEach((participant, index) => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td><strong>${participant.name}</strong></td>
            <td>${participant.hireDate || '-'}</td>
            <td>${participant.years ? participant.years.toFixed(2) : '-'}</td>
            <td><span class="bucks-amount">💰 ${participant.bucks}</span></td>
            <td style="text-align: center;">
                ${participant.toolbox ? '✅' : `<button class="action-btn" onclick="awardGame(${index}, 'toolbox', 'custom')">Award</button>`}
            </td>
            <td style="text-align: center;">
                ${participant.motivating ? '✅' : `<button class="action-btn" onclick="awardGame(${index}, 'motivating', 'custom')">Award</button>`}
            </td>
            <td style="text-align: center;">
                ${participant.organized ? '✅' : `<button class="action-btn" onclick="awardGame(${index}, 'organized', 'custom')">Award</button>`}
            </td>
            <td style="text-align: center;">
                ${participant.safety ? '✅' : `<button class="action-btn" onclick="awardGame(${index}, 'safety', 'custom')">Award</button>`}
            </td>
            <td style="text-align: center;">
                ${participant.humorous ? '✅' : `<button class="action-btn" onclick="awardGame(${index}, 'humorous', 'custom')">Award</button>`}
            </td>
            <td style="text-align: center;">
                ${participant.wordSearch ? '✅' : `<button class="action-btn" onclick="awardGame(${index}, 'wordSearch', 'custom')">Award</button>`}
            </td>
            <td style="text-align: center;">
                ${participant.yardage ? '✅' : `<button class="action-btn" onclick="awardGame(${index}, 'yardage', 'custom')">Award</button>`}
            </td>
            <td>
                <div class="action-buttons">
                    <button class="adjust-btn" onclick="adjustBucks(${index}, 'custom')">Adjust Bucks</button>
                </div>
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
        initializeSampleData();
    }
}
