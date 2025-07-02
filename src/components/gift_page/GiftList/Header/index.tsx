import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { TargetButton } from './TargetButton';
import { TopicButton } from './TopicButton';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
  background-color: white;
`;

const Title = styled.div`
  ${({ theme }) => theme.typography.title1Bold};
  margin-top: ${({ theme }) => theme.spacing.spacing10};
  margin-left: ${({ theme }) => theme.spacing.spacing4};
  color: black;
`;

const TargetBtnContainer = styled.div`
  width: calc(100% - ${({ theme }) => theme.spacing.spacing10});
  height: 4.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.spacing4};
  margin-left: ${({ theme }) => theme.spacing.spacing5};
  margin-right: ${({ theme }) => theme.spacing.spacing5};
`;

const TopicBtnContainer = styled.div`
  width: 100%;
  height: 3.7rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: calc(100% - ${({ theme }) => theme.spacing.spacing8});
  height: calc(100% - ${({ theme }) => theme.spacing.spacing4});
  background-color: white;
  margin-left: ${({ theme }) => theme.spacing.spacing4};
  margin-right: ${({ theme }) => theme.spacing.spacing4};
  overflow: hidden;
  border-radius: 0.5rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.blue300};
`;

export const Header = () => {
  // Target State
  const [currentTarget, setCurrentTarget] = useState('');
  const [allIsClicked, setAllIsClicked] = useState(false);
  const [femaleIsClicked, setFemaleIsClicked] = useState(false);
  const [maleIsClicked, setMaleIsClicked] = useState(false);
  const [youthIsClicked, setYouthIsClicked] = useState(false);
  // Topic State
  const [currentTopic, setCurrentTopic] = useState('');
  const [isWanted, setIsWanted] = useState(false);
  const [isMostGifted, setIsMostGifted] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if ('currentTarget' in localStorage) {
      const value = localStorage.getItem('currentTarget');
      handleTargetClick(value!);
    } else {
      handleTargetClick('All');
      localStorage.setItem('currentTarget', 'All');
    }

    if ('currentTopic' in localStorage) {
      const value = localStorage.getItem('currentTopic');
      handleTopicClick(value!);
    } else {
      handleTopicClick('Wanted');
      localStorage.setItem('currentTopic', 'Wanted');
    }
  }, []);

  const handleTargetClick = (type: string) => {
    if (type === 'All') {
      setAllIsClicked(true);
      setFemaleIsClicked(false);
      setMaleIsClicked(false);
      setYouthIsClicked(false);
      localStorage.setItem('currentTarget', 'All');
    } else if (type === 'Female') {
      setAllIsClicked(false);
      setFemaleIsClicked(true);
      setMaleIsClicked(false);
      setYouthIsClicked(false);
      localStorage.setItem('currentTarget', 'Female');
    } else if (type === 'Male') {
      setAllIsClicked(false);
      setFemaleIsClicked(false);
      setMaleIsClicked(true);
      setYouthIsClicked(false);
      localStorage.setItem('currentTarget', 'Male');
    } else if (type === 'Youth') {
      setAllIsClicked(false);
      setFemaleIsClicked(false);
      setMaleIsClicked(false);
      setYouthIsClicked(true);
      localStorage.setItem('currentTarget', 'Youth');
    }
  };

  useEffect(() => {
    handleTargetClick(currentTarget);
  }, [currentTarget]);

  const handleTopicClick = (type: string) => {
    if (type === 'Wanted') {
      setIsWanted(true);
      setIsMostGifted(false);
      setIsWishlisted(false);
      localStorage.setItem('currentTopic', 'Wanted');
    } else if (type === 'MostGifted') {
      setIsWanted(false);
      setIsMostGifted(true);
      setIsWishlisted(false);
      localStorage.setItem('currentTopic', 'MostGifted');
    } else if (type === 'Wishlisted') {
      setIsWanted(false);
      setIsMostGifted(false);
      setIsWishlisted(true);
      localStorage.setItem('currentTopic', 'Wishlisted');
    }
  };

  useEffect(() => {
    handleTopicClick(currentTopic);
  }, [currentTopic]);

  return (
    <Container>
      <Title>실시간 급상승 선물랭킹</Title>
      <TargetBtnContainer>
        <TargetButton
          targetType="All"
          isClicked={allIsClicked}
          setCurrentTarget={setCurrentTarget}
          aria-pressed={allIsClicked}
        />
        <TargetButton
          targetType="Female"
          isClicked={femaleIsClicked}
          setCurrentTarget={setCurrentTarget}
          aria-pressed={femaleIsClicked}
        />
        <TargetButton
          targetType="Male"
          isClicked={maleIsClicked}
          setCurrentTarget={setCurrentTarget}
          aria-pressed={maleIsClicked}
        />
        <TargetButton
          targetType="Youth"
          isClicked={youthIsClicked}
          setCurrentTarget={setCurrentTarget}
          aria-pressed={youthIsClicked}
        />
      </TargetBtnContainer>
      <TopicBtnContainer>
        <Wrapper>
          <TopicButton
            topicType="Wanted"
            isClicked={isWanted}
            setCurrentTopic={setCurrentTopic}
            aria-pressed={isWanted}
          />
          <TopicButton
            topicType="MostGifted"
            isClicked={isMostGifted}
            setCurrentTopic={setCurrentTopic}
            aria-pressed={isMostGifted}
          />
          <TopicButton
            topicType="Wishlisted"
            isClicked={isWishlisted}
            setCurrentTopic={setCurrentTopic}
            aria-pressed={isWishlisted}
          />
        </Wrapper>
      </TopicBtnContainer>
    </Container>
  );
};
