import { useState } from "react";
import "./App.css";

function App() {
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    movie: "",
    tickets: "",
    showTime: "",
    seatType: ""
  });

  const prices = {
    Normal: 150,
    Premium: 250,
    VIP: 400
  };

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // BASIC FIELD VALIDATION
    if (
      !booking.name ||
      !booking.email ||
      !booking.movie ||
      !booking.tickets ||
      !booking.showTime ||
      !booking.seatType
    ) {
      alert("⚠️ Please fill all details!");
      return;
    }

    // STRICT TICKET VALIDATION
    const ticketCount = Number(booking.tickets);

    if (isNaN(ticketCount) || ticketCount < 1) {
      alert("⚠️ Number of tickets must be at least 1!");
      return;
    }

    const totalPrice = ticketCount * prices[booking.seatType];

    alert(
      `🎉 Booking Confirmed!\n
Name: ${booking.name}
Movie: ${booking.movie}
Show Time: ${booking.showTime}
Tickets: ${ticketCount}
Seat Type: ${booking.seatType}
Total Price: ₹${totalPrice}`
    );
  };

  return (
    <div className="container">
      <h1>Movie Ticket Booking</h1>

      <form onSubmit={handleSubmit} className="form-box">

        <input
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          required
        />

        <input
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
          required
        />

        <select name="movie" onChange={handleChange} required>
          <option value="">Select a Movie</option>
          <option value="KGF 3">KGF 3</option>
          <option value="Pushpa 2">Pushpa 2</option>
          <option value="Jawan 2">Jawan 2</option>
          <option value="Kantara 2">Kantara 2</option>
          <option value="War 3">War 3</option>
          <option value="love">War 3</option>
          <option value="pathan">pathan</option>
        </select>

        <input
          type="number"
          name="tickets"
          min="1"
          placeholder="Number of Tickets"
          onChange={handleChange}
          required
        />

        <select name="showTime" onChange={handleChange} required>
          <option value="">Select Show Time</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="1:00 PM">1:00 PM</option>
          <option value="4:00 PM">4:00 PM</option>
          <option value="7:00 PM">7:00 PM</option>
        </select>

        <select name="seatType" onChange={handleChange} required>
          <option value="">Select Seat Type</option>
          <option value="Normal">Normal - ₹150</option>
          <option value="Premium">Premium - ₹250</option>
          <option value="VIP">VIP - ₹400</option>
        </select>

        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
}

export default App;
