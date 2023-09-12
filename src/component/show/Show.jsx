import React from "react"
import axios from "axios"
import ShowItem from "./ShowItem";
import { useState, useEffect } from "react";
import "./ShowItem.css"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { stateActionUpdate } from "../../Redux/state/stateAction";
// const dotenv = require('dotenv');
// dotenv.config();

const Show = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const HandleDelete = async (id)=>{
        try {
           await axios.delete(`http://localhost:8000/products/${id}`)
            console.log(id)
            setProducts(products.filter(item=>item._id !== id))
        } catch (err) {
            console.log("api error:", err)
        }
    }
    const HandleUpdate = async (item)=>{
        navigate("/login");
        dispatch(stateActionUpdate(item))
        console.log(item)
    }

    const apiCalled = async () => {
        try {
            const prod = await axios.get("http://localhost:8000/products")
            console.log(prod.data)
            setProducts(prod.data)
        } catch (err) {
            console.log("api error:", err)
        }
    }

    useEffect(() => {
        apiCalled()
    }, [])

    return (
        <div className="show">
            {
                products.map((item, id) => {
                    return (
                        <ShowItem key={id} item={item} HandleDelete ={HandleDelete} HandleUpdate={HandleUpdate}/>
                    )
                })
            }
        </div>
    )
}

export default Show;