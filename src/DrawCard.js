/**
 * DrawCard
 * Prop:
 * - deck : deck data
 * - drawOne : handles click on button to fetch card
 *
 * App -> DrawCard
 */
function DrawCard({ deck, drawOne }) {
    async function handleClick() {
        const card = await drawOne();
    }

    return (
        <>
            <button onClick={handleClick}>DrawCard</button>
            <br />
            {deck.data.remaining === 0 && <p>Error: no cards remaining!</p>}
            {deck.data.remaining < 52 && deck.data.remaining > 0 && (
                <img src={`${deck.currCard.image}`} />
            )}
        </>
    );
}

export default DrawCard;
