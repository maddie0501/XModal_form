import { useState } from "react";
import "./App.css";

const ModalForm = ({ isClose }) => {
  // use { } to destructure isclose

  const handleClickOutside = (e) => {
    if (e.target.className === "modal") {
      // clicekd anywhere outside close form
      isClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim(); // trim to remove extra spaces
    const dob = e.target.dob.value.trim();
    const phone = e.target.phone.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex pattern for email validation

    if (!emailPattern.test(email)) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    const inputDate = new Date(dob);
    const todayDate = new Date();

    if (inputDate > todayDate) {
      alert("Invalid date of birth. Date of birth cannot be in the future");
      return;
    }

    e.target.reset(); // reset once all submit
  };
  return (
    <div className="modal" onClick={handleClickOutside}>
      <div className="modal-content">
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>Fill details</h2>
          <h4>Username:</h4>
          <input
            id="username"
            name="username"
            type="text"
            required
            style={{ width: "100%", height: "30px" }}
          />

          <h4>Email Address:</h4>
          <input
            id="email"
            name="email"
            type="email"
            required
            style={{ width: "100%", height: "30px" }}
          />

          <h4>Phone Number:</h4>
          <input
            id="phone"
            name="phone"
            type="number"
            required
            style={{ width: "100%", height: "30px" }}
          />

          <h4>Date of Birth:</h4>
          <input
            id="dob"
            name="dob"
            type="date"
            required
            style={{ width: "100%", height: "30px" }}
          />

          <div style={{padding:"10px"}}>
            <button type="submit" style={{padding:" 10px 20px 10px 20px", backgroundColor:"royalblue" , border:"none", color:"white", borderRadius:"5px"}}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="box">
      <h1>User Details Modal</h1>

      <button onClick={() => setOpen(true)} style={{padding:" 10px 20px 10px 20px", backgroundColor:"royalblue" , border:"none", color:"white", borderRadius:"5px"}}>Open Form</button>

      {open && <ModalForm isClose={() => setOpen(false)} />}
    </div>
  );
}

export default App;
