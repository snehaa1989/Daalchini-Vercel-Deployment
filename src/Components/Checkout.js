import React from 'react';
import {useState} from 'react';
import { useHistory } from "react-router-dom";
import {
  Button,
} from 'react-bootstrap';
const Checkout = () => {
  const [phone, setPhone] = useState('+91');
  const history = useHistory();
  const homePage = () => {
    history.push("/")
}
  // 👇️ called every time input's value changes
  const handleChange = event => {
    setPhone(event.target.value);
  };

  console.log(phone);
  return (
    <div>
    <Button size="sm"  onClick={homePage} variant="success">Back</Button>
    <h3 align="center">Checkout</h3>
  <label for="phone">Enter your phone number:</label>
<input type="tel" id="phone" name="phone" onChange={handleChange} pattern="+94[7-9]{2}-[0-9]{3}-[0-9]{4}" value={phone}/>
<Button size="sm"  onClick={() => alert("SUCCESS! ORDER PLACED")} variant="dark">Place Order</Button>

 </div>
 
  );
};

export default Checkout;
