import styled from "@emotion/styled";
import { useEffect, useImperativeHandle, useState, forwardRef } from "react";
import { mockCardTemplateData } from "@/mock/mockData";
import { validateMessage } from "@/utils/validators";

export type MessageCardHandle = {
  validate: () => boolean;
};

type Props = {
  onMessageChange?: (message: string) => void;
};

const MessageCard = forwardRef<MessageCardHandle, Props>(
  ({ onMessageChange }, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [message, setMessage] = useState(
      mockCardTemplateData[0].defaultTextMessage,
    );
    const [error, setError] = useState("");

    useEffect(() => {
      onMessageChange?.(message);
    }, [message, onMessageChange]);

    const handleSelect = (index: number) => {
      setSelectedIndex(index);
      const newMessage = mockCardTemplateData[index].defaultTextMessage;
      setMessage(newMessage);
      onMessageChange?.(newMessage);
      setError("");
    };

    const handleMessageChange = (value: string) => {
      setMessage(value);
      setError("");
    };

    useImperativeHandle(ref, () => ({
      validate: () => {
        const msg = validateMessage(message);
        setError(msg);
        return msg === "";
      },
    }));

    return (
      <Wrapper>
        <ThumbnailList>
          {mockCardTemplateData.map((card, index) => (
            <Thumbnail
              key={card.id}
              src={card.thumbUrl}
              alt={`${card.id}번 카드 Thumbnail`}
              onClick={() => handleSelect(index)}
              isSelected={selectedIndex === index}
            />
          ))}
        </ThumbnailList>

        <SelectedImageWrapper>
          <SelectedImage
            src={mockCardTemplateData[selectedIndex].imageUrl}
            alt="선택된 카드"
          />
        </SelectedImageWrapper>

        <MessageInput
          value={message}
          onChange={(e) => handleMessageChange(e.target.value)}
          placeholder="축하 메시지를 입력하세요."
        />
        {error && <ErrorText>{error}</ErrorText>}
      </Wrapper>
    );
  },
);

export default MessageCard;

const Wrapper = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ThumbnailList = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 8px;
  padding-bottom: 4px;

  scrollbar-width: auto;
  scrollbar-color: #ccc transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #bbb;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const Thumbnail = styled.img<{ isSelected: boolean }>`
  width: 96px;
  height: 56px;
  border-radius: ${({ theme }) => theme.spacing.spacing1};
  object-fit: cover;
  cursor: pointer;
  border: ${({ isSelected, theme }) =>
    isSelected
      ? `2px solid ${theme.colors.colorScale.gray.gray1000}`
      : `1px solid ${theme.colors.colorScale.gray.gray400}`};
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.6)};
`;

const SelectedImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SelectedImage = styled.img`
  max-width: 50%;
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
`;

const MessageInput = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing4};
  margin: ${({ theme }) => `${theme.spacing.spacing2} 0`};
  border: 1px solid ${({ theme }) => theme.colors.semantic.border.default};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  line-height: ${({ theme }) => theme.typography.body2Regular.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
  resize: vertical;
  box-sizing: border-box;

  &::placeholder {
    color: ${({ theme }) => theme.colors.semantic.text.placeholder};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.colorScale.gray.gray600};
  }
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.semantic.status.critical};
  ${({ theme }) => theme.typography.label2Regular};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
`;
