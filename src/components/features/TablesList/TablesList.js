import { useSelector } from "react-redux";
import TableInfo from "../TableInfo/TableInfo";

const TablesList = () => {
const tables = useSelector((state) => state.tables);

    return (
    
    <div>
        {tables.map((table) => (
            <TableInfo 
                key={table.id} 
                id={table.id} 
                status={table.status} />
        ))}
    </div>
);
};

export default TablesList;