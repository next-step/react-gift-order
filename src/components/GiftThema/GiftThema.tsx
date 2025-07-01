import { themes } from '@/data/themes';
import { Title, Section, ThemeListContainer, YellowBox } from '@/components/GiftThema/GiftThema.styles';
import ThemeList from '@/components/Common/ThemeList/ThemeList';

export default function GiftThema() {
  return (
    <Section>
      <Title>선물 테마</Title>

      <ThemeListContainer>
        {themes.map((item) => (
          <ThemeList
            key={item.name}
            image={item.image}
            name={item.name}
          />
        ))}
      </ThemeListContainer>

      <YellowBox>
        <div>카카오테크 캠퍼스 3기 여러분</div>
        <div>프론트엔드 2단계 과제 화이팅! 🎉</div>
      </YellowBox>
    </Section>
  );
}
