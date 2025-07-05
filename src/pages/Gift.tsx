import Container from "@/components/common/Container";
import Category from "@/components/Category";
import Ranking from "@/components/Ranking";
import Friend from "@/components/Friend";
import Divider from "@/components/common/Divider";
import Banner from "@/components/Banner";

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
