import { useSelector } from "react-redux";
import TableInfo from "../TableInfo/TableInfo";

const TablesList = () => {
const tables = useSelector((state) => state.tables);

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

    return (
    
    <div>
        {tables.map((table) => (
            <TableInfo 
                key={table.id} 
                id={table.id} 
                status={capitalizeFirstLetter(table.status)}  />
        ))}
    </div>
);
};

export default TablesList;