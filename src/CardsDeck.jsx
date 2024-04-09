import React, {useState, useEffect} from "react";

import "./Card.css";

const DECK_API_URL = "https://deckofcardsapi.com/api/deck/new/";

/**
 *
 * @returns
 */
function CardsDeck() {
  const [deck, setDeck] = useState({
    isLoading: true,
    deckId: "",
  });
  const [cards, setCards] = useState({
    isLoading: true,
    cardsList: [],
  });

  console.log("deckState: ", deck.deckId);

  useEffect(function fetchNewDeck() {
    async function fetchDeck() {
      const response = await fetch(DECK_API_URL);
      const result = await response.json();

      console.log("result: ", result);

      setDeck((deck) => ({...deck, deckId: result.deck_id}));
    }
    fetchDeck();
  }, []);

  return (
    <div className="CardsDeck">
      <button className="CardsDeck-btn">GIMME A CARD!</button>
    </div>
  );
}

export default CardsDeck;
