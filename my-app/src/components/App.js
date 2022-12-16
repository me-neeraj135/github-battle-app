/** @format */

import { React, Component } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Battle from "./Battle";
import Popular from "./Popular";
import getUser from "./Api";
import UserBattle from "./UserBattle";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: `light`,
      enableMode: `dark`,
      battle: false,
      player: {
        firstUser: "",
        secondUser: "",
      },
      firstUserData: "",
      secondUserData: "",
    };
  }

  changeTheme = () => {
    let { theme, enableMode } = this.state;
    if (theme === `light` && enableMode === `dark`) {
      this.setState(prevState => {
        return {
          theme: (prevState.theme = `dark`),
          enableMode: (prevState.enableMode = `light`),
        };
      });
    } else {
      this.setState(prevState => {
        return {
          theme: (prevState.theme = `light`),
          enableMode: (prevState.enableMode = `dark`),
        };
      });
    }
  };
  componentDidUpdate() {
    document.body.className = this.state.theme;
  }

  handleSubmit = async e => {
    e.preventDefault();
    let id = e.target.elements[0].id;
    let data = "";
    // console.log(e.target.elements[0].id);

    switch (id) {
      case `firstUser`:
        data = await getUser(this.state.player.firstUser);
        // console.log(data, `sss`);
        this.setState({ firstUserData: data ? data : `` });
        break;

      case `secondUser`:
        data = await getUser(this.state.player.secondUser);
        this.setState({ secondUserData: data });
        break;
      default:
        break;
    }
  };

  handleChange = e => {
    switch (e.target.id) {
      case `firstUser`:
        this.setState({
          player: {
            firstUser: e.target.value,
            secondUser: this.state.player.secondUser,
          },
        });
        break;

      case `secondUser`:
        this.setState({
          player: {
            firstUser: this.state.player.firstUser,
            secondUser: e.target.value,
          },
        });
        break;

      default:
        break;
    }
  };

  battleStart = () => {
    this.setState({ battle: !this.state.battle });
  };
  battleReset = () => {
    this.setState({
      battle: !this.state.battle,
      firstUserData: "",
      secondUserData: "",
      player: {
        firstUser: "",
        secondUser: "",
      },
    });
  };

  render() {
    return (
      <BrowserRouter>
        <>
          <header className="flex justify-around">
            <div>
              <NavLink activeclassname="active" to="/popular">
                <span className="headerSpn popular">popular</span>
              </NavLink>

              <NavLink activeclassname="active" to="/" exact="true">
                <span className="headerSpn battle">Battle</span>
              </NavLink>
            </div>
            <div className="flex align-center">
              <span style={{ marginRight: `1rem` }}>
                Enable {this.state.enableMode} mode
              </span>
              {this.state.enableMode === `light` ? (
                <span
                  style={{ width: `1rem`, height: `1rem` }}
                  onClick={this.changeTheme}
                >
                  <i className="fa-solid fa-sun"></i>
                </span>
              ) : (
                <span
                  style={{ width: `1rem`, height: `1rem` }}
                  onClick={this.changeTheme}
                >
                  <i className="fa-regular fa-moon"></i>
                </span>
              )}
            </div>
          </header>

          <Routes>
            <Route
              path="/popular/*"
              element={<Popular theme={this.state.theme} />}
            />

            <Route
              path="/"
              element={
                this.state.battle ? (
                  <UserBattle
                    firstUserData={this.state.firstUserData}
                    secondUserData={this.state.secondUserData}
                    battleReset={this.battleReset}
                  />
                ) : (
                  <Battle
                    handleSubmit={this.handleSubmit}
                    players={this.state.player}
                    handleChange={this.handleChange}
                    firstUserData={this.state.firstUserData}
                    secondUserData={this.state.secondUserData}
                    battleStart={this.battleStart}
                  />
                )
              }
            />
          </Routes>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
