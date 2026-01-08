// Employee names for voting
const employees = [
    "Alvin Huyard",
    "Ben Zook",
    "Dan Hess",
    "Danny Hess (Son)",
    "Danny Jones",
    "Dave Garrett",
    "Ervin Stoltzfus",
    "Isaac Stoltzfus Jr.",
    "James King",
    "Jane Dropeskey",
    "Japheth King",
    "Jason Stoltzfus",
    "John King",
    "Jose Alpizar",
    "Joshua Guidroz",
    "Josh Wallace",
    "Lee Zook",
    "Logan Spence",
    "Matt Beiler",
    "Matthew King",
    "Mervin Allgyer",
    "Moses Zook",
    "Omar Garcia Cruz",
    "Omar Stoltzfus",
    "Raymond King",
    "Scott Swinehart",
    "Shelly Swinehart",
    "Todd Gilmore",
    "William Stoltzfus"
];

const categories = ['motivating', 'organized', 'safety', 'humorous'];

// Initialize votes data structure
let votes = {};

// Load votes from localStorage
function loadVotes() {
    const savedVotes = localStorage.getItem('banquetVotes');
    if (savedVotes) {
        votes = JSON.parse(savedVotes);
    } else {
        // Initialize empty votes
        employees.forEach(employee => {
            votes[employee] = {
                motivating: 0,
                organized: 0,
                safety: 0,
                humorous: 0
            };
        });
    }
}

// Save votes to localStorage
function saveVotes() {
    localStorage.setItem('banquetVotes', JSON.stringify(votes));
}

// Update vote count
function updateVote(employee, category, delta) {
    if (!votes[employee]) {
        votes[employee] = { motivating: 0, organized: 0, safety: 0, humorous: 0 };
    }
    
    votes[employee][category] += delta;
    
    // Don't allow negative votes
    if (votes[employee][category] < 0) {
        votes[employee][category] = 0;
    }
    
    saveVotes();
    renderVotingTable();
}

// Render the voting table
function renderVotingTable() {
    const tbody = document.getElementById('votingTableBody');
    tbody.innerHTML = '';
    
    employees.forEach(employee => {
        const row = tbody.insertRow();
        
        // Employee name cell
        const nameCell = row.insertCell();
        nameCell.innerHTML = `<span class="employee-name">${employee}</span>`;
        
        // Create vote cells for each category
        categories.forEach(category => {
            const cell = row.insertCell();
            cell.className = 'vote-cell';
            
            const count = votes[employee] ? votes[employee][category] : 0;
            
            cell.innerHTML = `
                <div class="vote-counter">
                    <button class="vote-btn" onclick="updateVote('${employee}', '${category}', -1)">−</button>
                    <span class="vote-count">${count}</span>
                    <button class="vote-btn" onclick="updateVote('${employee}', '${category}', 1)">+</button>
                </div>
            `;
        });
    });
}

// Reset all votes
function resetVotes() {
    if (confirm('Are you sure you want to reset all votes? This cannot be undone!')) {
        employees.forEach(employee => {
            votes[employee] = {
                motivating: 0,
                organized: 0,
                safety: 0,
                humorous: 0
            };
        });
        saveVotes();
        renderVotingTable();
    }
}

// Initialize on page load
window.onload = function() {
    loadVotes();
    renderVotingTable();
}
