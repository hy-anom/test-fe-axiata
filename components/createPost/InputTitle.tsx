'use client'

import React, { ChangeEvent } from "react";
import styles from "./InputTitle.module.css";

interface IInputTitleProps {
  value?: string;
  placeholder?: string;
  onChange?: (e:string) => void;
}

const InputTitle = ({value = '', placeholder= '', onChange }: IInputTitleProps) => {
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;
    onChange(e.target.value);
  }

  return (
    <div>
      <input
        onChange={handleInputChange}
        className={styles.inputTitle}
        type="text"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default InputTitle;
