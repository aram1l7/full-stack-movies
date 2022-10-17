import React from "react";
import { ErrorMessage, InputWrapper, StyledInput } from "./styles";
import { capitalizeWord } from "utils/capitalizeWord";

function Input({ inputProps, register, name, registerOptions, errors, style }) {
  return (
    <InputWrapper>
      <StyledInput
        style={style}
        {...(inputProps || {})}
        {...register(name, { ...registerOptions })}
      />
      {errors[name]?.type === "required" && (
        <ErrorMessage>{capitalizeWord(name)} is required</ErrorMessage>
      )}
      {errors[name]?.type === "minLength" && (
        <ErrorMessage>{errors[name].message}</ErrorMessage>
      )}
    </InputWrapper>
  );
}

export default Input;
