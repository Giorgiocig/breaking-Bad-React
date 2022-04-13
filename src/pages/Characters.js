import React from "react";
import Card from "../CharactersComponents/Card";
import { useFetch } from "../hooks/useFetch";
import Modal from "../CharactersComponents/Modal";

export default function Characters() {
  const { data, error, isPending } = useFetch(
    "https://www.breakingbadapi.com/api/characters"
  );

  return (
    <div>
      <Modal />
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
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
