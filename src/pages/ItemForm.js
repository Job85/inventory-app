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
                                defaultValue={props.newItem.item}
                                onChange={props.handleChange}
                                name={'item'}
                                placeholder={'item'}
                                className='label-form' />
                        </ul>
                        <ul>
                            <label id='size'>Size:</label>
                            <input type='text'
                                defaultValue={props.newItem.size}
                                onChange={props.handleChange}
                                name={'size'}
                                placeholder={'size'}
                                className='label-form' />
                        </ul>
                        <ul>
                            <label id='count'>Count:</label>
                            <input type='text'
                                defaultValue={props.newItem.count}
                                onChange={props.handleChange}
                                name={'count'}
                                placeholder={'count'}
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