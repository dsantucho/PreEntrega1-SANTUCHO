import React from 'react';
import { PropTypes } from '@mui/material';

function Profile(name, email, favorites) {
  return (
    <div>
        <h2>{name}</h2>
        <h3>{email}</h3>
        {favorites.map((fav,idx)=>{
            return <li key={idx}>{fav}</li>;
        })}
    </div>
  )
}

//use props =usa para validar los datos 
Profile.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    favorites: PropTypes.arrayOf(PropTypes.string)

}

export default Profile