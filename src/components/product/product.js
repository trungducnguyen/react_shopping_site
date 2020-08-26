import React from 'react'
import { Card, Button } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";

import * as firebase from "firebase/app";
import "firebase/firestore";

import {
    FirestoreProvider,
    FirestoreCollection
} from "@react-firebase/firestore";


const s = (a) => JSON.stringify(a, null, 2);

function Product(prop) {
    // propduction = {
    //     title: "Nike Air VaporMax Flyknit 3",
    //     price: "4,999,000vnd",
    //     description: "Men's Shoes",
    //     image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-1168e89a-4264-4726-a2d9-f4cdd7c4d016/air-vapormax-flyknit-3-shoe-rWRSNW.jpg",
    //     size: "",

    // }
console.log("anskfsd");
    return (
        <Link className="col-lg-4 col-sm-6 my-3 item-content" to="/men/shoes-detail">
            <Card>p
                <Card.Img href="/product-detail" variant="top" src={prop.image} />
                <Card.Body>
                    <Card.Title>{prop.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{prop.price}</Card.Subtitle>
                    <Card.Text>
                        {prop.description}
                    </Card.Text>
                    <button type="button" className="btn btn-outline-dark rounded-pill mx-1">Buy Now</button>
                    <button type="button" className="btn btn-outline-dark rounded-pill mx-1">Add To Bag</button>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default Product;