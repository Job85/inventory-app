const VendorForm = (props) => {

    return (
        <div className="create">
            <h1>Add Vendor</h1>
            <div>
                <form onSubmit={props.handleSubmit}>
                    <ul>
                        <ul>
                            <label>Vendor Name:</label>
                            <input
                                type="text"
                                defaultValue={props.newVendor.vendor_name}
                                onChange={props.handleChange}
                                name={'vendor_name'}
                                placeholder={'Vendor Name'}
                                className='label-form'
                            />
                        </ul>
                        <ul>
                            <label>Vendor Phone:</label>
                            <input
                                type="text"
                                defaultValue={props.newVendor.vendor_phone}
                                onChange={props.handleChange}
                                name={'vendor_phone'}
                                placeholder={'Vendor Phone Number'}
                                className='label-form'
                            />
                        </ul>
                        <ul>
                            <label>Vendor Address:</label>
                            <ul className="create">
                                <label>Street:</label>
                                <input
                                    type="text"
                                    defaultValue={props.newVendor.vendor_address.street}
                                    onChange={props.handleChange}
                                    name={'vendor_address.street'}
                                    placeholder={'555 Somewhere Dr.'}
                                    className='label-form'
                                />
                                <label>Street 2:</label>
                                <input
                                    type="text"
                                    defaultValue={props.newVendor.vendor_address.street2}
                                    onChange={props.handleChange}
                                    name={'vendor_address.street2'}
                                    placeholder={'555 Somewhere Dr.'}
                                    className='label-form'
                                />
                                <label>City:</label>
                                <input
                                    type="text"
                                    defaultValue={props.newVendor.vendor_address.city}
                                    onChange={props.handleChange}
                                    name={'vendor_address.city'}
                                    placeholder={'Big City'}
                                    className='label-form'
                                />
                                <label>State:</label>
                                <input
                                    type="text"
                                    defaultValue={props.newVendor.vendor_address.street}
                                    onChange={props.handleChange}
                                    name={'vendor_address.state'}
                                    placeholder={'Florida'}
                                    className='label-form'
                                />
                                <label>Zip Code:</label>
                                <input
                                    type="text"
                                    defaultValue={props.newVendor.vendor_address.zip_code}
                                    onChange={props.handleChange}
                                    name={'vendor_address.zip_code'}
                                    placeholder={'12345'}
                                    className='label-form'
                                />
                            </ul>
                        </ul>
                    </ul>
                    <button type="submit">Add Vendor</button>
                </form>
            </div>
        </div>
    )
}

export default VendorForm