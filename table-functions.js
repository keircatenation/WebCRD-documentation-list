const table = document.querySelector("#documentation-list");

const currentSorted = {
	sortColumn: "",
	direction: "",
	filter: {
		filterColumn: "",
		filterName: ""
	}
}

const listHeader = [
    "Category",
    "Role",
    "Name",
]

// for rendering the table to the screen:
    // sortColumn = string that says which table column we're sorting by
    // sortDirection = boolean value where true is sorting alphabetically and false is sorting reverse alphabetically
    // columnFilter = string, the role name that we're currently filtering by
    // filterColumn = string, the column that we're filtering by
function populateTable(sortColumn, sortDirection, columnFilter="", filterColumn="category"){
    currentSorted.sortColumn = sortColumn;
    currentSorted.direction = sortDirection;
    currentSorted.filter.filterColumn = filterColumn;
    currentSorted.filter.filterName = columnFilter;
    
    emptyNode(table);
    
    createTableHeader(currentSorted.sortColumn, currentSorted.direction)

    let filteredList = listData.filter(item => {
        if (currentSorted.filter.filterName) {
            return item[currentSorted.filter.filterColumn] === currentSorted.filter.filterName;
        } else {
            return item;
        }
    });
    sortTable(filteredList, currentSorted.sortColumn, currentSorted.direction).forEach(item => {
        createTableRow(item, filteredList)
    })
}

// for sorting the table:
    // array = the array that we're worting
    // column = the column we're sorting by
    // sortDirection = boolean that decides alphabetical or reverse
function sortTable(array, column, sortDirection){
    if (sortDirection) {
        return array.sort((a,b) => {
            return a[column].localeCompare(b[column]);
        })
    } else {
        return array.sort((a,b) => {
            return a[column].localeCompare(b[column]);
        }).reverse()
    }
}

// creates the table header string template literal
    // sortedColumn = the column that we're sorting by
    // sortDirection = boolean that decides alphabetical or reverse
function createTableHeader(sortedColumn, sortDirection){
    let headerRow = document.createElement("tr")
    
    listHeader.forEach(heading => {
        let bool = sortedColumn == heading.toLocaleLowerCase();

        let headerContent = document.createElement("th");
        let button = document.createElement("button");
        button.setAttribute("id", `${heading.toLocaleLowerCase()}-sort`);
        button.setAttribute("class", `arrow-sort`);
        if (bool) {
            button.classList += ` currently-sorted`
        }
        button.setAttribute("onclick", createHeaderLinks(heading, bool));

        button.innerText = `${heading}  ${(bool && sortDirection? "▼" : "▲")}`
        
        headerContent.appendChild(button)
        headerRow.appendChild(headerContent);
    })

    let linksHeading = document.createElement("th");
    linksHeading.innerText = "Links";
    headerRow.appendChild(linksHeading)
    table.append(headerRow)
}

// creates template literals that become the onclick events for each sorting button, updating as the data updates
function createHeaderLinks(listHeader, justSorted){
    return `populateTable('${listHeader.toLocaleLowerCase()}', ${justSorted? !currentSorted.direction: currentSorted.direction}, '${currentSorted.filter.filterName}', '${currentSorted.filter.filterColumn}')`
}

// creates the string template literal for a single table row; the array passed through is in order to style the rows one color or another
    // object = the data object from our sort function
    // array = the array the object is in
function createTableRow(object, array){
    let index = array.indexOf(object)

    let row = document.createElement("tr");
    if (index%2 == 0){
        row.setAttribute("style", "background-color:#efefef")
    }
    let category = document.createElement("td")
    category.innerText = object.category;

    let role = document.createElement("td");
    role.innerText = object.role;

    let name = document.createElement("td");
    name.innerText = object.name;

    let links = document.createElement("td");
    createLinks(links, object)

    row.append(category, role, name, links)
    table.appendChild(row)
}

function createLinks(element, object){
    let pdf = document.createElement("a");
    pdf.setAttribute("href", object.pdf[0]);
    pdf.setAttribute("title", object.pdf[1]);
    pdf.setAttribute("alt", object.pdf[1])
    pdf.setAttribute("class", "button table");
    pdf.setAttribute("target", "_blank")
    pdf.innerText = "PDF"
    element.append(pdf);

    if (object.topic){
        let topic = document.createElement("a");
        topic.setAttribute("href", object.topic[0]);
        topic.setAttribute("title", object.topic[1]);
        topic.setAttribute("alt", object.topic[1])
        topic.setAttribute("class", "button table");
        topic.setAttribute("target", "_blank")
        topic.innerText = "Topic"
        element.append(topic);
    }
    if (object.video){
        let video = document.createElement("a");
        video.setAttribute("href", object.video[0]);
        video.setAttribute("title", object.video[1]);
        video.setAttribute("alt", object.video[1])
        video.setAttribute("class", "button table");
        video.setAttribute("target", "_blank")
        video.innerText = "Video"
        element.append(video);
    }
    if (object.docx){
        let docx = document.createElement("a");
        docx.setAttribute("href", object.docx[0]);
        docx.setAttribute("title", object.docx[1]);
        docx.setAttribute("alt", object.docx[1])
        docx.setAttribute("class", "button table");
        docx.setAttribute("target", "_blank")
        docx.innerText = ".docx"
        element.append(docx);
    }
}

function emptyNode( elem ) {

    if ( elem != null ) {
        while ( elem.hasChildNodes() ) {
            elem.removeChild( elem.lastChild );
        }
    }
}