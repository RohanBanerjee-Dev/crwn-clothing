import React from "react";
import { useParams} from "react-router-dom";
import { useSelector } from "react-redux";

import CollectionItem from '../../components/collection-item/collection-item.component'

import { selectCollection } from "../../redux/shop/shop.selector";

import { CollectionPageContainer, CollectionTitle, CollectionItemsContainer } from "./collection.styles";

const CollectionPage = ({ collection }) => {
    const { collectionId } = useParams();
    const { title, items } = useSelector(selectCollection(collectionId));
    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
                {
                    items.map(item => (<CollectionItem key={item.id} item={item} />))
                }
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
};

export default CollectionPage;