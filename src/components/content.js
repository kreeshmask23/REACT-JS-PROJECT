import React from "react";
import ReactDOM from "react-dom";
import './header.css';
function Content(){
    return (
      
        <div class="tables">
        <table class="tab">
        <thead>
        <tr>
            <th>S.No</th>
            <th>Reg.No</th>
            <th>Name</th>
            <th>Dept</th>
            <th>Phone number</th>
        </tr>
        </thead>
        <tbody>
            <tr>
              <td>1</td>
              <td>720721110057</td>
              <td>Aadharshine</td>
              <td>IT</td>
              <td>6372398816</td>
            </tr>
            <tr>
              <td>2</td>
              <td>720721110086</td>
              <td>Kreeshma</td>
              <td>IT</td>
              <td>8856786723</td>
            </tr>
            <tr>
              <td>3</td>
              <td>720721110089</td>
              <td>Mathesh Kumar</td>
              <td>IT</td>
              <td>9677830473</td>
            </tr>
            <tr>
              <td>4</td>
              <td>720721110123</td>
              <td>Thirumal</td>
              <td>IT</td>
              <td>9834673269</td>
            </tr>
            <tr>
              <td>5</td>
              <td>720721110024</td>
              <td>Kavitha</td>
              <td>IT</td>
              <td>9848945704</td>
            </tr>
    
        </tbody>
        </table>
<br></br>
<br></br>
<form>
  <h2>LOGIN FORM</h2>
  <tr>
    <td>Username</td>
    <td><input type="text" placeholder="Enter your username"></input></td>
  </tr>
  <tr>
    <td>Password</td>
    <td><input type="text" placeholder="Enter your password"></input></td>
  </tr>
  <tr>
    <td colspan="2">
      <div class="button-container">
        <button type="submit">Login</button>
        <button type="reset">Cancel</button>
      </div>
    </td>
  </tr>
</form>
</div>
        
  );
  }
  
export default Content;