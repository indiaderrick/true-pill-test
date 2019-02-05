import React from 'react';

function IndividualRow({eachPatient}){
  return(
    <tr className="line" key={eachPatient.patientName}>
      <th> <span id="circle" style= {{backgroundColor: `${eachPatient.status}`}}></span> {eachPatient.patientName } </th>
      <td> {eachPatient.orderDate } </td>
      <td> {eachPatient.metadata } </td>
      <td> {eachPatient.medication } </td>
      <td><button className="button is-rounded is-primary">DETAILS</button></td>
    </tr>
  );
}

export default IndividualRow;
