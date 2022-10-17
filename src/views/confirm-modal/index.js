import React from "react";
import { BtnWrapper } from "./styles";

function ConfirmModal({ onConfirm, onCancel }) {
  return (
    <div>
      <span>Are you sure you want to delete this movie?</span>
      <BtnWrapper>
        <button onClick={onConfirm}>Yes, delete</button>
        <button className="cancel" onClick={onCancel}>
          Cancel
        </button>
      </BtnWrapper>
    </div>
  );
}

export default ConfirmModal;
