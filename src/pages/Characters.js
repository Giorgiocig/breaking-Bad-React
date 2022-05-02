import React, { useState } from "react";
import Card from "../CharactersComponents/Card";
import { useFetch } from "../hooks/useFetch";

import Search from "../CharactersComponents/Search";
import Header from "../GeneralComponent/Header";

export default function Characters() {
  const [query, setQuery] = useState("");
  const { data, error, isPending } = useFetch(
    `https://www.breakingbadapi.com/api/characters?name=${query}`
  );

  return (
    <div>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <div>
        <h1 className="title">Characters</h1>
        {isPending && (
          <div className="lds-spinner position-abs">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        {error && <p>{error}</p>}
        <div className="grid container">
          {data &&
            data.map((el) => {
              return (
                <Card
                  key={el.char_id}
                  name={el.name}
                  photo={el.img}
                  status={el.status}
                  nickname={el.nickname}
                  appearance={el.appearance}
                  occupation={el.occupation}
                  birthday={el.birthday}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
