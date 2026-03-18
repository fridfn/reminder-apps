const StackedCards = () => {
  const [activeCards, setActiveCards] = useState(0)
  
  const handleClick = (e, index) => {
   setActiveCards(index)
  }
  
  const cardsIndex = { 0: 'one', 1: 'two', 2: 'three' }
  
  return (
   <div className="container-stacked-cards">
   <EachUtils
     of={['1', '2', '3']}
     render={(items, index) => (
      <div 
       key={index}
       onClick={(e) => handleClick(e, index)}
       className={`cards ${activeCards === index ? `view num-${cardsIndex[index]}`: cardsIndex[index]}`}>
       <div className="content-cards">
        <p className='md-txt'>{index}Carilah tempat mu di cintai</p>
       </div>
      </div>
     )}/>
   </div>
  );
}


export default StackedCards;