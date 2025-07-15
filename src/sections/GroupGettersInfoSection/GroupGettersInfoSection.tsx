import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import type { FormValues } from "@/pages/OrderPage/OrderPage";
import AddGetterModal from "@/components/AddGetterModal/AddGetterModal";
import {
  SectionWrapper,
  SectionDivider,
  SectionTitle,
  AddGetterButton,
  InputRow,
  GetterList,
  GetterListTable,
  Text,
} from "@/sections/GroupGettersInfoSection/GroupGettersInfoSection.style";

const GroupGettersInfoSection = () => {
  const { watch, setValue } = useFormContext<FormValues>();
  const formGetters = watch("getters");
  const [displayGetters, setDisplayGetters] = useState(formGetters);
  const [modalGetters, setModalGetters] = useState(formGetters);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setDisplayGetters(formGetters);
  }, [formGetters]);

  const handleOpen = () => {
    setModalGetters(displayGetters);
    setIsModalOpen(true);
  };

  const handleConfirm = (newGetters: typeof displayGetters) => {
    setDisplayGetters(newGetters);
    setValue("getters", newGetters);
    setIsModalOpen(false);
  };

  return (
    <>
      <SectionDivider />
      <SectionWrapper>
        <InputRow>
          <SectionTitle>받는 사람</SectionTitle>
          <AddGetterButton type="button" onClick={handleOpen}>
            {displayGetters.length > 0 ? "수정" : "추가"}
          </AddGetterButton>
        </InputRow>
        {isModalOpen && (
          <AddGetterModal
            open={isModalOpen}
            initialGetters={modalGetters}
            onClose={() => setIsModalOpen(false)}
            onConfirm={handleConfirm}
          />
        )}

        {displayGetters.length > 0 && (
          <GetterListTable as="table">
            <thead>
              <tr>
                <th>이름</th>
                <th>전화번호</th>
                <th>수량</th>
              </tr>
            </thead>
            <tbody>
              {displayGetters.map((getter, idx) => (
                <tr key={idx}>
                  <td>{getter.name}</td>
                  <td>{getter.phone}</td>
                  <td>{getter.quantity}</td>
                </tr>
              ))}
            </tbody>
          </GetterListTable>
        )}

        {displayGetters.length === 0 && (
          <GetterList>
            <Text>
              받는 사람이 없습니다.
              <br />
              받는 사람을 추가해주세요.
            </Text>
          </GetterList>
        )}
      </SectionWrapper>
    </>
  );
};

export default GroupGettersInfoSection;
