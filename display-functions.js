// applying the onclick functions to each of the filter buttons:
document.querySelector("#no-filter").onclick = function(){
    populateTable(currentSorted.sortColumn, currentSorted.direction)
    toggleSelectedButtonState(this);
    toggleRadioInputs();
    showDescription();
}
document.querySelector("#training-filter").onclick = function(){
    populateTable(currentSorted.sortColumn, currentSorted.direction, "Training")
    toggleSelectedButtonState(this);
    toggleRadioInputs();
    showDescription("Training: Student Resources: tasks covered in the standard WebCRD training sessions.", "var(--doc-box-sr)")
}
document.querySelector("#task-aids-filter").onclick = function(){
    populateTable(currentSorted.sortColumn, currentSorted.direction, "Task Aid")
    toggleSelectedButtonState(this);
    toggleRadioInputs();
    showDescription("Task Aids: short and focused topics of particular interest (FAQs).", "var(--doc-box-ta)");
}
document.querySelector("#user-guides-filter").onclick = function(){
    populateTable(currentSorted.sortColumn, currentSorted.direction, "User Guide")
    toggleSelectedButtonState(this);
    toggleRadioInputs();
    showDescription("User Guides: all information from the online help for a specific module, in PDF format.", "var(--doc-box-ug)")
}
document.querySelector("#system-doc-filter").onclick = function(){
    populateTable(currentSorted.sortColumn, currentSorted.direction, "System Document")
    toggleSelectedButtonState(this);
    toggleRadioInputs();
    showDescription("System Documents: Release Notes, Client Requirements, Backup Procedures, and the Barcode Scanning Worksheet.", "var(--doc-box-other)")
}

// applying the onchange to each Advance Filter radio inputs
document.querySelectorAll("input").forEach(node => {
    node.onchange = function(event){
        populateTable(currentSorted.sortColumn, currentSorted.direction, event.target.value, "role")
        document.querySelector(".selected").classList.toggle("selected");
        document.querySelector("#no-filter").classList.toggle("selected")
        showDescription();
    }
})

// toggling CSS styles
function showAdvancedFilters(){
    document.querySelector("#advanced-filters").classList.toggle("hidden")
    document.querySelector("#advanced-filters-button").classList.toggle("filter-selected")
}
function toggleRadioInputs(){
    document.querySelector("input[checked]").checked = false;
    document.querySelector("#no-role").checked = true;
}
function toggleSelectedButtonState (button){
    document.querySelectorAll(".selected").forEach(node => {
        node.classList.toggle("selected");
    })
    button.classList.toggle("selected")
}
function showDescription(text="", color=""){
    document.querySelector("#category-filter-explanation")?.remove();
    if (text){
        let description = document.createElement("p");
        description.setAttribute("id", "category-filter-explanation")
        description.setAttribute("style", `color:${color}; font-weight:bold`)
        description.innerText = text;
        document.querySelector("#filter-buttons").append(description)
    }
}