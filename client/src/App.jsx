import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import RestaurantDetail from "./routes/RestaurantDetail";
import UpdateRestaurant from "./routes/UpdateRestaurant";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/restaurants/:id" component={RestaurantDetail} />
                <Route exact path="/restaurants/:id/update" component={UpdateRestaurant} />
            </Switch>
        </Router>
    );
}

export default App;