import { listData } from "../../assets/data"
import RowItem from "./RowItem";

export default function Table(props) {
    const {column, direction, filterColumn, filterName, setColumn, setDirection} = props;
    let filteredList = listData.filter(item => {
        // console.log(item)
        if (filterName) {
            return item[filterColumn] == filterName
        } else {
            return item
        }
    })

    const sortTable = array => {
        // console.log(array)
        console.log(column, direction)
        if (direction) {
            return array.sort((a, b) => {
                // console.log(column)
                // console.log(a[column], b[column])
                return 1
                // return a[column].localeCompare(b[column]);
            });
        } else {
            return array.sort((a, b) => {
                // console.log(column)
                // console.log(a[column], b[column])
                return 1
                // return a[column].localeCompare(b[column]);
            }).reverse();
        }
    }

    const handleClick = (e) => {
        console.log(e.target.firstChild.data.toLowerCase().replace(" ", ""))
        if (e.target.firstChild.data.toLowerCase().replace(" ", "") == column){
            setDirection(!direction)
        } else {
            setColumn(e.target.firstChild.data.toLowerCase().replace(" ", ""))
            setDirection(true)
        }
    }

    return (
        <table className="root">
            <thead>
                <tr>
                    <th>
                        <button className={column == "category"? "currently-sorted arrow-sort" : "arrow-sort"} onClick={handleClick}> Category {!direction && column=="category"? "▲" : "▼"}
                        </button>
                    </th>
                    <th>
                        <button className={column == "role"? "currently-sorted arrow-sort" : "arrow-sort"} onClick={handleClick}> Role {!direction && column=="role"? "▲" : "▼"}
                        </button>
                    </th>
                    <th>
                        <button className={column == "name"? "currently-sorted arrow-sort" : "arrow-sort"} onClick={handleClick}> Name {!direction && column=="name"? "▲" : "▼"}
                        </button>
                    </th>
                    <th>Links</th>
                </tr>
            </thead>
            <tbody>
                {
                    sortTable(filteredList).map(item => {
                        // console.log(item)
                        let index= filteredList.indexOf(item)
                        return <RowItem item={item} index={index} key={index}/>
                    })
                }
            </tbody>
        </table>
    )

}