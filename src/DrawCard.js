

function DrawCard({ deck, drawOne}) {

  async function handleClick(){
    const card = await drawOne();
  }

  return(
    <>
    <button onClick={handleClick}>DrawCard</button><br/>
    {(deck.currCard) && <img src={`${deck.currCard.image}`}/>}

    </>
  );
}

export default DrawCard;