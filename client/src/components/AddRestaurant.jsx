import React, { useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";

const AddRestaurant = () => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("price range");

    const handleSubmit = async (e) => {
        e.preventDefault(); //<-- cancel the submit event. Avoiding refreshing the page.
        try {
            const { data } = await RestaurantFinder.post("/", {
                "name": name,
                "location": location,
                "price_range": priceRange
            });
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <React.Fragment>
            <div className="mb-4">
                <form action="">
                    <div className="row">
                        <div className="col-md-3">
                            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }}
                                className="form-control" placeholder="name" />
                        </div>
                        <div className="col-md-3">
                            <input type="text" value={location} onChange={(e) => { setLocation(e.target.value) }}
                                className="form-control" placeholder="location" />
                        </div>
                        <div className="col-md-3">
                            <select className="form-control custom-select"
                                value={priceRange} onChange={(e) => { setPriceRange(e.target.value) }}>
                                <option disabled>price range</option>
                                <option value="1">$</option>
                                <option value="2">$$</option>
                                <option value="3">$$$</option>
                                <option value="4">$$$$</option>
                                <option value="5">$$$$$</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <button type="submit" className="btn btn-primary btn" onClick={handleSubmit}>Add restaurant</button>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default AddRestaurant;