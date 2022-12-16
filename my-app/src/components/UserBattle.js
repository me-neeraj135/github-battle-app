/** @format */

function UserBattle(props) {
  //   console.log(props, `btle`);
  let { firstUserData, secondUserData } = props;
  let status = calculateWinner(firstUserData, secondUserData);
  //   console.log(typeof status, `sss`);
  return (
    <div>
      <ul className="userBalCnt flex justify-center">
        {firstUserData && (
          <li className="fuBtl justify-center">
            <span className="stsBar">
              #{status === `Winner` ? `Winner 🥇` : `Loser 🥈`}
            </span>
            <div>
              <img
                style={{ width: `15rem`, height: `15rem` }}
                src={firstUserData.avatar_url}
                alt=""
              />
            </div>
            <p>{firstUserData.name}</p>
            <div className="flex align-center">
              <span>
                <i className="fa-solid fa-user"></i>
              </span>
              <span>{firstUserData.name}</span>
            </div>
            <div className="flex align-center">
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>Followers#{firstUserData.followers} </span>
            </div>
            <div className="flex align-center">
              <span>
                <i className="fa-solid fa-code-branch"></i>
              </span>
              <span>repos#{firstUserData.public_repos}</span>
            </div>
            <div className="flex align-center">
              <span>
                <i className="fa-solid fa-triangle-exclamation"></i>
              </span>
              <span>issues#{firstUserData.public_gists}</span>
            </div>
          </li>
        )}
        {secondUserData && (
          <li className="suBtl">
            <span className="stsBar">
              #{status === `Winner` ? `Loser 🥈` : `Winner 🥇`}
            </span>
            <div>
              <img
                style={{ width: `15rem`, height: `15rem` }}
                src={secondUserData.avatar_url}
                alt=""
              />
            </div>
            <p>{secondUserData.name}</p>
            <div className="flex align-center">
              <span>
                <i className="fa-solid fa-user"></i>
              </span>
              <span>{secondUserData.name}</span>
            </div>
            <div className="flex align-center">
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>Followers#{secondUserData.followers}</span>
            </div>
            <div className="flex align-center">
              <span>
                <i className="fa-solid fa-code-branch"></i>
              </span>
              <span>repos#{secondUserData.public_repos}</span>
            </div>
            <div className="flex align-center">
              <span>
                <i className="fa-solid fa-triangle-exclamation"></i>
              </span>
              <span>issues# {secondUserData.public_gists}</span>
            </div>
          </li>
        )}
      </ul>
      {firstUserData && secondUserData ? (
        <button className="btlReset" onClick={props.battleReset}>
          reset
        </button>
      ) : (
        ``
      )}
    </div>
  );
}

function calculateWinner(a, b) {
  let aFollowers = a.followers;
  let aRepo = a.public_repos;
  let bFollowers = b.followers;
  let bRepo = b.public_repos;

  let aStatus =
    aFollowers * 20 + aRepo > bFollowers * 20 + bRepo ? `Winner` : `Loser`;

  return aStatus;
}
export default UserBattle;
