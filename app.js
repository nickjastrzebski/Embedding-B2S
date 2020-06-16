console.log("Hello DS10! 🐱‍👤");
let viz;

// Create a variable to store the URL
const url =
  "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard";

// Create a variable to store the dashboard options
const options = {
  device: "desktop",
  height: "600px",
  width: "1000px",
};

// Create a variable to store the vizContainer
const vizContainer = document.getElementById("vizContainer");

// Create a variable to store the showViz button
const showVizButton = document.getElementById("showViz");

// Create a variable to store the hideViz button
const hideVizButton = document.getElementById("hideViz");

// Create a function that shows the dashboard
function initViz() {
  viz = new tableau.Viz(vizContainer, url, options);
}

// Create a function that allows user to show viz
function showViz() {
  viz.show();
}

// Create a function that allows user to hide viz
function hideViz() {
  viz.hide();
}

// Set up event listeners to show & hide viz
showVizButton.addEventListener("click", showViz);
hideVizButton.addEventListener("click", hideViz);

// Set up event listener to render viz
document.addEventListener("DOMContentLoaded", initViz);

//Create variables for PDF & PPT buttons
const exportPDFButton = document.getElementById("exportPDF");

const exportPPTButton = document.getElementById("exportPPT");

//Create functions for PDF & PPT export
function exportPDF() {
  console.log("Export PDF loading");
  viz.showExportPDFDialog();
}

function exportPPT() {
  console.log("Export PPT loading");
  viz.showExportPowerPointDialog();
}

// Set up event listeners for export buttons
exportPDFButton.addEventListener("click", exportPDF);
exportPPTButton.addEventListener("click", exportPPT);

// Range filter function
function getRangeValues() {
  // Input min & max values
  const minValue = document.getElementById("minValue").value;
  const maxValue = document.getElementById("maxValue").value;
  // Get workbook objects
  const workbook = viz.getWorkbook();
  const activesheet = workbook.getActiveSheet();
  const sheets = activesheet.getWorksheets();
  const sheetToFilter = sheets[1];
  sheetToFilter.applyRangeFilterAsync("SUM(Sales)", {
    min: minValue,
    max: maxValue,
  });
}

const applyButton = document.getElementById("applyButton");

applyButton.addEventListener("click", getRangeValues);
