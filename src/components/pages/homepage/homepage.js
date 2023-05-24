import CustomMain from "../../organisms/customMain/customMain";
import DogSection from "../../organisms/dogGallery/dogSection";
import PostCodeLookup from "../../organisms/postCodeLookup/postCodeLookup";
import NavBar from "../../organisms/navBar/navBar";
import SectionsWrapper from "../../organisms/sectionsWrapper/sectionsWrapper";

function Homepage() {
  return (
    <>
      <CustomMain>
        <NavBar />
        <SectionsWrapper>
          <DogSection />
          <PostCodeLookup />
        </SectionsWrapper>
      </CustomMain>
    </>
  );
}

export default Homepage;
