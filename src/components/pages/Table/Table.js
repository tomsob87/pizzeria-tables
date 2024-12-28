import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { updateTable } from '../../../redux/tablesReducer';

import UpdateButton from "../../common/UpdateButton/UpdateButton";
import ChangeBillAmount from "../../features/ChangeBillAmount/ChangeBillAmount";
import ChangePeopleAmount from "../../features/ChangePeopleAmount/ChangePeopleAmount";
import ChangeTableStatus from "../../features/ChangeTableStatus/ChangeTableStatus";

const Table = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const table = useSelector((state) => state.tables.find(table => table.id === id));
  const [status, setStatus] = useState('');
  const [peopleAmount, setPeopleAmount] = useState(0);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(0);
  const [bill, setBill] = useState(0);

  useEffect(() => {
    if (table) {
      setStatus(table.status);
      setPeopleAmount(table.peopleAmount);
      setMaxPeopleAmount(table.maxPeopleAmount);
      setBill(table.bill);
    }
  }, [table]);

  const handleUpdate = async () => {
    const updatedTable = {
      ...table,
      status,
      peopleAmount,
      maxPeopleAmount,
      bill,
    };

    try {
      const response = await fetch(`https://ab90b671-5766-4aab-80aa-86d4a1844a70-00-2uv0nvsxbqyd2.spock.replit.dev/api/tables/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTable),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch(updateTable(data));
        navigate('/');
      } else {
        console.error('Failed to update table');
      }
    } catch (error) {
      console.error('Error updating table:', error);
    }
  };

  if (!table) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Table {table.id} </h1>
      <ChangeTableStatus 
        status={status} 
        setStatus={setStatus} 
        setPeopleAmount={setPeopleAmount} 
        setMaxPeopleAmount={setMaxPeopleAmount} 
        setBill={setBill} 
      />
      {(status === 'busy' || status === 'reserved') && (
        <>
          <ChangePeopleAmount 
            peopleAmount={peopleAmount} 
            setPeopleAmount={setPeopleAmount} 
            maxPeopleAmount={maxPeopleAmount} 
            setMaxPeopleAmount={setMaxPeopleAmount} 
          />
          {status === 'busy' && <ChangeBillAmount bill={bill} setBill={setBill} />}
        </>
      )}
      <UpdateButton onClick={handleUpdate} />
    </div>
  );
};

export default Table;