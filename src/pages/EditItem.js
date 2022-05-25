import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'


const EditForm = () => {

    const [formValues, setFormValues] = useState({
        location: '',
        category: '',
        item_name: '',
        description: '',
        unit_measure: '',
        case_size: ''
    })

    let navigate = useNavigate()
    let { id } = useParams()

    useEffect(() => {
        let isCancelled = false
        const getItem = async () => {
            const res = await axios.get(
                `http://localhost:3001/api/item/${id}`
            )
            if (!isCancelled) {
                setFormValues(res.data)
            }
        }
        getItem()
        return () => {
            isCancelled = true
        }
    }, [])

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleDelete = async (_id) => {
        console.log('button clicked')
        await axios.delete(`http://localhost:3001/api/item/delete/${id}`).then(
            () => navigate('/items'))
    }

    const updateItem = async () => {
        let url = process.env.NODE_ENV === `http://localhost:3001/api/item/update/${id}`
        await axios.put({
            url,
            method: 'put',
            data: formValues
        })
    }
    const handleSave = async (e) => {
        console.log('button clicked')
        e.preventDefault();
        updateItem();
        setFormValues({
            location: '',
            category: '',
            item_name: '',
            description: '',
            unit_measure: '',
            case_size: ''
        })
        axios.put(`http://localhost:3001/api/item/update/${id}`, formValues).then(
            () => navigate('/items')
        )
    }

    return (
        <div className='items'>
            <h1>Edit { }</h1>
            <div className='editContainer'>
                <div className='edit-card'>
                    <form onSubmit={handleSave}>
                        <li className='item-card'>
                            <span>
                                <label>Location:</label>
                                <input
                                    value={formValues.location}
                                    type='text'
                                    onChange={handleChange}
                                    name={'location'}
                                    placeholder={formValues.location}
                                    className='edit-form' />
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
                                    className='edit-form' />
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
                                    className='edit-form' />
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
                                    className='edit-form' />
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
                                    className='edit-form' />
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
                                    className='edit-form' />
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