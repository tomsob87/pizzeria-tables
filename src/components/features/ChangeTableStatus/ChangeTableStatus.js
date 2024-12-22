import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const ChangeTableStatus = ({ status, setStatus, setPeopleAmount, setMaxPeopleAmount, setBill }) => {
    const handleStatusChange = (event) => {
      const newStatus = event.target.value;
      setStatus(newStatus);
      if (newStatus === 'busy' || newStatus === 'reserved') {
        setPeopleAmount(0);
        setMaxPeopleAmount(0);
        setBill(0);
      }
    };
  
    return (
      <Stack direction="horizontal" gap={2} className="align-items-center mt-3">
        <Form.Label>Status:</Form.Label>
        <Form.Select value={status} onChange={handleStatusChange}>
          <option value="free">Free</option>
          <option value="busy">Busy</option>
          <option value="reserved">Reserved</option>
          <option value="cleaning">Cleaning</option>
        </Form.Select>
      </Stack>
    );
  };

export default ChangeTableStatus;