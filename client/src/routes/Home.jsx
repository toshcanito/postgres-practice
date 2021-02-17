import React from "react";
import AddRestaurant from "../components/AddRestaurant";
import Header from "../components/Header";
import List from "../components/List";

const Home = () => {
    return (
        <div className="container">
            <Header />
            <AddRestaurant />
            <List />
        </div>
    );
}

export default Home;