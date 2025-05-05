import "./shows.css";
import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";


/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if  (!show) {
    return (
      <div className="show-details">
        <p>Please select a show.</p>
      </div>
    );
  }
    
  return (
    <div className="show-details">
      <h2>{show.name}</h2>
      <p><strong>Genre: {show.genre}</strong></p>
      <EpisodeList
      name="Episodes"
      episodes={show.episodes}
      selectedEpisode={selectedEpisode}
      setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  ); 
}
