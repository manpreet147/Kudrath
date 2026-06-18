import React, {useState} from 'react'

const MyComponent1 = () => {
    const [plants1, setPlants1] = useState([]);
    const [plantYear, setPlantYear] = useState(new Date().getFullYear());
    const [plantType, setPlantType] = useState("");
    const [plantSpecies, setPlantSpecies] = useState("");

    function handleAddPlant() {
        const newPlant = { year: plantYear, type: plantType, species: plantSpecies };
        setPlants1(p => [...p, newPlant]);
    
        setPlantYear(new Date().getFullYear());
        setPlantType("");
        setPlantSpecies("");
      }
    
      function handleRemovePlant(index) {
        setPlants1(p => p.filter((_, i) => i !== index));
      }
    
      function handleYearChange(event) {
        setPlantYear(event.target.value);
      }
    
      function handlePlant1Change(event) {
        setPlantType(event.target.value);
      }
    
      function handleSpeciesChange(event) {
        setPlantSpecies(event.target.value);
      }

    return (
        <div>
            <h1>List of Plant Species</h1>
      <ul>
        {plants1.map((plant, index) =>
          <li key={index} onClick={() => handleRemovePlant(index)}>
            {plant.year} - {plant.type} - {plant.species}
          </li>)}
      </ul>

      <input type="number" value={plantYear} onChange={handleYearChange} /><br />
      <input type="text" value={plantType} onChange={handlePlant1Change} placeholder='Enter the plant type' /><br />
      <input type="text" value={plantSpecies} onChange={handleSpeciesChange} placeholder='Enter the plant species' /><br />
      <button onClick={handleAddPlant}>Add Plant</button>

        </div>
    )
}

export default MyComponent1
