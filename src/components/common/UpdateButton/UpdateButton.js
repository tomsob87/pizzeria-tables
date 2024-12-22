import Button from 'react-bootstrap/Button';

const UpdateButton = ({ onClick }) => {
  return (
    <Button 
      className="update-button mt-4" 
      variant="primary" 
      onClick={onClick}>Update</Button>
  );
};

export default UpdateButton;