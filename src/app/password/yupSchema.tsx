import * as yup from "yup";

export const Schema = yup.object().shape({
  password: yup
    .string()
    .required("please, enter a password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must contain 8 characters, One Uppercase,One Lowercase,One Number and One Special case character"
    ),
});
