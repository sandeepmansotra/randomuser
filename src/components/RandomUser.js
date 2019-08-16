import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/index.css";

class RandomUser extends Component {
  render() {
    console.log("this.props", this.props);

    return (
      <div>
        {this.props.users.map((user, index) => {
          return (
            <div key={index}>
              <div className="page-wrap">
                <img
                  src={user.picture.large}
                  alt="Photo of Cthulu"
                  className="pic"
                />
                <div id="contact-info" className="vcard">
                  <h1 className="fn" style={{ textTransform: "capitalize" }}>
                    {user.name.title}. {user.name.first}{" "}
                  </h1>
                </div>

                <div className="clear" />
                <dl>
                  <dd className="clear" />
                  <dt>Person Details</dt>
                  <dd>
                    <p style={{ textTransform: "capitalize" }}>
                      <strong>Name:</strong> {user.name.title}.{" "}
                      {user.name.first} {user.name.last}
                      <br />
                      <strong>Gender:</strong> {user.gender}
                      <br />
                      <strong>Email:</strong> {user.email}
                      <br />
                      <strong>Mobile:</strong> {user.cell}
                      <br />
                      <strong>Phone:</strong> {user.phone}
                    </p>
                  </dd>
                  <dd className="clear" />
                  <dt>Address</dt>
                  <dd>
                    <p style={{ textTransform: "capitalize" }}>
                      <strong>Street:</strong> {user.location.street}
                      <br />
                      <strong>City:</strong> {user.location.city}
                      <br />
                      <strong>State:</strong> {user.location.state}
                      <br />
                      <strong>Post Code:</strong> {user.location.postcode}
                      <br />
                      <strong>Coordinates:</strong>
                      Longitude:
                      {user.location.coordinates.longitude}, Latitude:
                      {user.location.coordinates.latitude}
                    </p>
                  </dd>
                  <dd className="clear" />
                  <dt>Login Details</dt>
                  <dd>
                    <p style={{ textTransform: "capitalize" }}>
                      <strong>Username:</strong> {user.login.username}
                      <br />
                      <strong>Password:</strong> {user.login.password}
                    </p>
                  </dd>
                  <dd className="clear" />
                  <dt>Date of Birth</dt>
                  <dd>
                    <p style={{ textTransform: "capitalize" }}>
                      <strong>DOB:</strong> {user.dob.date}
                      <br />
                      <strong>Age:</strong> {user.dob.age}
                    </p>
                  </dd>
                </dl>
                <div className="clear" />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  null
)(RandomUser);
