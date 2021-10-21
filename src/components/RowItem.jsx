
export default function RowItem(props) {
    const {item, index} = props;
    // console.log(index)

    return (
        <tr className={index%2 === 0? "even" : "odd"}>
            <td>{item.category}</td>
            <td>{item.role}</td>
            <td>{item.name}</td>
            <td>
                <a href="#" className="button table" target="_blank">PDF</a>
                {item.topic? <a href="#" className="button table" target="_blank">TOPIC</a>: ""}
                {item.video? <a href="#" className="button table" target="_blank">VIDEO</a>: ""}
                {item.docx? <a href="#" className="button table" target="_blank">.docx</a>: ""}
            </td>
        </tr>
    )

}