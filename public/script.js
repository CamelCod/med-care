// Med-Care Frontend JavaScript

document.addEventListener('DOMContentLoaded', function() {
    checkAPIStatus();
    
    // Check API status every 30 seconds
    setInterval(checkAPIStatus, 30000);
});

async function checkAPIStatus() {
    const statusIndicator = document.getElementById('status-indicator');
    const statusText = document.getElementById('status-text');
    
    try {
        statusIndicator.className = 'status-checking';
        statusText.textContent = 'Checking...';
        
        const response = await fetch('/health');
        
        if (response.ok) {
            const data = await response.json();
            statusIndicator.className = 'status-online';
            statusText.textContent = `API Online - ${data.status}`;
            
            // Add timestamp
            const timestamp = new Date(data.timestamp).toLocaleTimeString();
            statusText.textContent += ` (Last checked: ${timestamp})`;
        } else {
            throw new Error('API request failed');
        }
    } catch (error) {
        console.error('Error checking API status:', error);
        statusIndicator.className = 'status-offline';
        statusText.textContent = 'API Offline';
    }
}

// Add some interactivity to feature cards
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add a subtle animation on click
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});

// Utility function for API calls
async function makeAPICall(endpoint, options = {}) {
    try {
        const response = await fetch(endpoint, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
}

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        checkAPIStatus,
        makeAPICall
    };
}
