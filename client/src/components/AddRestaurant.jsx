import React from "react";

const AddRestaurant = () => {
    return (
        <React.Fragment>
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-3">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="restaurant name" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="location" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="price range" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <button type="button" class="btn btn-primary btn">Restaurant add</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AddRestaurant;