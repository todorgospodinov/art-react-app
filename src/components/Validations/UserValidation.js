import * as yup from 'yup';

export const userSchema = yup.object().shape({
email: yup.string().email("Email must be valid email address").min(3).max(10).required("Email is required"),
password:yup.string().min(6,"Password must be min 6 characters").max(10,"Password must be max 10 characters").required("Password is required")

})
