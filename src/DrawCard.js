/**
 * DrawCard
 * Prop:
 * - deck : deck data
 * - drawOne : handles click on button to fetch card
 *
 * App -> DrawCard
 */
function DrawCard({ deck, drawOne }) {

  //handles click
    async function handleClick() {
        const card = await drawOne();
    }

    return (
        <>
            {deck.data.remaining !== 0 && <button onClick={handleClick}>DrawCard</button>}
            <br />
            {deck.data.remaining === 0 && <p>Error: no cards remaining!</p>}
            {deck.data.remaining < 52 && deck.data.remaining > 0 && (
                <img src={`${deck.currCard.image}`} />
            )}
        </>
    );
}

export default DrawCard;
