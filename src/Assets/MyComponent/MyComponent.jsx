import React, { useState } from 'react'

const MyComponent = () => {
  const [plant, setPlant] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
  const [plants, setPlants] = useState({ year: 2024, produce: "Iceberg", species: "Lettuce" });

  // const [plant, setPlant] = useState("Select the plant");
  const [count, setCount] = useState(0);
  const [isHarvested, setIsHarvested] = useState(false);
  

  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  const updatePlant = () => {
    setPlant("Rose");
  }

  const toggleHarvestedStatus = () => {
    setIsHarvested(!isHarvested);
  }

  function handlePlantChange(event) {
    setPlant(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlepaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  function handleYearChange(event) {
    setPlants(c => ({ ...c, year: event.target.value }));
  }
  function handleProduceChange(event) {
    setPlants(c => ({ ...c, produce: event.target.value }));
  }
  function handlespeciesChange(event) {
    setPlants(c => ({ ...c, species: event.target.value }));
  }

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods(f => [...f, newFood]);
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div className='mycomponent-container'>
      <input value={plant} placeholder="Search" onChange={handlePlantChange} />
      <br />
      <p>Plant: {plant} </p>
      <button className="mycomponent-button" onClick={updatePlant}>Select Plant</button>
      <br />
      <br />
      <p>Your favorite plant is: {plants.year} {plants.produce} {plants.species} </p>
      <input type="number" value={plants.year} onChange={handleYearChange} /><br />
      <input type="text" value={plants.produce} onChange={handleProduceChange} /><br />
      <input type="text" value={plants.species} onChange={handlespeciesChange} /><br />
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => <li key={index} onClick={handleRemoveFood(index)}>{food}</li>)}
      </ul>
      <input type="text" id='foodInput' placeholder='Enter Food name' />
      <button onClick={handleAddFood}>Add food</button>
      <p className='count-display'>Select Quantity: {count} </p>
      <input value={quantity} placeholder="0" type="number" onChange={handleQuantityChange} />
      <br />
      <br />
      <button className="mycomponent-button" onClick={increment}>+</button>
      <button className="mycomponent-button" onClick={reset}>0</button>
      <button className="mycomponent-button" onClick={decrement}>-</button>
      <p>Harvested: {isHarvested ? "Yes" : "No"} </p>
      <button className="mycomponent-button" onClick={toggleHarvestedStatus}> Status</button>
      <br />
      <br />
      <textarea value={comment} placeholder="Your Input matters..." onChange={handleCommentChange} />
      <p>Comment: {comment}</p>
      <h3>Payment:</h3>
      <select value={payment} onChange={handlepaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
        <option value="Rupay">Rupay</option>
      </select>
      <p>Payment: {payment}</p>

      <label><input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} />Pick Up</label>
      <label><input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />Delivery</label>
      <p>Shipping: {shipping}</p>
    </div>
  )
}

export default MyComponent
