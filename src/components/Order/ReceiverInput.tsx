// import styled from '@emotion/styled';
// import useOrderForm from '@/hooks/useOrderForm';

// const ReceiverInputWrapper = styled.div`
//   padding: ${({ theme }) => theme.spacing.spacing3} ${({ theme }) => theme.spacing.spacing4};
//   padding-bottom: ${({ theme }) => theme.spacing.spacing4};
//   border-bottom: ${({ theme }) => theme.spacing.spacing2} solid ${({ theme }) => theme.colors.gray.gray200}; 
// `;

// const ReceiverInputTitle = styled.h2`
//   font-size: ${({ theme }) => theme.typography.title.title2Bold.fontSize};
//   font-weight: ${({ theme }) => theme.typography.title.title2Bold.fontWeight};
//   line-height: ${({ theme }) => theme.typography.title.title2Bold.lineHeight};
//   margin-bottom: 10px;
// `;

// const ReceiverInputNameWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: ${({ theme }) => theme.spacing.spacing2};
// `;

// const ReceiverInputNameLabel = styled.label`
//   font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
//   font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
//   line-height: ${({ theme }) => theme.typography.body.body1Regular.lineHeight};
//   color: ${({ theme }) => theme.colors.gray.gray900};
// `;

// const ReceiverInputName = styled.input`
//   width: 85%;
//   height: ${({ theme }) => theme.spacing.spacing8};
//   padding: ${({ theme }) => theme.spacing.spacing1} ${({ theme }) => theme.spacing.spacing3};

//   border-radius: 8px;
//   border: 1px solid ${({ theme }) => theme.colors.gray.gray400};
//   &:focus {
//     outline: none;
//     border: 1px solid ${({ theme }) => theme.colors.gray.gray700};
//   }

//   &::placeholder {
//     font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
//     font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
//     line-height: ${({ theme }) => theme.typography.body.body1Regular.lineHeight};
//     color: ${({ theme }) => theme.colors.gray.gray600};
//   }
// `;

// const ReceiverInputPhoneNumberWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: ${({ theme }) => theme.spacing.spacing2};
// `;

// const ReceiverInputPhoneNumberLabel = styled.label`
//   font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
//   font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
//   line-height: ${({ theme }) => theme.typography.body.body1Regular.lineHeight};
//   color: ${({ theme }) => theme.colors.gray.gray900};
// `;

// const ReceiverInputPhoneNumber = styled.input`
//   width:85%;
//   height: ${({ theme }) => theme.spacing.spacing9};
//   padding: ${({ theme }) => theme.spacing.spacing1} ${({ theme }) => theme.spacing.spacing3};

//   border-radius: 8px;
//   border: 1px solid ${({ theme }) => theme.colors.gray.gray400};
//   &:focus {
//     outline: none;
//     border: 1px solid ${({ theme }) => theme.colors.gray.gray700};
//   }

//   &::placeholder {
//     font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
//     font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
//     line-height: ${({ theme }) => theme.typography.body.body1Regular.lineHeight};
//     color: ${({ theme }) => theme.colors.gray.gray600};
//   }
// `;

// const ReceiverItemNumWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: ${({ theme }) => theme.spacing.spacing2};
// `;

// const ReceiverItemNumInputLabel = styled.label`
//   font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
//   font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
//   line-height: ${({ theme }) => theme.typography.body.body1Regular.lineHeight};
//   color: ${({ theme }) => theme.colors.gray.gray900};
// `;

// const ReceiverItemNumInput = styled.input`
//   width:85%;
//   height: ${({ theme }) => theme.spacing.spacing9};
//   padding: ${({ theme }) => theme.spacing.spacing1} ${({ theme }) => theme.spacing.spacing3};

//   border-radius: 8px;
//   border: 1px solid ${({ theme }) => theme.colors.gray.gray400};
//   &:focus {
//     outline: none;
//     border: 1px solid ${({ theme }) => theme.colors.gray.gray700};
//   }

//   &::placeholder {
//     font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
//     font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
//     line-height: ${({ theme }) => theme.typography.body.body1Regular.lineHeight};
//     color: ${({ theme }) => theme.colors.gray.gray600};
//   }
// `;

//  const ReceiverInputErrorTxt = styled.p`
//   font-size: ${({ theme }) => theme.typography.label.label2Regular.fontSize};
//   font-weight: ${({ theme }) => theme.typography.label.label2Regular.fontWeight};
//   line-height: ${({ theme }) => theme.typography.label.label2Regular.lineHeight};
//   padding-left: 80px;
//   color: ${({ theme }) => theme.colors.red.red700};
//   width: 95%;
//  `


// function ReceiverInput() {
//     // TODO: 이 커스텀훅 값들은 나중에 부모 컴포넌트에서 Props로 넘겨줄것을 고려하자
//     const {
//         selectedId,
//         senderName,
//         receiverName,
//         receiverPhoneNum,
//         itemCount,
//         selectedIdTxtError,
//         senderNameError,
//         receiverNameError,
//         receiverPhoneNumError,
//         itemCountError,
//         handleChangeSelectedId,
//         handleChangeSenderName,
//         handleChangeReceiverName,
//         handleChangeReceiverPhoneNum,
//         handleChangeItemCount,
//         setSelectedIdTxtError,
//         setSenderNameError,
//         setReceiverNameError,
//         setReceiverPhoneNumError,
//         setItemCountError
//       } = useOrderForm();

//     return (
//         <ReceiverInputWrapper>
//         <ReceiverInputTitle>받는 사람</ReceiverInputTitle>
//         <ReceiverInputNameWrapper>
//           <ReceiverInputNameLabel htmlFor="ReceiverInputName">
//             이름
//           </ReceiverInputNameLabel>
//             <ReceiverInputName
//               placeholder="이름을 입력하세요."
//               value={receiverName}
//               onChange={(e) => { handleChangeReceiverName(e.target.value) }}
//             ></ReceiverInputName>
//         </ReceiverInputNameWrapper>
//         {receiverNameError && <ReceiverInputErrorTxt>이름을 입력해 주세요.</ReceiverInputErrorTxt>}

//         <ReceiverInputPhoneNumberWrapper>
//           <ReceiverInputPhoneNumberLabel htmlFor="ReceiverInputName">
//             전화번호
//           </ReceiverInputPhoneNumberLabel>
//           <ReceiverInputPhoneNumber
//             placeholder="전화번호를 입력하세요"
//             value={receiverPhoneNum}
//             onChange={(e) => handleChangeReceiverPhoneNum(e.target.value)}
//           ></ReceiverInputPhoneNumber>
//         </ReceiverInputPhoneNumberWrapper>
//         {receiverPhoneNumError && <ReceiverInputErrorTxt>전화번호를 입력해 주세요.</ReceiverInputErrorTxt>}

//         <ReceiverItemNumWrapper>
//           <ReceiverItemNumInputLabel htmlFor="ReceiverInputName">
//             수량
//           </ReceiverItemNumInputLabel>
//           <ReceiverItemNumInput
//             type='number'
//             min='0'
//             step='1'
//             placeholder='수량'
//             value={itemCount}
//             onChange={(e) => handleChangeItemCount(parseInt(e.target.value))}
//           ></ReceiverItemNumInput>
//         </ReceiverItemNumWrapper>
//         {itemCountError && <ReceiverInputErrorTxt>구매 수량은 1개 이상이어야 합니다.</ReceiverInputErrorTxt>}
//       </ReceiverInputWrapper>
//     );
// }

// export default ReceiverInput;