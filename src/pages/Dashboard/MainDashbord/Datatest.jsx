import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getDeposits } from '../../../redux/features/answerSlice';

const DepositsComponent = () => {
  const dispatch = useDispatch();
 const { user } = useSelector((state) => ({ ...state.auth }));

  const { deposit, loading, error } = useSelector((state) => state.deposits);
 const token=user.access;
  useEffect(() => {
    dispatch(getDeposits({ token, toast }));
  }, [dispatch, token]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Deposits</h1>
      {deposit?.length > 0 ? (
        <ul>
          {deposit.map((item) => (
            <li key={item.id}>{item.name}</li> // Adjust according to your data structure
          ))}
        </ul>
      ) : (
        <p>No deposits found</p>
      )}
    </div>
  );
};

export default DepositsComponent;
