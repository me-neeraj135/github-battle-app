/** @format */
import { React, useState, useEffect } from "react";

import Menu from "./Menu";

import Loader from "./Loader";
import Card from "./Card";

function Popular(props) {
  console.log(props.theme, `ppp`);
  const [lang, setLang] = useState(`All`);
  const [data, setData] = useState();

  const axiosData = () => {
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${lang}&sort=stars&order=desc&type=Repositories`
    )
      .then(res => res.json())
      .then(data => setData(data.items));
  };
  useEffect(() => {
    axiosData();
  }, [lang]);

  return (
    <div>
      <Menu handleMenu={setLang} lang={lang} />
      <main>
        <ul className={props.theme === `dark` ? `bgColor` : `cardUl`}>
          {data ? (
            data.map((elm, index) => {
              return <Card key={elm.id} index={index} data={elm} />;
            })
          ) : (
            <Loader />
          )}
        </ul>
      </main>
    </div>
  );
}

export default Popular;
