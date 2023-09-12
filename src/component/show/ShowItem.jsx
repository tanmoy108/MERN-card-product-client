import React from "react";
import "./ShowItem.css"

const ShowItem = (props) => {
    const {item,HandleDelete,HandleUpdate} = props;
    return(
        <div className="show-container">
        <div className="first-container" >
            <p className="first-like">${item.price}</p>
            <button className="first-discount" >{Math.round(item.discountPercentage)}% Off</button>
        </div>
        <div className="second-container" >
            <img className="second-img" src={"http://localhost:8000/uploads/" + item.thumbnail} alt={item.thumbnail} />
        </div>
        <div className="wrapper">
        <div className="third-container">
            <h2 className="third-title">{item.title}</h2>
            <p className="third-description">{item.description}</p>
            <p className="third-category">{item.category}</p>
        </div>
        <div className="fourth-container">
            <button className="fourth-buy-button" onClick={()=>HandleDelete(item._id)} >Delete</button>
            <button className="fourth-cart-button" onClick={()=>HandleUpdate(item)} >Update</button>
        </div>
        </div>
    </div>
    )
}
export default ShowItem;