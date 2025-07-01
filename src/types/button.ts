export interface TargetButtonType {
  type: string;
  isClicked: boolean;
  setCurrentTarget: React.Dispatch<React.SetStateAction<string>>;
}

export interface TopicButtonType {
  type: string;
  isClicked: boolean;
  setCurrentTopic: React.Dispatch<React.SetStateAction<string>>;
}

export interface MoreButtonType {
  isViewMore: boolean;
  setIsViewMore: React.Dispatch<React.SetStateAction<boolean>>;
}
