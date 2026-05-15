document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Show the corresponding pane
            const targetId = button.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
            
            // Optional: Scroll to top of tab container nicely
            window.scrollTo({
                top: document.querySelector('.app-container').offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });
});
