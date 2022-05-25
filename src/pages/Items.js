import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
// import { BASE_URL } from '../globals'

const Items = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const getItems = async () => {
            const items = await axios.get(`http://localhost:3001/api/item`)
            setItems(items.data)
            console.log(items.data)
        }
        getItems()
            .catch(console.error)
    }, [])

    return (
        <div className='items'>
            <h1>Items List</h1>
            <div className='item-container'>
                {items.map((item, i) => (
                    <li className='item-card' key={i}>
                        <span className='item-card-span'>Location:{item.location}</span>
                        <span className='item-card-span'> Category:{item.category}</span>
                        <span className='item-card-span'> Item:{item.item_name}</span>
                        <span className='item-card-span'>Description:{item.description}</span>
                        <span className='count-span'>Unit of Measure:{item.unit_measure}</span>
                        <span className='count-span'>Case Size:{item.case_size}</span>
                        <Link to={`/items/${item._id}`}>
                            <button >
                                Update
                            </button>
                        </Link>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default Items