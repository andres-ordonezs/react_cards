import React, { useState, useEffect } from "react";
import Card from './Card';

import "./Card.css";

const DECK_API_URL = "https://deckofcardsapi.com/api/deck/new/";
const GET_CARD_API_URL = 'https://deckofcardsapi.com/api/deck/';

/**CardsDeck: Gets deck of cards and shows card one by one
 *
 *Props:None
 *
 * State:
 * -Deck
 * -Cards
 *
 * App => CardsDeck => Card
 */
function CardsDeck() {
  const [deck, setDeck] = useState({
    isLoading: true,
    deckId: "",
  });
  const [cards, setCards] = useState({
    // isLoading: false,
    cardsList: [],
  });

  useEffect(function fetchNewDeck() {
    async function fetchDeck() {
      const response = await fetch(DECK_API_URL);
      const result = await response.json();


      setDeck({ deckId: result.deck_id, isLoading: false });
    }
    fetchDeck();
  }, []);

  async function getCard() {
    // setCards(cards => ({ isLoading: true, ...cards }));
    const response = await fetch(`${GET_CARD_API_URL}${deck.deckId}/draw/?count=1`);
    const result = await response.json();

    setCards(cards => ({ cardsList: [...cards.cardsList, result.cards[0].image] }));

  }


  if (deck.isLoading) return <i>Loading...</i>;

  return (
    <div className="CardsDeck">
      <button className="CardsDeck-btn" onClick={getCard}>GIMME A CARD!</button>
      {cards.isLoading ? <i>Loading...</i> : cards.cardsList.map(c => <Card img={c} />)}
    </div>
  );
}

export default CardsDeck;
