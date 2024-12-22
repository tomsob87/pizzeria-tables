import { useSelector } from 'react-redux';
import TablesList from "../../features/TablesList/TablesList";

const Home = () => {
    const tables = useSelector((state) => state.tables);
  
    if (tables.length === 0) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h1>All Tables</h1>
        <TablesList />
      </div>
    );
  }

export default Home;