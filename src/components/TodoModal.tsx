import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { BsFillPencilFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { main } from "../styles/theme";

interface TodoModalProps {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  modifyContents: string;
  setModifyContents: Dispatch<SetStateAction<string>>;
  modifyTodo: () => void;
}
const TodoModal: React.FC<TodoModalProps> = ({
  setIsModal,
  modifyContents,
  modifyTodo,
  setModifyContents,
}) => {
  const onCloseModal = (): void => {
    setIsModal(false);
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setModifyContents(e.target.value);
  };
  return (
    <TodoModalContainer>
      <div>
        <div className="modal">
          <div className="title">
            <h3>Todo 수정하기</h3>
            <BsFillPencilFill />
          </div>
          <div className="close-btn" onClick={onCloseModal}>
            <AiOutlineClose />
          </div>
          <div className="contents">
            <input
              type="text"
              placeholder="수정할 내용을 입력해주세요"
              value={modifyContents}
              onChange={onChange}
            />
            <button onClick={modifyTodo}>수정하기</button>
          </div>
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
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
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
    .close-btn {
      position: relative;
      top: -30px;
      right: -190px;
      cursor: pointer;
    }
  }
`;
export default TodoModal;
