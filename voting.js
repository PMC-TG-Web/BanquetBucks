// Employee names for voting
const employees = [
    "Alvin Huyard",
    "Ben Zook",
    "Dan Hess",
    "Danny Hess (son)",
    "Danny Jones",
    "Dave Garrett",
    "Ervin Stoltzfus",
    "Francisco Romero (Poncho)",
    "Isaac Stoltzfus Jr.",
    "Ivan Zavaleta Lopez",
    "James King",
    "Jane Dropeskey",
    "Japheth King",
    "Jason Stoltzfus",
    "John King",
    "Jose Alpizar",
    "Jose I Cruz-Loaeza (Cruz)",
    "Joey Beiler",
    "Joshua Guidroz",
    "Josh Wallace",
    "Lee Zook",
    "Logan Spence",
    "Matt Beiler",
    "Matthew King",
    "Mervin Allgyer",
    "Moses Zook",
    "Omar Stoltzfus",
    "Omar Garcia Cruz",
    "Raymond King",
    "Scott Swinehart",
    "Shelly Swinehart",
    "Todd Gilmore",
    "William Stoltzfus"
];

const categories = ['motivating', 'organized', 'safety', 'humorous', 'mvp'];

// Initialize votes data structure
let votes = {};

// Load votes from localStorage
function loadVotes() {
    const savedVotes = localStorage.getItem('banquetVotes');
    if (savedVotes) {
        votes = JSON.parse(savedVotes);
        // Ensure all employees have all categories (for backward compatibility)
        employees.forEach(employee => {
            if (!votes[employee]) {
                votes[employee] = {
                    motivating: 0,
                    organized: 0,
                    safety: 0,
                    humorous: 0,
                    mvp: 0
                };
            } else {
                // Add missing categories to existing employees
                if (votes[employee].mvp === undefined) {
                    votes[employee].mvp = 0;
                }
            }
        });
        saveVotes(); // Save the updated structure
    } else {
        // Initialize empty votes
        employees.forEach(employee => {
            votes[employee] = {
                motivating: 0,
                organized: 0,
                safety: 0,
                humorous: 0,
                mvp: 0
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
        votes[employee] = { motivating: 0, organized: 0, safety: 0, humorous: 0, mvp: 0 };
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
                humorous: 0,
                mvp: 0
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

// Calculate top 5 for each category and show results
function showResults() {
    const results = {};
    const bucksAmounts = [125, 100, 75, 50, 25];
    
    categories.forEach(category => {
        // Create array of employees with their vote counts
        const employeeVotes = employees.map(employee => ({
            name: employee,
            votes: votes[employee] ? votes[employee][category] : 0
        }));
        
        // Filter out employees with 0 votes
        const employeesWithVotes = employeeVotes.filter(e => e.votes > 0);
        
        // Sort by votes (descending)
        employeesWithVotes.sort((a, b) => b.votes - a.votes);
        
        // Assign bucks handling ties
        const resultsWithBucks = [];
        let currentRank = 0;
        let previousVotes = null;
        
        for (let i = 0; i < employeesWithVotes.length && currentRank < 5; i++) {
            const employee = employeesWithVotes[i];
            
            // If votes are different from previous, advance the rank
            if (employee.votes !== previousVotes) {
                currentRank = i;
            }
            
            // Only include top 5 ranks
            if (currentRank < 5) {
                resultsWithBucks.push({
                    name: employee.name,
                    votes: employee.votes,
                    bucks: bucksAmounts[currentRank],
                    rank: currentRank + 1
                });
                previousVotes = employee.votes;
            }
        }
        
        results[category] = resultsWithBucks;
    });
    
    displayResults(results);
}

// Display results in modal
function displayResults(results) {
    const container = document.getElementById('resultsContainer');
    const categoryTitles = {
        'motivating': 'Most Motivating',
        'organized': 'Most Organized',
        'safety': 'Most Safety Minded',
        'humorous': 'Most Humorous',
        'mvp': 'MVP (Most Valuable Player)'
    };
    
    let html = '';
    
    categories.forEach(category => {
        html += `
            <div class="category-results">
                <h3>${categoryTitles[category]}</h3>
                <ol class="results-list">
        `;
        
        results[category].forEach(result => {
            html += `
                <li>
                    <span class="result-name">${result.name}</span>
                    <div>
                        <span class="result-votes">${result.votes} votes</span>
                        <span class="result-bucks">💰 ${result.bucks} bucks</span>
                    </div>
                </li>
            `;
        });
        
        html += `
                </ol>
            </div>
        `;
    });
    
    container.innerHTML = html;
    document.getElementById('resultsModal').style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('resultsModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('resultsModal');
    if (event.target === modal) {
        closeModal();
    }
}
