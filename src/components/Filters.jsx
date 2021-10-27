import { useState } from "react";

export default function Filters(props) {
    const {setFilterColumn, setFilterName} = props;
    const [showFilters, setShowFilters] = useState(false)

    const handleButtonClick = e =>{
        document.querySelectorAll("input[type=radio]").forEach(node => node.checked = false)

        switch(e.target.innerText){
            case "All":
                setFilterName("")
                setFilterColumn("")
                break
            case "System Documents":
                setFilterName("System Document")
                setFilterColumn("category")
                break
            case "Task Aids":
                setFilterName("Task Aid")
                setFilterColumn("category")
                break
            case "User Guides":
                setFilterName("User Guide")
                setFilterColumn("category")
                break
            default:
                setFilterColumn("category")
                setFilterName(e.target.innerText)
                break
        }
        document.querySelector(".selected")?.classList.toggle("selected")
        e.target.classList.toggle("selected")
    }

    const showRoleFilters = () => {
        setShowFilters(!showFilters)
    }

    const handleRadioChange = e =>{
        // console.log(e.target.value)
        setFilterColumn("role");
        setFilterName(e.target.value)

        document.querySelector(".selected")?.classList.toggle("selected")
    }

    return (
        <div>
            <button id="category-all" className="button selected all" onClick={handleButtonClick}>All</button>
            <button className="button system-doc" onClick={handleButtonClick}>System Documents</button>
            <button className="button task-aid" onClick={handleButtonClick}>Task Aids</button>
            <button className="button training" onClick={handleButtonClick}>Training</button>
            <button className="button user-guide" onClick={handleButtonClick}>User Guides</button>
            <button className="button filter-button" onClick={showRoleFilters}>Filter by Role</button>

            <div id="advanced-filters" className={showFilters ? "filter-box" : "filter-box hidden"} onChange={handleRadioChange}>
                <label htmlFor="administrator">
                    <input type="radio" id="administrator" value="Administrator" name="roleFilters"/> Administrator</label>
                <label htmlFor="approval">
                    <input type="radio" id="approval" value="Approval" name="roleFilters"/> Approval</label>
                <label htmlFor="autostock">
                    <input type="radio" id="autostock" value="AutoStock" name="roleFilters"/> AutoStock</label>
                <label htmlFor="impactVDP">
                    <input type="radio" id="impactVDP" value="ImpactVDP" name="roleFilters"/> ImpactVDP</label>
                <label htmlFor="invoicing">
                    <input type="radio" id="invoicing" value="Invoicing" name="roleFilters"/> Invoicing</label>
                <label htmlFor="production">
                    <input type="radio" id="production" value="Production" name="roleFilters"/> Production</label>
                <label htmlFor="review">
                    <input type="radio" id="review" value="Review" name="roleFilters"/> Review</label>
                <label htmlFor="site">
                    <input type="radio" id="site" value="Site" name="roleFilters"/> Site</label>
                <label htmlFor="workgroup-catalogs">
                    <input type="radio" id="workgroup-catalogs" value="Workgroup &amp; Catalogs" name="roleFilters"/> Workgroup and Catalogs</label>
            </div>
        </div>
    )

}