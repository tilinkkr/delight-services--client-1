document.addEventListener('DOMContentLoaded', () => {
    console.log('Delight Services - System Ready');

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 5-Second Popup Logic
    const popup = document.getElementById('inquiry-popup');
    const closeBtn = document.getElementById('close-popup-btn');

    if (popup && closeBtn) {
        setTimeout(() => {
            popup.classList.remove('hidden');
            // Small delay to allow display:block to apply before opacity transition
            setTimeout(() => {
                popup.classList.remove('opacity-0');
                const modal = popup.querySelector('.group\\/modal');
                if (modal) {
                    modal.classList.remove('scale-95');
                    modal.classList.add('scale-100'); // Standard scale
                }
            }, 50);
        }, 5000);

        closeBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent accidental form submit or whatever
            popup.classList.add('opacity-0');
            const modal = popup.querySelector('.group\\/modal');
            if (modal) {
                modal.classList.remove('scale-100');
                modal.classList.add('scale-95');
            }
            setTimeout(() => {
                popup.classList.add('hidden');
            }, 500); // Wait for transition
        });
    }
});
