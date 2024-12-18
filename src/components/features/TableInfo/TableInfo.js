import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from 'react-router-dom';


const TableInfo = ({ id, status }) => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/table/${id}`);
  }

  return (
    <Container fluid>
        <Stack direction="horizontal" gap={3} className="mt-4 pt-3 border-bottom border-1">
            <div className="p-2"><p className="fs-5 fw-bold">Table {id}</p></div>
            <div className="p-2"><p className="fs-5 fw-bold">Status: <span className="fw-normal p-3">{status}</span></p></div>
            <div className="p-2 ms-auto">
              <Button 
                variant="primary" 
                type="button" 
                onClick={handleButtonClick}
                >Show more</Button>
              </div>
        </Stack>
    </Container>
  );
};

export default TableInfo;