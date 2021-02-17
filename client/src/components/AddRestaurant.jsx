import React from "react";

const AddRestaurant = () => {
    return (
        <React.Fragment>
            <div className="mb-4">
                <form action="">
                    <div className="row">
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="name" />
                        </div>
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="location" />
                        </div>
                        <div className="col-md-3">
                            <select className="form-control custom-select">
                                <option disabled selected>price range</option>
                                <option value="1">$</option>
                                <option value="2">$$</option>
                                <option value="3">$$$</option>
                                <option value="4">$$$$</option>
                                <option value="5">$$$$$</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <button type="submit" class="btn btn-primary btn">Add restaurant</button>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default AddRestaurant;