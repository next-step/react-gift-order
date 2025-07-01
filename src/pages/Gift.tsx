import Container from "@/components/Container";
import Category from "@/components/Category";
import Ranking from "@/components/Ranking";
import Friend from "@/components/Friend";
import Divider from "@/components/Divider";
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
