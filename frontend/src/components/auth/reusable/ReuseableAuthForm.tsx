// src/components/auth/reusable/ReuseableAuthForm.tsx
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Controller } from "react-hook-form";
import type { Control, FieldErrors, FieldValues, Path } from "react-hook-form";

type Field = {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
};

type AuthFormProps<T extends FieldValues> = React.ComponentProps<"form"> & {
  title: string;
  subtitle: string;
  fields?: Field[];
  buttonText: string;
  bottomText?: string;
  bottomLinkText?: string;
  bottomLinkTo?: string;
  extraLinkText?: string;
  extraLinkTo?: string;
  children?: React.ReactNode;
  onSubmit: () => void;
  className?: string;
  control: Control<T>;
  errors: FieldErrors<T>;
};

export function ReuseableAuthForm<T extends FieldValues>({
  className,
  title,
  subtitle,
  fields = [],
  buttonText,
  bottomText,
  bottomLinkText,
  bottomLinkTo,
  extraLinkText,
  extraLinkTo,
  children,
  onSubmit,
  control,
  errors,
  ...props
}: AuthFormProps<T>) {
  return (
    <form
      onSubmit={onSubmit}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-muted-foreground text-sm text-balance">{subtitle}</p>
      </div>

      {/* Fields */}
      {fields.length > 0 && (
        <div className="grid gap-6">
          {fields.map((field) => (
            <div key={field.id} className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor={field.id}>{field.label}</Label>
                {field.id === "password" && extraLinkText && extraLinkTo && (
                  <Link
                    to={extraLinkTo}
                    className="ml-auto text-sm underline-offset-4 hover:underline"
                  >
                    {extraLinkText}
                  </Link>
                )}
              </div>

              {/* Controlled Input */}
              <Controller
                name={field.id as Path<T>} // ✅ cast to Path<T>
                control={control}
                render={({ field: controllerField }) => (
                  <Input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    {...controllerField}
                  />
                )}
              />

              {/* Show error */}
              {errors[field.id as Path<T>] && (
                <p className="text-red-500 text-sm">
                  {errors[field.id as Path<T>]!.message as string}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {children && <div className="flex justify-center">{children}</div>}

      <Button type="submit" className="w-full">
        {buttonText}
      </Button>

      {/* Bottom Text */}
      {bottomText && bottomLinkText && bottomLinkTo && (
        <div className="text-center text-sm">
          {bottomText}{" "}
          <Link to={bottomLinkTo} className="underline underline-offset-4">
            {bottomLinkText}
          </Link>
        </div>
      )}
    </form>
  );
}
