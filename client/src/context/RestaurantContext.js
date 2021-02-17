import React, { useState } from "react";

export const RestaurantsContext = React.createContext();
export const RestaurantsContextProvider = (props) => {

    const [restaurants, setRestaurants] = useState([]);
    return (
        <RestaurantsContext.Provider value={{restaurants, setRestaurants}}>
            {props.children}
        </RestaurantsContext.Provider>
    );
}