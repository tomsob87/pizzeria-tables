import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import styles from './ChangePeopleAmount.module.scss';

const ChangePeopleAmount = ({ peopleAmount, setPeopleAmount, maxPeopleAmount, setMaxPeopleAmount }) => {
    
    const handlePeopleAmountChange = (event) => {
      const value = Math.max(0, Math.min(10, Number(event.target.value)));
      setPeopleAmount(value);
      if (value > maxPeopleAmount) {
        setMaxPeopleAmount(value);
      }
    };
  
    const handleMaxPeopleAmountChange = (event) => {
      const value = Math.max(0, Math.min(10, Number(event.target.value)));
      setMaxPeopleAmount(value);
      if (peopleAmount > value) {
        setPeopleAmount(value);
      }
    };
  
    return (
        <Stack direction="horizontal" gap={2} className="align-items-center mt-3">
          <Form.Label>People:</Form.Label>
          <Form.Group controlId="peopleAmount" className="w-auto">
            <Form.Control
              type="number"
              value={peopleAmount}
              onChange={handlePeopleAmountChange}
              className={styles.people__amount}
              min="0"
              max="10"
            />
          </Form.Group>
          <div>/</div>
          <Form.Group controlId="maxPeopleAmount" className="w-auto">
            <Form.Control
              type="number"
              value={maxPeopleAmount}
              onChange={handleMaxPeopleAmountChange}
              className={styles.people__amount}
              min="0"
              max="10"
            />
          </Form.Group>
        </Stack>
      );
    };

export default ChangePeopleAmount;