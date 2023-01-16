import SearchEngine from "./search-engine/SearchEngine";
import Categories from "./categories/Categories";
import PromotedAdvertisements from "./promoted-advertisements/PromotedAdvertisements";

const Home = () => {
    return(
        <div>
            <SearchEngine />
            <Categories />
            <PromotedAdvertisements />
        </div>
        )
}

export default Home;