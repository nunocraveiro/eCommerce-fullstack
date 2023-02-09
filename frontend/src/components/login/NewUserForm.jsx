import { useRef } from "react";
import axios from 'axios';

function NewUserForm({onSubmit}) {
  const emailRef = useRef();
  const pwRef = useRef();
  const pwConfirmRef = useRef();
  const userTypeRef = useRef();
  const storeIdRef = useRef();

  const addUser = e => {
    e.preventDefault();
    if (pwRef.current.value !== pwConfirmRef.current.value) {
      return console.error('Passwords do not match');
    }
    axios.post('http://localhost:8000/api/user', {
		  // Data to be sent to the server
		  email: emailRef.current.value,
		  password: pwConfirmRef.current.value,
      role: userTypeRef.current.value,
      storeId: storeIdRef.current.value
	  })
	  .then(response => {
	  	console.log(response.data);
	  })
	  .catch(function (error) {
	  	console.error(error);
	  });
  } 

  return (
      <>
        <h3>Create new user</h3>
        <form onSubmit={addUser} className={"create_user_form"}>
          <label htmlFor="email_input">Email</label>
          <input placeholder={"email"} id={"email_input"} ref={emailRef}/>
          <br/>
          <label htmlFor="password_input">Password</label>
          <input placeholder={"password"} id={"password_input"} ref={pwRef}/>
          <br/>
          <label htmlFor="confirmed_password_input">Confirm password</label>
          <input placeholder={"confirm password"} id={"confirmed_password_input"} ref={pwConfirmRef}/>
          <br/>
          <label htmlFor="type_input">Type of User</label>
          <select placeholder={"user"} id={"type_input"} ref={userTypeRef}>
            <option value={"user"}>User</option>
            <option value={"admin"}>Admin</option>
          </select>
          <br/>
          <select defaultValue={""} id={"type_input"} ref={storeIdRef}>
            <option value="" disabled>Select your store</option>
            <option value={1}>Hansen and Sons</option>
            <option value={2}>Littel, Walter and Bartoletti</option>
            <option value={3}>Kassulke-Cole</option>
            <option value={4}>Steuber LLC</option>
            <option value={5}>Collier, Kassulke and Schinner</option>
            <option value={6}>Smith Group</option>
            <option value={7}>Rolfson, Pollich and McDermott</option>
            <option value={8}>Metz, Schaden and Bashirian</option>
            <option value={9}>Yundt-Russel</option>
            <option value={10}>Rice-Kovacek</option>
          </select>
          <br/>
          <input type={'submit'}/>
        </form>
      </>
  )
}

export default NewUserForm;