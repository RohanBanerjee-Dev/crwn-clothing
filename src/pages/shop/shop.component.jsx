import React from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        })
    }

    render() {
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Routes>
                    <Route exact path= "" element={ <CollectionOverviewWithSpinner isLoading={loading} /> } />
                    <Route path=":collectionId" element={ <CollectionPageWithSpinner isLoading={loading} /> } />
                </Routes>
            </div>
        )
    }
} 

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);


// request.time < timestamp.date(2021, 12, 20);