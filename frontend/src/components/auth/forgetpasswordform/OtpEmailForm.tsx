import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { ReuseableAuthForm } from "../reusable/ReuseableAuthForm";
import { OtpSchema, type OtpFormData } from "@/validations/SchemaForms/AuthFormSchema/OtpSchema";


function OtpEmailForm() {
  const { control, handleSubmit, formState: { errors } } = useForm<OtpFormData>({
    resolver: zodResolver(OtpSchema),
    defaultValues: { otp: "" },
  });

  const onSubmit = (data: OtpFormData) => {
    console.log("OTP value:", data.otp);
    // API call to verify OTP
  };

  return (
    <ReuseableAuthForm<OtpFormData>
      title="Verifying Your Email"
      subtitle="Enter the OTP code sent to your email"
      buttonText="Verify Email"
      bottomText="Don't have an account?"
      bottomLinkText="Sign up"
      bottomLinkTo="/signup"
      onSubmit={handleSubmit(onSubmit)}
      control={control}
      errors={errors}
    >
      <Controller
        name="otp"
        control={control}
        render={({ field }) => (
          <InputOTP maxLength={6} value={field.value} onChange={field.onChange}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        )}
      />
    </ReuseableAuthForm>
  );
}

export default OtpEmailForm;
