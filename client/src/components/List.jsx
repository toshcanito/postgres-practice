import React, { useEffect, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder"
import { RestaurantsContext } from "../context/RestaurantContext";

const List = () => {
    const { restaurants, setRestaurants } = useContext(RestaurantsContext);
    useEffect(async () => {
        try {
            const { data } = await RestaurantFinder.get("/");
            setRestaurants(data.data);
        } catch (err) {
            console.log(err);
        }
    }, [])

    return (
        <div className="list-group">
            <table className="table table-hover">
                <thead className="table-dark">
                    <tr className="bg-primary">
                        <th>Restaurant</th>
                        <th>Location</th>
                        <th>Price Range</th>
                        <th>Ratings</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* if restaurants not null or undefined it will draw the rows */}
                    {restaurants && restaurants.map((restaurant) => {
                        return (<tr key={restaurant.id}>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.location}</td>
                            <td>{"$".repeat(restaurant.price_range)}</td>
                            <td>derp</td>
                            <td>
                                <div className="float-right">
                                    <button className="btn btn-warning">Update</button>
                                    <button className="btn btn-danger mx-1">Delete</button>
                                </div>
                            </td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default List;