/** @format */

import Players from "./Player";

function Battle(props) {
  return (
    <>
      <div>
        <h1 className="primaryHeading textCenter">instructions</h1>
        <ul className="flex justify-around">
          <li className=" battle-li flex-20 textCenter">
            <p>Enter two Github users</p>
            <div className="imgCnt">
              <img
                className="full-width"
                src="/images/blank-profile-picture-973460.png"
                alt=""
              />
            </div>
          </li>
          <li className="battle-li flex-20 textCenter">
            <p>Battle</p>

            <div className="imgCnt">
              <img
                className="full-width"
                src="/images/fighter-plane-5820486_1280.png"
                alt=""
              />
            </div>
          </li>
          <li className="battle-li flex-20 textCenter">
            <p> See the winner</p>
            <div className="imgCnt">
              <img
                className="full-width"
                src="/images/trophy-6395237.png"
                alt=""
              />
            </div>
          </li>
        </ul>
      </div>

      <Players
        handleSubmit={props.handleSubmit}
        handleChange={props.handleChange}
        players={props.players}
        firstUserData={props.firstUserData}
        secondUserData={props.secondUserData}
        battleStart={props.battleStart}
      />
    </>
  );
}

export default Battle;
