import Input from "components/input";
import { FormWrapper } from "layout/header/styles";
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { BtnWrapper } from "./styles";

function AddEditMovieForm({ onSubmit, id, values, isEdit, onClose }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: useMemo(() => {
      return values;
    }, [values]),
  });

  const form = watch();
  const isDisabled = JSON.stringify(values) === JSON.stringify(form);

  return (
    <>
      <FormWrapper id={id} onSubmit={handleSubmit(onSubmit)}>
        <Input
          inputProps={{
            type: "text",
            placeholder: "Title",
          }}
          register={register}
          name="title"
          errors={errors}
          registerOptions={{
            required: true,
            minLength: {
              value: 3,
              message: "Title should be at least 3 characters long",
            },
          }}
        />
        <Input
          inputProps={{
            type: "date",
            placeholder: "Year",
            min: "1997-01-01",
            max: "2030-12-31",
          }}
          register={register}
          name="year"
          registerOptions={{
            required: true,
            minLength: {
              value: 3,
              message: "Year should be at least 3 characters long",
            },
          }}
          errors={errors}
        />
        <Input
          inputProps={{
            type: "text",
            placeholder: "Runtime",
          }}
          register={register}
          name="runtime"
          registerOptions={{
            required: true,
            minLength: {
              value: 3,
              message: "Runtime should be at least 3 characters long",
            },
          }}
          errors={errors}
        />
        <Input
          inputProps={{
            type: "text",
            placeholder: "Genre",
          }}
          registerOptions={{
            required: true,
            minLength: {
              value: 3,
              message: "Genre should be at least 3 characters long",
            },
          }}
          register={register}
          name="genre"
          errors={errors}
        />
        <Input
          inputProps={{
            type: "text",
            placeholder: "Director",
          }}
          registerOptions={{
            required: true,
            minLength: {
              value: 3,
              message: "Director should be at least 3 characters long",
            },
          }}
          register={register}
          name="director"
          errors={errors}
        />
        {isEdit && (
          <BtnWrapper>
            <button disabled={isDisabled} form={id}>
              Save
            </button>
            <button className="cancel" onClick={onClose}>
              Cancel
            </button>
          </BtnWrapper>
        )}
      </FormWrapper>
    </>
  );
}

export default AddEditMovieForm;
