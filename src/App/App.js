import Navbar from './Navbar/Navbar'
import './App.less';
import Cart from '../Cart/Cart';
import ContactUs from '../ContactUs/ContactUs';
import DeliveryDispatch from '../DeliveryDispatch/DeliveryDispatch';
import Homepage from '../Homepage/Homepage';
import AboutUs from '../AboutUs/AboutUs';
import Blog from '../Blog/Blog';
import Login from '../Login/Login';
import MyAccount from '../MyAccount/MyAccount';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//For testing, change value of User.loggedInStatus to anything. 'Login/Sign up' menu item will change in the nav bar
let User = {
    loggedInStatus: "CUSTOMER"
}

let routePath = "/login";
let userComponent = Login;

if(User.loggedInStatus === "CUSTOMER"){
    routePath = "/myaccount";
    userComponent = MyAccount;
    console.log("customer logged in");
}

const App = () => (


    <div>
        <Router>
            <Navbar {...User}/>
                <Switch>
                    <Route exact path = "/" component = {Homepage}/>
                    <Route path = "/deliverydispatch" component = {DeliveryDispatch}/>
                    <Route path = "/contactus" component = {ContactUs}/>
                    <Route path = "/aboutus" component = {AboutUs}/>
                    <Route path = "/blog" component = {Blog}/>
                    <Route path = {routePath} component = {userComponent}/>
                    <Route path = "/cart" component = {Cart}/> 
                </Switch>
            </Router>
    </div>
);

export default App;
