import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { BsFillPencilFill } from "react-icons/bs";
import { main } from "../styles/theme";

interface TodoModalProps {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  modifyContents: string;
  setModifyContents: Dispatch<SetStateAction<string>>;
  onModify: () => void;
}
const TodoModal: React.FC<TodoModalProps> = ({
  setIsModal,
  modifyContents,
  onModify,
  setModifyContents,
}) => {
  const onCloseModal = (): void => {
    setIsModal(false);
  };
  return (
    <TodoModalContainer onClick={onCloseModal}>
      <div className="modal">
        <div className="title">
          <h3>Todo 수정하기</h3>
          <BsFillPencilFill />
        </div>
        <div className="contents">
          <input type="text" placeholder="수정할 내용을 입력해주세요" />
          <button>수정하기</button>
        </div>
      </div>
    </TodoModalContainer>
  );
};

const TodoModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;

  .modal {
    border: 1px solid ${main};
    width: 40%;
    height: 40%;
    background-color: white;
    border-radius: 10px;
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;

    .title {
      display: flex;
      text-align: center;
      margin: 10px;
    }
    .contents {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      input {
        width: 250px;
        border: none;
        border-bottom: 1px solid ${main};
        margin: 30px;
        &:focus {
          outline: none;
        }
      }
      button {
        background-color: ${main};
        color: white;
        font-weight: 900;
        border: none;
        padding: 10px;
        cursor: pointer;
        &:active {
          box-shadow: inset -0.3rem -0.1rem 1.4rem #fbfbfb,
            inset 0.3rem 0.4rem 0.8rem #bec5d0;
          cursor: pointer;
        }
      }
    }
  }
`;
export default TodoModal;
