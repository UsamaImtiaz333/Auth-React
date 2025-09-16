import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReuseableAuthForm } from "../reusable/ReuseableAuthForm";
import { SignUpSchema } from "@/validations/SchemaForms/AuthFormSchema/SignUpSchema";
import type { SignUpFormData } from "@/validations/SchemaForms/AuthFormSchema/SignUpSchema";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";

function SignUpForm() {
  const queryClient = useQueryClient();

  const signupMutation = useMutation({
    mutationFn: async (formData: SignUpFormData) => {
      const response = await axios.post(
        "http://localhost:3000/user/register-form",
        formData
      );
      return response.data;
    },
    onSuccess: (data) => {
      console.log("Signup Successful:", data);
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error("Signup Failed:", error);
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSignup = (data: SignUpFormData) => {
    signupMutation.mutate(data);
  };

  return (
    <ReuseableAuthForm<SignUpFormData>
      title="Create your account"
      subtitle="Fill in the inputs to sign up for your account"
      fields={[
        {
          id: "firstName",
          label: "First Name",
          type: "text",
          placeholder: "Usama",
          required: true,
        },
        {
          id: "lastName",
          label: "Last Name",
          type: "text",
          placeholder: "Imtiaz",
          required: true,
        },
        {
          id: "email",
          label: "Email",
          type: "email",
          placeholder: "m@example.com",
          required: true,
        },
        {
          id: "password",
          label: "Password",
          type: "password",
          placeholder: "********",
          required: true,
        },
        {
          id: "confirmPassword",
          label: "Confirm Password",
          type: "password",
          placeholder: "********",
          required: true,
        },
      ]}
      buttonText={signupMutation.isPending ? "Signing Up..." : "Sign Up"}
      bottomText="Already have an account?"
      bottomLinkText="Login"
      bottomLinkTo="/login"
      onSubmit={handleSubmit(handleSignup)}
      control={control}
      errors={errors}
    />
  );
}

export default SignUpForm;
