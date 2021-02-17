import React from "react";

const List = () => {
    return (
        <div className="list-group text-center">
            <table className="table table-hover table-dark">
                <thead>

                </thead>
                <tbody>
                    <tr className="bg-primary">
                        <th>Restaurant</th>
                        <th>Location</th>
                        <th>Price Range</th>
                        <th>Ratings</th>
                        <th>Actions</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default List;