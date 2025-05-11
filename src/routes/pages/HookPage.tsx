import {
  useCardNumber,
  useCvcNumber,
  useExpirationDate,
  usePassword,
} from "hoyychoi-payment-hook";
import "../../App.css";
import { useNavigate } from "react-router";

function HookPage() {
  const navigate = useNavigate();

  const cardNumber = useCardNumber(" - ");
  const expirationDate = useExpirationDate(" / ");
  const cvcNumber = useCvcNumber();
  const password = usePassword();

  const cardInformation = {
    카드번호: cardNumber,
    유효기간: expirationDate,
    cvc: cvcNumber,
    비밀번호: password,
  };

  const allValid =
    cardNumber.isValid &&
    expirationDate.isValid &&
    cvcNumber.isValid &&
    password.isValid;

  return (
    <main>
      <h2 className='cardType'>카드 타입: {cardNumber.cardType}</h2>
      {Object.entries(cardInformation).map(([label, field]) => (
        <div key={label} className='form-group'>
          <label className='form-label'>{label}</label>
          <input
            className={`form-input ${field.error && "form-input-error"}`}
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
          />
          <p className='form-error-message'>{field.errorMessage}</p>
        </div>
      ))}

      <div className='button-wrapper'>
        <button
          className='module-button'
          disabled={!allValid}
          style={{ opacity: `${allValid ? 1 : 0.5}` }}
          onClick={() => {
            alert("카드 등록 완료");
            navigate("/");
          }}
        >
          완료
        </button>
        <button
          className='module-button'
          style={{ backgroundColor: "#415232" }}
          onClick={() => navigate("/")}
        >
          뒤로 가기
        </button>
      </div>
    </main>
  );
}

export default HookPage;
