


let tabItem = document.querySelectorAll('.tabs ul li a');

tabItem.forEach(function(tab) {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        document.querySelectorAll('.tabs ul li').forEach(function(tabItem) {
            tabItem.classList.remove('active');
        });
        // Add active class to the clicked tab
        tab.parentNode.classList.add('active');
        // Hide all tab content panels
        document.querySelectorAll('.tabpanel').forEach(function(panel) {
            panel.classList.remove('active');
        });
        // Show the corresponding tab content panel
        document.querySelector(this.getAttribute('href')).classList.add('active');
    });
});