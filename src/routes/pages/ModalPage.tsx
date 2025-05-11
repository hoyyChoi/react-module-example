import { Modal } from "hoyychoi-modal-component";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router";
import "../../App.css";

const modals = ["modal", "alertModal", "confirmModal", "promptModal"] as const;

const ModalPage = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState({
    modal: false,
    promptModal: false,
    alertModal: false,
    confirmModal: false,
  });
  const [value, setValue] = useState("");

  return (
    <main>
      {modals.map((key) => (
        <button
          key={key}
          className='modal-select-button'
          onClick={() => setShow((prev) => ({ ...prev, [key]: true }))}
        >
          {key} 열기
        </button>
      ))}
      {show.modal &&
        createPortal(
          <Modal
            show={show.modal}
            onHide={() => setShow((prev) => ({ ...prev, modal: false }))}
          >
            <Modal.BackDrop />
            <Modal.Container size='large'>
              <Modal.Header
                className='blue'
                style={{ color: "red" }}
                closeButton
              >
                <Modal.Title>Title</Modal.Title>
              </Modal.Header>
              <Modal.Body className='blue' style={{ color: "red" }}>
                <Modal.Input />
              </Modal.Body>
              <Modal.Footer>
                <Modal.Trigger>
                  <Modal.Button>취소</Modal.Button>
                  <Modal.Button onClick={() => alert("확인")}>
                    확인
                  </Modal.Button>
                </Modal.Trigger>
              </Modal.Footer>
            </Modal.Container>
          </Modal>,
          document.body
        )}
      {show.alertModal &&
        createPortal(
          <Modal
            show={show.alertModal}
            onHide={() => setShow((prev) => ({ ...prev, alertModal: false }))}
          >
            <Modal.BackDrop />
            <Modal.AlertContainer
              title='아이디를 입력해 주세요.'
              description='아이디는 필수로 입력해야 합니다.'
              size='medium'
            />
          </Modal>,
          document.body
        )}
      {show.confirmModal &&
        createPortal(
          <Modal
            show={show.confirmModal}
            onHide={() => setShow((prev) => ({ ...prev, confirmModal: false }))}
          >
            <Modal.BackDrop />
            <Modal.ConfirmContainer
              title='카드를 삭제하시겠습니까?'
              description='삭제하면 복구하실 수 없습니다.'
              onClick={() => alert("삭제되었습니다.")}
              size='medium'
            />
          </Modal>,
          document.body
        )}
      {show.promptModal &&
        createPortal(
          <Modal
            show={show.promptModal}
            onHide={() => setShow((prev) => ({ ...prev, promptModal: false }))}
          >
            <Modal.BackDrop />
            <Modal.PromptContainer
              size='medium'
              title='쿠폰 번호를 입력해 주세요.'
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onClick={() => alert(value)}
            />
          </Modal>,
          document.body
        )}
      <button className='module-button' onClick={() => navigate("/")}>
        뒤로 가기
      </button>
    </main>
  );
};

export default ModalPage;
