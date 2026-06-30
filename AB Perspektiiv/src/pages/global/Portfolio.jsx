import PortfolioTabs from "../../components/Tabs";
import InteriorCards from "../../components/home/InteriorCards";
import ArchitectureCards from "../../components/home/ArchitectureCards";
import Footer from "../../components/home/Footer";

function Portfolio() {
  return (
    <div className="portfolio-page">
      <PortfolioTabs />
      <ArchitectureCards />
      <InteriorCards />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Portfolio;
