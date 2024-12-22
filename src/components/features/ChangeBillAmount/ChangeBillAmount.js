import Form from 'react-bootstrap/Form';
import { Stack } from 'react-bootstrap';
import styles from './ChangeBillAmount.module.scss';

    const ChangeBillAmount = ({ bill, setBill }) => {

        const handleBillChange = (event) => {
            setBill(event.target.value);
          };

          return (
            <Stack direction="horizontal" gap={2} className="align-items-center mt-3">
              <Form.Label>Bill:</Form.Label>
              <Form.Group controlId="bill" className="w-auto">
                <Form.Control className={styles.bill__amount}
                  type="number"
                  value={bill}
                  onChange={handleBillChange}
                />
              </Form.Group>
            </Stack>
          );
        };

    export default ChangeBillAmount;