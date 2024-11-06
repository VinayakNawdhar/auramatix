import Carousel from "./components/Carousel";
import NameHeader from "./components/NameHeader";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import Section1 from "./components/Section1";

export default function Home() {
  return (
      <>
        <Nav/>
        <NameHeader name={"Liza"}/>
        <SearchBar/>
        <Carousel/>
        <Section1/>
      </>
  );
}
