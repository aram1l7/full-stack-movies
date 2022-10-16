import Input from "components/input";
import { FormWrapper } from "layout/header/styles";
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";

function AddEditMovieForm({ onSubmit, id, values }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: useMemo(() => {
      return values;
    }, [values]),
  });

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
      </FormWrapper>
    </>
  );
}

export default AddEditMovieForm;
