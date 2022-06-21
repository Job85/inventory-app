const ItemForm = (props) => {

    return (
        <div className='create'>
            <h1>Create Page</h1>
            <h2>
                Lets create an item!
            </h2>
            <div>
                <form onSubmit={props.handleSubmit}>
                    <ul className='create-card'>
                        <ul>
                            <label id='location'>Location:</label>
                            <input type='text'
                                defaultValue={props.newItem.location}
                                onChange={props.handleChange}
                                name={'location'}
                                placeholder={'location'}
                                required
                                className='label-form' />
                        </ul>
                        <ul>
                            <label id='category'>Category:</label>
                            <input type='text'
                                defaultValue={props.newItem.category}
                                onChange={props.handleChange}
                                name={'category'}
                                placeholder={'category'}
                                required
                                className='label-form' />
                        </ul>
                        <ul>
                            <label id='item'>Item:</label>
                            <input type='text'
                                defaultValue={props.newItem.item_name}
                                onChange={props.handleChange}
                                name={'item_name'}
                                placeholder={'item name'}
                                required
                                className='label-form' />
                        </ul>
                        <ul>
                            <label id='description'>Description:</label>
                            <input type='text'
                                defaultValue={props.newItem.description}
                                onChange={props.handleChange}
                                name={'description'}
                                placeholder={'description'}
                                required
                                className='label-form' />
                        </ul>
                        <ul>
                            <label id='unit_measure'>Unit Measure:</label>
                            <input type='text'
                                defaultValue={props.newItem.unit_measure}
                                onChange={props.handleChange}
                                name={'unit_measure'}
                                placeholder={'unit measure'}
                                required
                                className='label-form' />
                        </ul>
                        <ul>
                            <label id='case_size'>Case Size:</label>
                            <input type='text'
                                defaultValue={props.newItem.case_size}
                                onChange={props.handleChange}
                                name={'case_size'}
                                placeholder={'case size'}
                                required
                                className='label-form' />
                        </ul>
                        <ul>
                            <label id='count'>Count:</label>
                            <input type='text'
                                defaultValue={props.newItem.count}
                                onChange={props.handleChange}
                                name={'count'}
                                placeholder={'item count'}
                                required
                                className='label-form' />
                        </ul>
                        <ul>
                            <label id='vendor_name'>Vendor:</label>
                            <input type='text'
                                defaultValue={props.newItem.vendor_name}
                                onChange={props.handleChange}
                                name={'vendor_name'}
                                placeholder={'vendor'}
                                required
                                className='label-form' />
                        </ul>
                        <ul>
                            <label id='vendor_code'>Vendor Code:</label>
                            <input type='text'
                                defaultValue={props.newItem.vendor_code}
                                onChange={props.handleChange}
                                name={'vendor_code'}
                                placeholder={'vendor code'}
                                required
                                className='label-form' />
                        </ul>
                    </ul>
                    <button type="submit">Add Item</button>
                </form>
            </div>
        </div >
    )
}

export default ItemForm