/** @format */

function Players(props) {
  // console.log(props, `ppp`);
  let enabledFirst = props.players.firstUser.length > 0;
  let enabledSec = props.players.secondUser.length > 0;
  return (
    <>
      <div>
        <h2 className="primaryHeading textCenter">Players</h2>
      </div>
      <div className="inputCnt flex justify-around">
        <div className="flex-40">
          {props.firstUserData ? (
            <FirstPlayer user={props.firstUserData} />
          ) : (
            <>
              <label htmlFor="firstUser"> first player</label> <br />
              <form
                className=" flex justify-between align-center"
                onSubmit={e => props.handleSubmit(e)}
              >
                <input
                  type="text"
                  placeholder="github username"
                  id="firstUser"
                  value={props.players.firstUser}
                  onChange={props.handleChange}
                />
                <input
                  className={enabledFirst ? `actBtn` : `plyBtn`}
                  type="submit"
                  value="submit"
                  disabled={!enabledFirst}
                />
              </form>
            </>
          )}
        </div>

        <div className="flex-40">
          {props.secondUserData ? (
            <SecondPlayer user={props.secondUserData} />
          ) : (
            <>
              <label htmlFor="secondUser"> second player</label> <br />
              <form
                className=" flex   justify-between align-center"
                onSubmit={e => props.handleSubmit(e)}
              >
                <input
                  type="text"
                  placeholder="github username"
                  id="secondUser"
                  value={props.players.secondUser}
                  onChange={props.handleChange}
                />
                <input
                  className={enabledSec ? `actBtn` : `plyBtn`}
                  type="submit"
                  value="submit"
                  disabled={!enabledSec}
                />
              </form>
            </>
          )}
        </div>
      </div>
      {props.firstUserData && props.secondUserData ? (
        <button className="userBtlBtn" onClick={props.battleStart}>
          Battle
        </button>
      ) : (
        ``
      )}
    </>
  );
}

export function FirstPlayer(props) {
  // console.log(props, `ff`);

  return (
    <div className="chip">
      <img src={props.user.avatar_url} alt={props.user.name} />
      {props.user.name}
      <span className="closeBtn">&times;</span>
    </div>
  );
}

export function SecondPlayer(props) {
  // console.log(props, `ss`);

  return (
    <div className="chip">
      <img src={props.user.avatar_url} alt={props.user.name} />
      {props.user.name}

      <span className="closeBtn">&times;</span>
    </div>
  );
}

export default Players;
