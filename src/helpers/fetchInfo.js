import React from 'react';
import { shopifyApi } from '../api/shopifyApi';

export const fetchInfo = async () => {

    const resp = await shopifyApi.get('/products/free-trainer-3-mmw.js');
    const spList = resp.data;
    console.log(spList.title)
    return (
        <></>
    )
}
