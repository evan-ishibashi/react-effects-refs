import { useState, useEffect } from "react";
import "./App.css";

import DrawCard from "./DrawCard";
const BASE_URL = "https://deckofcardsapi.com/api/deck/";

/**
 * Main App
 * State:
 * - deck : current deck data {isLoading, data, currCard, errors}
 *
 * App -> DrawCard
 */
function App() {
    const [deck, setDeck] = useState({
        isLoading: true,
        data: null,
        currCard: null,
        errors: null,
    });

    useEffect(() => {
        async function getDeck() {
            try {
                const response = await fetch(`${BASE_URL}new/`);
                const data = await response.json();
                setDeck({
                    isLoading: false,
                    data,
                    currCard: null,
                    errors: null,
                });
            } catch (err) {
                setDeck({
                    isLoading: false,
                    data: null,
                    currCard: null,
                    errors: err,
                });
            }
        }
        getDeck();
    }, []);

    /** Fetch one card from API */
    async function drawOne() {
        const resp = await fetch(
            `${BASE_URL}${deck.data.deck_id}/draw/?count=1`
        );
        const cardData = await resp.json();
        console.log("cardData", cardData);
        setDeck({
            data: { ...deck.data, remaining: cardData.remaining },
            isLoading: false,
            currCard: cardData.cards[0],
            errors: null,
        });
    }

    if (deck.isLoading) return <h2>LOADING...</h2>;
    else if (deck.errors) return <b>Oh no! {deck.errors}</b>;

    return (
        <div className="App">
            <DrawCard deck={deck} drawOne={drawOne} />
        </div>
    );
}

export default App;
