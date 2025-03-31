import React from 'react'
import propTypes from 'prop-types'


const List = (props) => {
    const category = props.category;
    const itemList = props.items;
    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>)

    // const fruits = [{ id: 1, name: "Apple", calories: 6 },
    //                 { id: 2, name: "Strawberry", calories: 265 },
    //                 { id: 3, name: "Mango", calories: 165 },
    //                 { id: 4, name: "Litchi", calories: 32 },
    //                 { id: 5, name: "Raspberry", calories: 356 }
    //                 ];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical order
    // fruits.sort((a, b) => b.name.localeCompare(a.name));// decending alphabetical order
    // fruits.sort((a, b) => a.calories - b.calories);// ascending calorie wise
    // fruits.sort((a, b) => b.calories - a.calories);// descending calorie wise

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    // const listItems = highCalFruits.map(highCalFruits => 
    // <li key={highCalFruits.id}>{highCalFruits.name}: &nbsp; <b>{highCalFruits.calories}</b></li>);
    return (
        <>
            <h3 className='list-category'>{category}</h3>
            <ol className='list-items'>
                {listItems}
            </ol>
        </>
    )
}

List.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({ id: propTypes.number,name: propTypes.string, calories: propTypes.number})),
}

List.defaultProps = {
    category: "Category",
    items: [],
}

export default List
