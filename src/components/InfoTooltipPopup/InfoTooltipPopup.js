import "./InfoTooltipPopup.css";

function InfoToolTip(props) {
  return (
    <section
      className={`popup popup_type_status-reg  ${
        props.isOpen ? "popup_opened" : ""
      }`}
      onClick={props.onCloseOverlay}
    >
      <div className={`popup__container-status`}>
        <button
          onClick={props.onClose}
          className="popup__button-close"
          type="button"
          aria-label="Закрыть окно."
        ></button>
        <h2 className="popup__title">{props.message}</h2>
      </div>
    </section>
  );
}

export default InfoToolTip;
