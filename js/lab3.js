// const tabPanels = document.querySelectorAll(".tabpanel");

// tabPanels.forEach((tabPanel) => {
// 	tabPanel.addEventListener("click", closeOpenDetails)
// });
// let tabId1 = document.getElementById("tabpanel1");
// console.log(tabId1);
// let tabId2 = document.getElementById("tabpanel2");
// let tabId3 = document.getElementById("tabpanel3");


let tabItem = document.querySelectorAll('.tabs ul li a');

tabItem.forEach(function(tab) {
    tab.addEventListener('click', function() {
        // // Remove active class from all tabs
        // document.querySelectorAll('.tabs ul li').forEach(function(tabItem) {
        //     tabItem.classList.remove('active');
        // });
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