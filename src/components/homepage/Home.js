import SearchEngine from "./search-engine/SearchEngine";
import Categories from "./categories/Categories";
import PromotedAdvertisements from "./promoted-advertisements/PromotedAdvertisements";
import FooterBusinessPartner from "./footer/FooterBusinessPartner";
import OlxInformationFooter from "./footer/OlxInformationFooter";

const Home = () => {
    return(
        <div>
            <SearchEngine />
            <Categories />
            <PromotedAdvertisements />
            <FooterBusinessPartner />
            <OlxInformationFooter />
        </div>
        )
}

export default Home;