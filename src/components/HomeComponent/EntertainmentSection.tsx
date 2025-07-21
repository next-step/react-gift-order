import { TextBox } from "../common/TextBox";

const Entertainment = () => {
  return (
    <div className="p-5 bg-white">
      <TextBox
        backgroundColorType="yellow"
        primaryText="카카오테크 캠퍼스 3기 여러분"
        secondaryText="프론트엔드 2단계 과제 화이팅! 🚀"
        smallButtonType="NONE"
        onSmallButtonClick={undefined}
        smallButtonChildren="시작하기"
      />
    </div>
  );
};

export default Entertainment;
