import { useState } from "react";
import "./App.css";
const BASE_URL = "https://deckofcardsapi.com/api/deck/";

function App() {
    // state {
    //     "success": true,
    //     "deck_id": "3p40paa87x90",
    //     "shuffled": false,
    //     "remaining": 52
    // }
    const [deck, setDeck] = useState({
        isLoading: true,
        data: null,
        error: null,
    });

    useEffect(() => {
        async function getDeck() {
            try {
                const response = await fetch(`${BASE_URL}new/`);
                const data = await response.json();
                setDeck({ data, isLoading: false, errors: null });
            } catch (err) {
                setDeck({
                    data,
                    isLoading: false,
                    errors: err,
                });
            }
        }
        getDeck();
    }, []);

    if (deck.isLoading) return <h2>LOADING...</h2>;
    else if (deck.error) return <b>Oh no! {error}</b>;

    return <div className="App"></div>;
}

export default App;
