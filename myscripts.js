document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link, .footer-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Highlight active navigation link
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        const navHeight = 80;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = '#' + section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    });

    // Add modal styles dynamically
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .nav-link.active {
                color: var(--primary);
            }
            
            .nav-link.active:before {
                width: 100%;
            }
            
            .footer-link.active {
                opacity: 0.8;
            }
        </style>
    `);
});

// Project details modal functions
function showProjectDetails() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" onclick="closeModal()">&times;</span>
            <h2 style="color: var(--primary); margin-bottom: 20px;">Tic Tac Toe Game - Project Details</h2>
            <div style="margin-bottom: 20px;">
                <h3 style="color: var(--secondary); margin-bottom: 10px;">Overview</h3>
                <p>Developed a fully functional Tic Tac Toe game using object-oriented C++ programming. This console-based application showcases advanced programming concepts and clean architecture.</p>
            </div>
            <div style="margin-bottom: 20px;">
                <h3 style="color: var(--secondary); margin-bottom: 10px;">Key Features</h3>
                <ul style="padding-left: 20px; line-height: 1.6;">
                    <li>Implemented comprehensive game logic with algorithms for move validation and win condition detection</li>
                    <li>Designed an intuitive console-based interface featuring real-time board visualization</li>
                    <li>Utilized 2D array manipulation for efficient game state management</li>
                    <li>Built robust input validation to handle user errors gracefully</li>
                    <li>Enhanced core gameplay with score tracking and game statistics</li>
                    <li>Created a user-friendly menu system for improved player experience</li>
                </ul>
            </div>
            <div style="margin-bottom: 20px;">
                <h3 style="color: var(--secondary); margin-bottom: 10px;">Technical Implementation</h3>
                <p>The game was developed using OOP principles including encapsulation and proper class architecture to create maintainable, modular code. The project demonstrates proficiency in:</p>
                <ul style="padding-left: 20px; line-height: 1.6;">
                    <li>C++ programming fundamentals</li>
                    <li>Algorithm design and implementation</li>
                    <li>Data structure manipulation (particularly 2D arrays)</li>
                    <li>Error handling and input validation</li>
                    <li>Software architecture principles</li>
                    <li>User interface design within console limitations</li>
                </ul>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
    
    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// Form Submission
const contactForm = document.getElementById('contact-form');
        
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    
    // Here you would normally send this data to a server
    // For now, we'll just show a success message
    
    // Clear the form
    contactForm.reset();
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
});

// Mobile menu toggle
const mobileMenu = document.createElement('div');
mobileMenu.className = 'mobile-menu';
document.querySelector('.nav-container').appendChild(mobileMenu);

const menuToggle = document.createElement('i');
menuToggle.className = 'fas fa-bars';
mobileMenu.appendChild(menuToggle);

menuToggle.addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-container')) {
        document.querySelector('.nav-links').classList.remove('active');
    }
});