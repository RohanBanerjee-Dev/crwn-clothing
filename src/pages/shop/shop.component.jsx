import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../../components/collection-overview/collections-overview.container";
import CollectionPageContainer from '../collection/collection.container';

const ShopPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCollectionsStart());
    }, [dispatch])

    return (
        <div className='shop-page'>
            <Routes>
                <Route exact path= "" element={<CollectionsOverviewContainer /> } />
                <Route path=":collectionId" element={ <CollectionPageContainer  /> } />
            </Routes>
        </div>
    )
}

// const mapDispatchToProps = dispatch => ({
//     fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
// })

export default ShopPage;
