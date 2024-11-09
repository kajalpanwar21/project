document.addEventListener('DOMContentLoaded', () => {
    const calorieForm = document.getElementById('calorieForm');
    const membershipForm = document.getElementById('membershipForm');
    const contactForm = document.getElementById('contactForm');

    calorieForm.addEventListener('submit', (event) => {
        event.preventDefault();
        calculateCalories();
    });

    membershipForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Membership inquiry submitted!');
    });

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Message sent!');
    });
});

function calculateCalories() {
    const intensity = document.getElementById('intensity').value;
    const duration = document.getElementById('duration').value;
    const calories = intensity * duration * 1.2; // Simple formula for demo purposes
    document.getElementById('caloriesResult').textContent = `You burned approximately ${calories} calories.`;
}
