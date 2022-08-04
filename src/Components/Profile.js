import React from 'react';
import { useHistory } from "react-router-dom";
import {
  Button,
} from 'react-bootstrap';
const Profile = () => {
   const history = useHistory();
  const homePage = () => {
    history.push("/")
}
  return (
    <div>
          <Button size="sm"  onClick={homePage} variant="success">Back</Button>
          <h3>Welcome to DaalChini Shop</h3>
    </div>
    
  );
};

export default Profile;