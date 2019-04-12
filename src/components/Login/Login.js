import React from "react";
import "./Login.css";
import fetchLogin from "../../services/fetchLogin";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: "nav-link",
      isActive2: "nav-link  active",
      isActive3: "isShowing",
      isActive4: " isNotShowing",
      email: "",
      password: "",
      username: ""
    };
  }
  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  switchClass = () => {
    this.setState({
      isActive: "nav-link ",
      isActive2: "nav-link active",
      isActive3: " isShowing",
      isActive4: " isNotShowing"
    });
  };
  switchClass2 = () => {
    this.setState({
      isActive: "nav-link active",
      isActive2: "nav-link ",
      isActive3: " isNotShowing",
      isActive4: " isShowing"
    });
  };
  loginRequest = () => {
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    fetchLogin(data);
  };

  render() {
    return (
      <div className="row">
        <div className="col-6 text-white">
          <h2>Bitbook</h2>
          <p>
            Bitbook is new super cool social network.We had vision to connect
            people and make them believe in better future.It's free to use but
            we need some money to survive,so if you have some extra cash please
            give it to us.More options coming very soon so be ready to flip out
            .We won't let you down.Or we will,let's gamble.
          </p>
        </div>
        <div className="col-6 ">
          <div className="card text-center">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a
                    className={`nav-link ${this.state.isActive2}`}
                    onClick={this.switchClass}
                    href="#"
                  >
                    Login
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className={`nav-link ${this.state.isActive}`}
                    onClick={this.switchClass2}
                    href="#"
                  >
                    Register
                  </a>
                </li>
              </ul>
            </div>

            <div className="card-body">
              <div className={this.state.isActive3}>
                <div className="row">
                  <div className="col-12">
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text"
                          id="inputGroup-sizing-default"
                        >
                          Email:
                        </span>
                      </div>
                      <input
                        value={this.state.email}
                        onChange={this.onInputChange}
                        name="email"
                        type="text"
                        class="form-control text-dark"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text"
                          id="inputGroup-sizing-default"
                        >
                          Password:
                        </span>
                      </div>
                      <input
                        value={this.state.password}
                        onChange={this.onInputChange}
                        name="password"
                        type="text"
                        class="form-control text-dark"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <a
                    onClick={this.loginRequest}
                    href="#"
                    className="btn btn-primary ml-3"
                  >
                    Login
                  </a>
                </div>
              </div>
              <div className={this.state.isActive4}>
                <div className="row">
                  <div className="col-12">
                    <div class="input-group mb-3 text-dark">
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text"
                          id="inputGroup-sizing-default"
                        >
                          Enter name:
                        </span>
                      </div>
                      <input
                        value={this.state.username}
                        onChange={this.onInputChange}
                        name="username"
                        type="text"
                        class="form-control text-dark"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text"
                          id="inputGroup-sizing-default"
                        >
                          Enter Email:
                        </span>
                      </div>
                      <input
                        value={this.state.email}
                        onChange={this.onInputChange}
                        name="email"
                        type="text"
                        class="form-control"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text"
                          id="inputGroup-sizing-default"
                        >
                          Enter Password:
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <a href="#" className="btn btn-primary ml-3">
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;