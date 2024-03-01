import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user, logout } = useContext(AuthContext);
  const [lists, setLists] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (user) {
      Promise.all([
        fetch(`http://localhost:5000/lists?userId=${user.id}`).then((res) => res.json()),
        fetch(`http://localhost:5000/cards?userId=${user.id}`).then((res) => res.json()),
      ]).then(([userLists, userCards]) => {
        setLists(userLists);
        setCards(userCards);
      });
    }
  }, [user]);
  

  if (!user) {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="dashboard">
      <h1>Welcome, {user.username}</h1>
      <div>
        <h2>Your Lists:</h2>
        <ul>
          {lists.map((list) => (
            <li key={list.id}>{list.title}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Your Cards:</h2>
        <ul>
          {cards.map((card) => (
            <li key={card.id}>{card.title}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
