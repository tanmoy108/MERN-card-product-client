import axios from "axios"
import React, { useState } from "react"
import { useSelector } from "react-redux"
import "./Input.css"

const Input = () => {
    const valueOfState = useSelector((state) => state.stateObj)
    console.log("value of state",valueOfState)

    const [state, setState] = useState({
        title: valueOfState.title ,
        description: valueOfState.description,
        price: valueOfState.price,
        discountPercentage: valueOfState.discountPercentage,
        rating: valueOfState.rating,
        brand: valueOfState.brand,
        category: valueOfState.category,
        thumbnail: valueOfState.thumbnail

    });
    const HandleChange = (e) => {
        setState((obj) => {
            return {
                ...obj,
                [e.target.name]: e.target.value
            }
        })
        console.log("state",state);
    }


    const HandlePhoto = (e) =>{
        setState((obj) => {
            return {
                ...obj,
                thumbnail: e.target.files[0]
            }
        })
        console.log(state.thumbnail);
    }

    const productAdd = async (addProduct) => {
        try {
            const prod = await axios.post("http://localhost:8000/products", addProduct)
            console.log(prod.data)
            alert("success");
        } catch (err) {
            console.log("api post error:", err)
        }
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log("aa",state.thumbnail, "BB",state.thumbnail.name)
        const formData = new FormData();
        formData.append('title',state.title);
        formData.append('description',state.description);
        formData.append('price',state.price);
        formData.append('discountPercentage',state.discountPercentage);
        formData.append('rating',state.rating);
        formData.append('brand',state.brand);
        formData.append('category',state.category);
        formData.append('thumbnail',state.thumbnail,state.thumbnail.name);

        productAdd(formData);
        // setState({
        //     title: "" ,
        //     description: "",
        //     price: "",
        //     discountPercentage: "",
        //     rating: "",
        //     brand: "",
        //     category: "",
        //     thumbnail: ""
        // })
    }

    const productUpdate = async (updateProduct) => {
        try {
            await axios.patch(`http://localhost:8000/products/${valueOfState._id}`,updateProduct)
            alert("update");
            setState({
                title: "" ,
                description: "",
                price: "",
                discountPercentage: "",
                rating: "",
                brand: "",
                category: "",
                thumbnail: ""
            })
        } catch (err) {
            console.log("api update error:", err)
        }
    }


    const HandleUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title',state.title);
        formData.append('description',state.description);
        formData.append('price',state.price);
        formData.append('discountPercentage',state.discountPercentage);
        formData.append('rating',state.rating);
        formData.append('brand',state.brand);
        formData.append('category',state.category);
        formData.append('thumbnail',state.thumbnail,state.thumbnail.name);

        productUpdate(formData);
    }

    return (
        <>
            <form onSubmit={valueOfState._id ? HandleUpdate : HandleSubmit} encType="multipart/form-data" >
                <div className="form-container">
                    <input type="text" name="title" onChange={HandleChange} value={state.title} placeholder="Enter Title" />
                    <input type="text" name="description" onChange={HandleChange} value={state.description} placeholder="Enter Descripton" />
                    <input type="number" name="price" onChange={HandleChange} value={state.price} placeholder="Enter Price" />
                    <input type="number" name="discountPercentage" onChange={HandleChange} value={state.discountPercentage} placeholder="Discount" />
                    <input type="number" name="rating" onChange={HandleChange} value={state.rating} placeholder="Enter Rating" />
                    <input type="text" name="brand" onChange={HandleChange} value={state.brand} placeholder="Enter Brand Name" />
                    <select name="category" onChange={HandleChange}>
                        <option>Enter category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Kichen-stuff">Kichen-stuff</option>
                        <option value="House-stuff">House-stuff</option>
                        <option value="Cosmetic">Cosmetic</option>
                    </select>
                    <input type="file" name="thumbnail" onChange={HandlePhoto}  placeholder="Enter thumbnail" />
                    {valueOfState._id ? <button className="input-button" type="submit" >Update</button> : <button className="input-button" type="submit" >Submit</button>}
                </div>
            </form>
        </>
    )
}

export default Input;