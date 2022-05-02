import React from "react";
import season1Img from "../img/season1resize.jpg";
import season2Img from "../img/season2resize.jpg";
import season3Img from "../img/season3resize.jpg";
import season4Img from "../img/season4resize.jpg";
import season5Img from "../img/season5resize.jpg";
import CardEp from "./CardEp";
import { useFetch } from "../hooks/useFetch";

import "./SeasonsList.css";

export default function EpisodeList() {
  const { data, error, isPending } = useFetch(
    `https://www.breakingbadapi.com/api/episodes`
  );

  let seasons = {
    season1: { season1: [], titles: [], characters: [] },
    season2: { season2: [], titles: [], characters: [] },
    season3: { season3: [], titles: [], characters: [] },
    season4: { season4: [], titles: [], characters: [] },
    season5: { season5: [], titles: [], characters: [] },
    season6: { season6: [], titles: [], characters: [] },
  };
  if (data) {
    //season1
    seasons.season1 = data.filter((el) => el.season === "1");
    seasons.season1.titles = seasons.season1.map((el) => el.title);
    seasons.season1.characters = seasons.season1.map((el) => el.characters);
    //season2
    seasons.season2 = data.filter((el) => el.season === "2");
    seasons.season2.titles = seasons.season2.map((el) => el.title);
    seasons.season2.characters = seasons.season2.map((el) => el.characters);
    //season3
    seasons.season3 = data.filter((el) => el.season === "3");
    seasons.season3.titles = seasons.season3.map((el) => el.title);
    seasons.season3.characters = seasons.season3.map((el) => el.characters);
    //season4
    seasons.season4 = data.filter((el) => el.season === "4");
    seasons.season4.titles = seasons.season4.map((el) => el.title);
    seasons.season4.characters = seasons.season4.map((el) => el.characters);
    //season5
    seasons.season5 = data.filter((el) => el.season === "5");
    seasons.season5.titles = seasons.season5.map((el) => el.title);
    seasons.season5.characters = seasons.season5.map((el) => el.characters);
  }

  return (
    <div>
      {isPending && (
        <div className="lds-spinner">
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
      {error && <h2>{error}</h2>}
      <div className="container-episodes position-rel">
        <h2 className="text-center paddingTitle">
          Click on the image to display details...
        </h2>
        <div className=" position-rel">
          <CardEp
            image={season1Img}
            text={"Season 1"}
            title={seasons.season1.titles}
            characters={seasons.season1.characters}
          />
          <CardEp
            image={season2Img}
            text={"Season 2"}
            title={seasons.season2.titles}
            characters={seasons.season2.characters}
          />
          <CardEp
            image={season3Img}
            text={"Season 3"}
            title={seasons.season3.titles}
            characters={seasons.season3.characters}
          />
          <CardEp
            image={season4Img}
            text={"Season 4"}
            title={seasons.season4.titles}
            characters={seasons.season4.characters}
          />
          <CardEp
            image={season5Img}
            text={"Season 5"}
            title={seasons.season5.titles}
            characters={seasons.season5.characters}
          />
        </div>
      </div>
    </div>
  );
}
