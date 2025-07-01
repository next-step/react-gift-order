import styled from "@emotion/styled";

type ThemeButtonProps = {
  image: string;
  caption: string;
};

function ThemeButton({ image, caption }: ThemeButtonProps) {
  return (
    <ThemeButtonWrapper
      onClick={() => {
        console.log(`Navigate to ${caption}`);
      }}
    >
      <ThemeImageHolder src={image} alt="image" />
      <p>{caption}</p>
    </ThemeButtonWrapper>
  );
}

const ThemeImageHolder = styled.img`
  width: 38%;
  height: 38%;
`;

const ThemeButtonWrapper = styled.button`
  background-color: white;
  width: 100px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 20%;
  cursor: pointer;
`;

export default ThemeButton;
