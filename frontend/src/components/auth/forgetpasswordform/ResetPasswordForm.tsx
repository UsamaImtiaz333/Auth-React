import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReuseableAuthForm } from "../reusable/ReuseableAuthForm";
import { ResetPasswordSchema, type ResetPasswordFormData } from "@/validations/SchemaForms/AuthFormSchema/ResetPasswordSchema";
 // type-only

function ResetPasswordForm() {
  const { handleSubmit, control, formState: { errors } } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(ResetPasswordSchema),
  });

  const handleResetPass = (data: ResetPasswordFormData) => {
    console.log("Password Created", data);
    // API call to reset password
  };

  return (
    <ReuseableAuthForm<ResetPasswordFormData>
      title="Reset Your Password"
      subtitle="Enter Your New Password"
      fields={[
        { id: "password", label: "New Password", type: "password", placeholder: "********", required: true },
        { id: "confirmPassword", label: "Confirm Password", type: "password", placeholder: "********", required: true },
      ]}
      buttonText="Reset Password"
      bottomText="Don't have an account?"
      bottomLinkText="Sign up"
      bottomLinkTo="/signup"
      onSubmit={handleSubmit(handleResetPass)}
      control={control}
      errors={errors}
    />
  );
}

export default ResetPasswordForm;
