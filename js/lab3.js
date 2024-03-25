const tabPanels = document.querySelectorAll(".tabpanel");

tabPanels.forEach((tabPanel) => {
	tabPanel.addEventListener("click", closeOpenDetails)
});

function closeOpenDetails() {
    tabPanels.forEach((tabPanel) => {
        let tabClick = 
}