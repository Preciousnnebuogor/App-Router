import * as yup from "yup";

export const Schema = yup.object().shape({
  password: yup.string().required("please, enter a password")
  .min(8, "password must contain 8 0r more character with at least one of each: uppercase, lowercase, number and special") 
  
  

});



