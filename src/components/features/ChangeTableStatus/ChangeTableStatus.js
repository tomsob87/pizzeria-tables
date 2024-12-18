import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const ChangeTableStatus = () => {

    return (
        
        <Stack direction="horizontal" gap={3}>
            <div  className="p-2">
                <p>Status:</p>
            </div>
            <div  className="p-2">
                <Form.Select>
                    <option value="free">Free</option>
                    <option value="busy">Busy</option>
                    <option value="reserved">Reserved</option>
                    <option value="cleaning">Cleaning</option>
                </Form.Select>
            </div>
        </Stack>
    )
}

export default ChangeTableStatus;