import React, { Component } from "react";

export default class CreateGroupForm extends Component {
  render() {
    return (
      <form style={styles.form} action="">
        <span>Enter IDs of users to invite:</span>
        <input type="text" style={styles.textInput} name="userIds" placeholder="e.g. INAN#GOSH9EF" onChange={(event) => this.textChange(event)}/>
        <span>Invited users:</span>
        <ul className="invitedUsersWrapper">
            <li>
                <span>SAMANI#G8RVI4</span>
                <button id="deleteInvite">
                    <i className="fas fa-times"></i>
                </button>
            </li>
        </ul>
        {/* <button className="invitesButton">Invites</button> */}
      </form>
    )
  }
}


const styles = {
  form: {
    height: '70%',
    position: 'relative'
  },
  textInput: {
    display: 'block',
    width: '80%',
    height: '40px',
    fontSize: '17px',
    borderRadius: '17px',
    textIndent: '12px',
    border: 'none',
    boxShadow: '0 5px 15px -5px rgba(0, 0, 0, 0.1)',
    margin: '10px auto 20px auto',
  }
}
