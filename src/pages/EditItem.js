import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'


const EditForm = () => {
    let navigate = useNavigate()
    let { id } = useParams()

    let [formValues, setFormValues] = useState({
        location: '',
        category: '',
        item_name: '',
        description: '',
        unit_measure: '',
        case_size: '',
        count: '',
        vendor_name: '',
        vendor_code: ''

    })

    const getItem = async () => {
        let url = process.env.NODE_ENV === 'local' ? `http://localhost:3001/api/item/${id}` : `https://server-inventory-app.herokuapp.com/api/item/${id}`;
        const item = await axios.get(url)
        setFormValues(item.data[0])
        console.log(item.data)
    }

    useEffect(() => {
        getItem();
    }, [])


    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleDelete = async (_id) => {
        let url = process.env.NODE_ENV === 'local' ? `http://localhost:3001/api/item/delete/${id}` : `https://server-inventory-app.herokuapp.com/api/item/delete/${id}`
        await axios.delete(url).then(
            () => navigate('/items'))
    }

    const updateItem = async () => {
        let url = process.env.NODE_ENV === 'local' ? `http://localhost:3001/api/item/update/${id}` : `https://server-inventory-app.herokuapp.com/api/item/update/${id}`
        await axios.put({
            url,
            method: 'put',
            data: formValues
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateItem();
        setFormValues({
            location: '',
            category: '',
            item_name: '',
            description: '',
            unit_measure: '',
            case_size: '',
            count: '',
            vendor_name: '',
            vendor_code: ''
        })
        let url = process.env.NODE_ENV === 'local' ? `http://localhost:3001/api/item/update/${id}` : `https://server-inventory-app.herokuapp.com/api/item/update/${id}`
        axios.put(url, formValues)
        navigate('/items');
    }

    return (
        <div className='items'>
            <h1>Edit</h1>
            <div className='editContainer'>
                <div className='edit-card'>
                    <form onSubmit={handleSubmit} >
                        <li className='item-card'>
                            <span>
                                <label>Location:</label>
                                <input
                                    value={formValues.location}
                                    type='text'
                                    onChange={handleChange}
                                    name='location'
                                    placeholder={formValues.location}
                                    className='edit-form'
                                    required
                                />
                            </span>
                        </li>
                        <li className='item-card'>
                            <span>
                                <label>Category:</label>
                                <input
                                    value={formValues.category}
                                    type='text'
                                    onChange={handleChange}
                                    name={'category'}
                                    placeholder={formValues.category}
                                    className='edit-form'
                                    required
                                />
                            </span>
                        </li>
                        <li className='item-card'>
                            <span>
                                <label>Item:</label>
                                <input
                                    value={formValues.item_name}
                                    type='text'
                                    onChange={handleChange}
                                    name={'item_name'}
                                    placeholder={formValues.item_name}
                                    className='edit-form'
                                    required
                                />
                            </span>
                        </li>
                        <li className='item-card'>
                            <span>
                                <label>Description:</label>
                                <input
                                    value={formValues.description}
                                    type='text'
                                    onChange={handleChange}
                                    name={'description'}
                                    placeholder={formValues.description}
                                    className='edit-form'
                                    required
                                />
                            </span>
                        </li>
                        <li className='item-card'>
                            <span>
                                <label>Unit Measure:</label>
                                <input
                                    value={formValues.unit_measure}
                                    type='text'
                                    onChange={handleChange}
                                    name={'unit_measure'}
                                    placeholder={formValues.unit_measure}
                                    className='edit-form'
                                    required
                                />
                            </span>
                        </li>
                        <li className='item-card'>
                            <span>
                                <label>Case Size:</label>
                                <input
                                    value={formValues.case_size}
                                    type='text'
                                    onChange={handleChange}
                                    name={'case_size'}
                                    placeholder={formValues.case_size}
                                    className='edit-form'
                                    required
                                />
                            </span>
                        </li>
                        <li className='item-card'>
                            <span>
                                <label>Count:</label>
                                <input
                                    value={formValues.count}
                                    type='text'
                                    onChange={handleChange}
                                    name={'count'}
                                    placeholder={formValues.count}
                                    className='edit-form'
                                    required
                                />
                            </span>
                        </li>
                        <li className='item-card'>
                            <span>
                                <label>Vendor Name:</label>
                                <input
                                    value={formValues.vendor_name}
                                    type='text'
                                    onChange={handleChange}
                                    name={'vendor_name'}
                                    placeholder={formValues.vendor_name}
                                    className='edit-form'
                                    required
                                />
                            </span>
                        </li>
                        <li className='item-card'>
                            <span>
                                <label>Vendor Code:</label>
                                <input
                                    value={formValues.vendor_code}
                                    type='text'
                                    onChange={handleChange}
                                    name={'vendor_code'}
                                    placeholder={formValues.vendor_code}
                                    className='edit-form'
                                    required
                                />
                            </span>
                        </li>
                        <button>Save</button>
                    </form>
                </div>
                <div onClick={() => handleDelete(formValues._id)}>
                    <button id='deleteButton' type='submit'>Delete</button>
                </div>
            </div>
        </div >
    )
}

export default EditForm