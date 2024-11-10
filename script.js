document.addEventListener('DOMContentLoaded', () => {
    const careCostForm = document.getElementById('careCostForm');
    const adoptionForm = document.getElementById('adoptionForm');
    const contactForm = document.getElementById('contactForm');

    careCostForm.addEventListener('submit', (event) => {
        event.preventDefault();
        calculateCareCost();
    });

    adoptionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Adoption inquiry submitted!');
    });

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Message sent!');
    });
});

function calculateCareCost() {
    const petType = document.getElementById('petType').value;
    const duration = document.getElementById('duration').value;
    let costPerMonth = 0;
    
    switch (petType) {
        case 'dog':
            costPerMonth = 50;
            break;
        case 'cat':
            costPerMonth = 40;
            break;
        case 'rabbit':
            costPerMonth = 30;
            break;
    }

    const totalCost = costPerMonth * duration;
    document.getElementById('careCostResult').textContent = `The estimated care cost for your pet is $${totalCost}.`;
}
