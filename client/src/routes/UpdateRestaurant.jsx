import React, {useState, useContext} from "react";
import RestaurantFinder from "../apis/RestaurantFinder";

const Modal_Style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}
const Overlay_Style = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgb(0,0,0,.7)',
    zIndex: 1000
}

const UpdateRestaurant = ({ restaurant, handleTogleModal, isOpen }) => {
    if (!restaurant || !isOpen) {
        return null;
    }
    return (
        <React.Fragment>
            <div style={Overlay_Style}></div>
            <div style={Modal_Style}>
                {restaurant.map((r)=>{
                    return (`update restaurant ${r.id} ${r.name} ${isOpen ? "true" : "false"}`);
                })}                
                <button className="btn btn-primary" onClick={() => { handleTogleModal() }}>Close modal</button>
            </div>
        </React.Fragment>
    );
}

export default UpdateRestaurant;