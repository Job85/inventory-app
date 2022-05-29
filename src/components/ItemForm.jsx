const ItemForm = () => {

    return (
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
                            className='label-form' />
                    </ul>
                    <ul>
                        <label id='category'>Category:</label>
                        <input type='text'
                            defaultValue={props.newItem.category}
                            onChange={props.handleChange}
                            name={'category'}
                            placeholder={'category'}
                            className='label-form' />
                    </ul>
                    <ul>
                        <label id='item'>Item:</label>
                        <input type='text'
                            defaultValue={props.newItem.item_name}
                            onChange={props.handleChange}
                            name={'item_name'}
                            placeholder={'item name'}
                            className='label-form' />
                    </ul>
                    <ul>
                        <label id='size'>Description:</label>
                        <input type='text'
                            defaultValue={props.newItem.description}
                            onChange={props.handleChange}
                            name={'description'}
                            placeholder={'description'}
                            className='label-form' />
                    </ul>
                    <ul>
                        <label id='count'>Unit Measure:</label>
                        <input type='text'
                            defaultValue={props.newItem.unit_measure}
                            onChange={props.handleChange}
                            name={'unit_measure'}
                            placeholder={'unit measure'}
                            className='label-form' />
                    </ul>
                    <ul>
                        <label id='count'>Case Size:</label>
                        <input type='text'
                            defaultValue={props.newItem.case_size}
                            onChange={props.handleChange}
                            name={'case_size'}
                            placeholder={'case size'}
                            className='label-form' />
                    </ul>
                </ul>
                <button type="submit">Add Item</button>
            </form>
        </div>
    )
}

export default ItemForm