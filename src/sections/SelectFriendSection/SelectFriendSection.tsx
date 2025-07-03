import { FiPlus } from "react-icons/fi";
import {
  Wrapper,
  Container,
  PlusButton,
  Title,
} from "@/sections/SelectFriendSection/SelectFriendSection.style";

const SelectFriendSection = () => {
  return (
    <Wrapper>
      <Container>
        <PlusButton>
          <FiPlus size={30} />
        </PlusButton>
        <Title>선물할 친구를 선택해 주세요.</Title>
      </Container>
    </Wrapper>
  );
};

export default SelectFriendSection;
