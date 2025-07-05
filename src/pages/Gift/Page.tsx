import Container from "@/components/common/Container";
import Category from "@/pages/Gift/components/Category";
import Ranking from "@/pages/Gift/components/Ranking";
import Friend from "@/pages/Gift/components/Friend";
import Divider from "@/components/common/Divider";
import Banner from "@/pages/Gift/components/Banner";

const Gift = () => {
  return (
    <Container>
      <Friend />
      <Divider />
      <Category />
      <Divider />
      <Banner />
      <Divider />
      <Ranking />
    </Container>
  );
};

export default Gift;
