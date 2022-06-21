import React from "react";

const VendorForm = () => {
    <div>
        <form>
            <ul>
                <ul>
                    <label>Vendor Name:</label>
                    <input
                        type="text"
                        defaultValue={newVendor.vendor_name}
                        onChange={handleChange}
                        name={'vendor_name'}
                        placeholder={'Vendor Name'}
                        className='label-form'
                    />
                </ul>
                <ul>
                    <label>Vendor Phone:</label>
                    <input
                        type="text"
                        defaultValue={newVendor.vendor_phone}
                        onChange={handleChange}
                        name={'vendor_phone'}
                        placeholder={'Vendor Phone Number'}
                        className='label-form'
                    />
                </ul>
                <ul>
                    <label>Vendor Address:</label>
                    <input
                        type="text"
                        defaultValue={newVendor.vendor_address}
                        onChange={handleChange}
                        name={'vendor_address'}
                        placeholder={'Vendor Address'}
                        className='label-form'
                    />
                </ul>
            </ul>
        </form>
    </div>
}

export default VendorForm