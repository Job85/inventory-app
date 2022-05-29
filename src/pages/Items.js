import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
// import { BASE_URL } from '../globals'

const Items = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const getItems = async () => {
            let url = process.env.NODE_ENV === 'local' ? `http://localhost:3001/api/item` : `https://server-inventory-app.herokuapp.com/api/item`
            const items = await axios.get(url)
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
                    <div className='item-card card' key={i}>
                        <span className='item-card-span'><b>Location:</b>{item.location}</span>
                        <span className='item-card-span'><b>Category:</b>{item.category}</span>
                        <span className='item-card-span'> <b>Item:</b>{item.item_name}</span>
                        <span className='item-card-span'><b>Description:</b>{item.description}</span>
                        <span className='count-span'><b>Unit of Measure:</b>{item.unit_measure}</span>
                        <span className='count-span'><b>Case Size:</b>{item.case_size}</span>
                        <Link to={`/item/${item._id}`}>
                            <button className='up-button'>
                                Update
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Items