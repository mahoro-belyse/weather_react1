import React from "react";
export default function Formatedate(props) {
  let day = props.date.getDay();
  let hour = props.date.getHours();
  let minutes = props.date.getMinutes();
  return (
    <di>
      {day} {hour}:{minutes}
    </di>
  );
}
