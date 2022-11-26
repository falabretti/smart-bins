import React from 'react';
import { useLocation } from "react-router-dom";

function SensorDetails(props: any) {

  const { state } = useLocation();

  console.log(state);

  return (
    <div>SensorDetails</div>
  )
}

export default SensorDetails;
