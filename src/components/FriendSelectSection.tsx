import Button from '@/components/common/Button';
import styled from '@emotion/styled';

const FriendSelectSection = () => {
  return (
    <Section>
      <Button
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2a3038"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        }
      >
        선물할 친구를 선택해 주세요.
      </Button>
    </Section>
  );
};

export default FriendSelectSection;

const Section = styled.section`
  box-sizing: border-box;
  height: 106px;
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[3]}`};
  background-color: ${({ theme }) => theme.color.gray[200]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;
