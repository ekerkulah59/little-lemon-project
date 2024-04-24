import React from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {
  return (
    <BookingForm
      availbleTimes={props.availbleTimes}
      dispatch={props.dispatch}
      SubmitForm={props.SubmitForm}
    />
  );
};

export default Booking;
