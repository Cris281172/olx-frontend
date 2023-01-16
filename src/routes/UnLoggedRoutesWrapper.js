import {Routes, Route} from 'react-router-dom';
import Layout from '../components/Layout'
import Home from '../components/homepage/Home'
import Registration from '../components/registration/Registration'
import ResetPassword from '../components/ResetPassword'
import Login from '../components/login/Login'
import NoMatch from "../components/no-match/NoMatch";
import DisplayingAdvertisements from '../components/advertisements/advertisements/DisplayingAdvertisements'
import ChosenAdvertisement from "../components/advertisements/chosen-advertisement/ChosenAdvertisement";
import ListOfCategories from "../components/categories/ListOfCategories";
import Advertisements from "../components/advertisements/advertisements/Advertisements";

const UnLoggedRoutesWrapper = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/rejestracja" element={<Registration />} />
                <Route path="/reset" element={<ResetPassword />} />
                <Route path="/logowanie" element={<Login />} />
                <Route path="/ogloszenia" element={<Advertisements />} />
                <Route path="/ogloszenie/:id" element={<ChosenAdvertisement />} />
                <Route path="/ogloszenia/kategoria/:id" element={<DisplayingAdvertisements />} />
                <Route path="/kategorie" element={<ListOfCategories />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
        )
}

export default UnLoggedRoutesWrapper