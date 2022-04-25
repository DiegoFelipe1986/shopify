import React from 'react';
import useShopify from "../hooks/useShopify"

const Grill = () => {
    const { isLoading, users } = useShopify();
    return (
        <div className='container grill mt-5'>
            <div className='row'>
                <div className='col-sm-6'>
                    hola
                </div>
                <div className='col-sm-6'>
                    hola
                </div>
            </div>
        </div>
    )
}

export default Grill