import React from 'react';
import patientData from '../data';
import IndividualRow from './IndividualRow';

class MainBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: patientData
    };
  }
  render(){
    const data = this.state.data.patientData;
    return(
      <main>
        <table className="container mainBox">
          <thead>
            <tr>
              <td><p className="title is-6"> RECENT ORDERS </p></td>
              <td><i className="fas fa-sort-down"></i></td>
            </tr>
          </thead>
          <tbody>
            <tr className="headingsRow">
              <td>PATIENT NAME</td>
              <td>ORDER DATE</td>
              <td>METADATA</td>
              <td>MEDICATION</td>
              <td></td>
            </tr>
            {data &&
                data.map(eachPatient =>
                  <IndividualRow eachPatient={eachPatient} key={eachPatient.patientName}/>
                )}
          </tbody>
        </table>
      </main>
    );
  }
}

export default MainBox;
