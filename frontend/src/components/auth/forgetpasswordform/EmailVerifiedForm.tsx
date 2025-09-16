import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReuseableAuthForm } from "../reusable/ReuseableAuthForm";
import { EmailVerifiedSchema, type EmailVerifiedFormData } from "@/validations/SchemaForms/AuthFormSchema/EmailVerifiedSchema";

function EmailVerifiedForm() {
  const { handleSubmit, control, formState: { errors } } = useForm<EmailVerifiedFormData>({
    resolver: zodResolver(EmailVerifiedSchema),
  });

  const handleEmailVerified = (data: EmailVerifiedFormData) => {
    console.log("Form Submitted Data:", data);
    // API call here
  };

  return (
    <ReuseableAuthForm<EmailVerifiedFormData>
      title="Verifying Your Email"
      subtitle="Enter your email to reset your password"
      fields={[
        { id: "email", label: "Email", type: "email", placeholder: "m@example.com", required: true },
      ]}
      buttonText="Verify Email"
      bottomText="Don't have an account?"
      bottomLinkText="Sign up"
      bottomLinkTo="/signup"
      onSubmit={handleSubmit(handleEmailVerified)} // ✅ type-safe submit
      control={control} // ✅ pass control
      errors={errors}   // ✅ pass errors
    />
  );
}

export default EmailVerifiedForm;
