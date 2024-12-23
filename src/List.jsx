

function List(props){



    // fruits.sort((a, b) => a.name.localeCompare(b.name));  //alphabatical order
    // fruits.sort((a, b) => b.name.localeCompare(a.name));  //alphabatical reverse order
    // fruits.sort((a, b) => a.calories - b.calories);  //calories increasing order
    // fruits.sort((a, b) => b.calories - a.calories);  //calories decresing order

    // const lowCalFruits = fruits.filter(fruits => fruits.calories < 100);
    // const highCalFruits = fruits.filter(fruits => fruits.calories >= 100);

    // not needed since we are using ol below
    const listItems = fruits.map(fruit => <li key = {fruit.id}>{fruit.name}: &nbsp;
                                                 <b>{fruit.calories} </b> </li>);
    return(<ol>{listItems}</ol>); 
}

export default List 