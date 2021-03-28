import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";

const Modal_Style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000,
    width: '800px'
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
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [price_range, setPriceRange] = useState("");

    if (!restaurant || !isOpen) {
        return null;
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await RestaurantFinder.put(`/${restaurant[0].id}`, { name, location, price_range });
            handleTogleModal();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <React.Fragment>
            <div style={Overlay_Style}></div>
            <div style={Modal_Style}>{
                restaurant.map((r) => {
                    return (
                        <form className="mb-4">
                            <h1 className="mb-3">Update restaurant</h1>
                            <div className="form-group mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" value={r.name}
                                    onChange={(e) => { setName(e.target.value) }} onClick={()=>{console.log(this)}} ></input>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Location</label>
                                <input type="text" className="form-control" value={r.location}
                                    onChange={(e) => { setLocation(e.target.value); }}></input>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Price range</label>
                                <select className="form-control custom-select"
                                    value={r.price_range} onChange={(e) => { setPriceRange(e.target.value) }}>
                                    <option disabled>price range</option>
                                    <option value="1">$</option>
                                    <option value="2">$$</option>
                                    <option value="3">$$$</option>
                                    <option value="4">$$$$</option>
                                    <option value="5">$$$$$</option>
                                </select>
                            </div>
                            <div className="align-items-end">
                                <button className="btn btn-secondary float-right" onClick={() => { handleTogleModal() }}>Cancel</button>
                                <button type="submit" className="btn btn-primary mx-2" onClick={handleUpdate} >Update</button>
                            </div>
                        </form>
                    );
                })
            }
            </div>
        </React.Fragment>
    );
}

export default UpdateRestaurant;