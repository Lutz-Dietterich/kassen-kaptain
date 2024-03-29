import styled from "styled-components";
import useTransactionStore from "../../../zustand/transactionStore";

export default function TextField() {
  const { message, setMessage } = useTransactionStore((state) => ({
    message: state.message,
    setMessage: state.setMessage,
  }));

  return (
    <>
      <StyledLabel htmlFor="logbuch">Seemannsgarn</StyledLabel>
      <StyledTextarea
        type="text"
        id="logbuch"
        name="logbuch"
        value={message}
        placeholder="Mache einen Eintrag im Logbuch"
        onChange={(e) => setMessage(e.target.value)}
        maxLength={149}
      />
    </>
  );
}

const StyledLabel = styled.label`
  color: var(--primary-color-1);
  width: 100%;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 5px;
  background-color: white;
  color: var(--primary-color-1);
  border: 1px solid var(--color-border);
  border-radius: 5px;
  margin-bottom: 30px;
  resize: none;

  &::placeholder {
    color: var(--color-border);
  }
`;
