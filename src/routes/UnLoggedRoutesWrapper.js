import {Routes, Route} from 'react-router-dom';
import Layout from '../components/Layout'
import Home from '../components/homepage/Home'
import Register from '../components/Register'
import ResetPassword from '../components/ResetPassword'
import Login from '../components/Login'
import NoMatch from "../components/NoMatch";
import Advertisements from '../components/advertisements/Advertisements'
import ChosenAdvertisement from "../components/advertisements/ChosenAdvertisement";
import ListOfCategories from "../components/categories/ListOfCategories";

const UnLoggedRoutesWrapper = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/reset" element={<ResetPassword />} />
                <Route path="/login" element={<Login />} />
                <Route path="/advertisements" element={<Advertisements />} />
                <Route path="/advertisement/:id" element={<ChosenAdvertisement />} />
                <Route path="/advertisements/category/:id" element={<Advertisements />} />
                <Route path="/categories" element={<ListOfCategories />} />
            </Route>
        </Routes>
        )
}

export default UnLoggedRoutesWrapper