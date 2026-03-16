
export const handleClick = (props) => {
  const { items, selectedItems, limitNumber, setSelectedItems } = props;
  const nameItems = items.target.getAttribute('info')
  
  if (!selectedItems.includes(nameItems) && selectedItems.length < limitNumber) {
   setSelectedItems((prevItems) => [...prevItems, nameItems])
  } else {
   setSelectedItems((prevItems) => prevItems.filter(items => items !== nameItems))
  }
 }
