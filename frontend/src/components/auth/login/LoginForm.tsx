import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/validations/SchemaForms/AuthFormSchema/LoginSchema";
import type { LoginFormData } from "@/validations/SchemaForms/AuthFormSchema/LoginSchema";
import { ReuseableAuthForm } from "../reusable/ReuseableAuthForm";
import { useMutation } from "@tanstack/react-query";
import { LoginFormApi } from "@/store/Auth/LoginFormApi"; 
import { AuthStore } from "@/store/Auth/AuthStore"; 
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const login = AuthStore((state) => state.login);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: LoginFormApi,
    onSuccess: (resData) => {
      login(resData.token, resData.user); 
      navigate("/"); 
    },
    onError: (error: any) => {
      console.log("Login error", error.message);
    },
  });

  const handleLogin = (data: LoginFormData) => {
    loginMutation.mutate(data);
  };

  return (
    <ReuseableAuthForm<LoginFormData>
      title="Login to your account"
      subtitle="Enter your email below to login"
      fields={[
        { id: "email", label: "Email", type: "email", placeholder: "m@example.com", required: true },
        { id: "password", label: "Password", type: "password", required: true },
      ]}
      buttonText={loginMutation.isPending ? "Logging in..." : "Login"}
      bottomText="Don't have an account?"
      bottomLinkText="Sign up"
      bottomLinkTo="/signup"
      extraLinkText="Forgot your password?"
      extraLinkTo="/email-verification"
      onSubmit={handleSubmit(handleLogin)}
      control={control}
      errors={errors}
    />
  );
}

export default LoginForm;
