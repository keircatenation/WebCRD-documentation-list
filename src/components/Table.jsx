import { listData } from "../../assets/data"
import RowItem from "./RowItem";

export default function Table(props) {
    const {column, direction, filterColumn, filterName, setColumn, setDirection} = props;
    
    let filteredList = listData.filter(item => {
        if (filterName) {
            return item[filterColumn] == filterName
        } else {
            return item
        }
    })

    const sortTable = array => {
        if (direction) {
            return array.sort((a, b) => {
                return a[column].localeCompare(b[column]);
            });
        } else {
            return array.sort((a, b) => {
                return a[column].localeCompare(b[column]);
            }).reverse();
        }
    }

    const handleClick = (e) => {
        console.log(e.target.value)
        if (e.target.value == column){
            setDirection(!direction)
        } else {
            setColumn(e.target.value)
            setDirection(true)
        }
    }

    return (
        <table className="root">
            <thead>
                <tr>
                    <th>
                        <button className={column == "category"? "currently-sorted arrow-sort" : "arrow-sort"} onClick={handleClick} value="category">Category {!direction && column=="category"? "▲" : "▼"}
                        </button>
                    </th>
                    <th>
                        <button className={column == "role"? "currently-sorted arrow-sort" : "arrow-sort"} onClick={handleClick} value="role">Role {!direction && column=="role"? "▲" : "▼"}
                        </button>
                    </th>
                    <th>
                        <button className={column == "name"? "currently-sorted arrow-sort" : "arrow-sort"} onClick={handleClick} value="name">Name {!direction && column=="name"? "▲" : "▼"}
                        </button>
                    </th>
                    <th>Links</th>
                </tr>
            </thead>
            <tbody>
                {
                    sortTable(filteredList).map(item => {
                        let index= filteredList.indexOf(item)
                        return <RowItem item={item} index={index} key={index}/>
                    })
                }
            </tbody>
        </table>
    )

}