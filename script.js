document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Navigation Toggle Engine
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('open');
    });

    // 2. Interactive Project Sorting Filter Feature
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Manage Active Class Highlight
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // 3. Form Enquiry Submission Feedback Engine
    const enquiryForm = document.getElementById('portfolioForm');
    const feedbackBox = document.getElementById('formFeedback');

    enquiryForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevents standard page refresh

        // Read field values
        const nameVal = document.getElementById('name').value;
        
        // Simulating Live API Server Processing Delay
        feedbackBox.classList.remove('hidden', 'success');
        feedbackBox.innerText = "Processing secure message transmission...";
        feedbackBox.style.color = "#94a3b8";

        setTimeout(() => {
            feedbackBox.classList.add('success');
            feedbackBox.innerText = `Thank you, ${nameVal}! Your enquiry was captured successfully.`;
            enquiryForm.reset();
        }, 1200);
    });
});
