import Input from "components/input";
import { FormWrapper } from "layout/header/styles";
import React from "react";
import { useForm } from "react-hook-form";

function UsernameForm({ onSubmit, id }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <FormWrapper id={id} onSubmit={handleSubmit(onSubmit)}>
      <Input
        inputProps={{
          type: "text",
          placeholder: "Username",
        }}
        register={register}
        name="username"
        errors={errors}
        registerOptions={{
          required: true,
          minLength: {
            value: 3,
            message: "Username should be at least 3 characters long",
          },
        }}
      />
    </FormWrapper>
  );
}

export default UsernameForm;
