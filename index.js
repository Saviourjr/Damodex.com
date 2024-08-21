document.addEventListener('DOMContentLoaded', () => {
    // Get references to the menu, menu button, and menu items
    const sideNav = document.getElementById('sideNav');
    const menuButton = document.getElementById('menuBtn');
    const menuItems = document.querySelectorAll('#list li');

    // Function to toggle the menu visibility
    function toggleMenu() {
        // If the menu is off-screen, slide it in; otherwise, slide it out
        if (sideNav.style.right === '0px') {
            sideNav.style.right = '-250px';
        } else {
            sideNav.style.right = '0px';
        }
    }

    // Add click event to the menu button to toggle the menu
    menuButton.addEventListener('click', toggleMenu);

    // Add click event to each menu item to close the menu
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            sideNav.style.right = '-250px'; // Close the menu
        });
    });

    // Optional: Close the menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!sideNav.contains(event.target) && event.target !== menuButton) {
            sideNav.style.right = '-250px'; // Close the menu if clicking outside
        }
    });
});


var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});