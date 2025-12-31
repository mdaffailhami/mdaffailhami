"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendIcon, LoaderCircleIcon } from "lucide-react";
import { sendMessage } from "@/lib/api/messages";
import { MessageInsert } from "@/lib/db/types";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  // 1. Setup React Hook Form
  // useForm: The core hook that manages form state, validation, and submission.
  // We pass the generic type <ContactForm> so TS knows the shape of our data.
  const form = useForm<MessageInsert>({
    // zodResolver: Connects the Zod schema to React Hook Form validation.
    // It runs the Zod validation logic whenever the form changes or submits.
    resolver: zodResolver(MessageInsert),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const {
    handleSubmit, // Wrapper function that handles validation before calling onSubmit
    control, // Object to register components into React Hook Form (like "glue")
    reset, // Function to reset form to default values
    setError,
    formState: { isSubmitting, errors, isSubmitSuccessful },
  } = form;

  // 2. Define Submission Handler
  // This function ONLY runs if Zod validation passes successfully.
  const onSubmit = async (data: MessageInsert) => {
    const defaultErrorMessage = "Failed to send message";
    try {
      // 3. Server Action Call
      // We call the server function directly.
      // This is "RPC" (Remote Procedure Call) style - no fetch API needed explicitly.
      const result = await sendMessage(data);

      if (!result.success) {
        setError("root", {
          message: result.message || defaultErrorMessage,
        });
        return;
      }

      // Reset the success state after 5 seconds to hide the message
      setTimeout(() => {
        reset();
      }, 5000);
    } catch (error) {
      let message = defaultErrorMessage;
      if (error instanceof Error) message = error.message;
      setError("root", { message });
    }
  };

  return (
    // noValidate: Disables browser's default HTML validation bubbles
    // so we can use our custom Zod validation UI instead.
    <form onSubmit={handleSubmit(onSubmit)} className="w-full" noValidate>
      <FieldGroup className="gap-4">
        {/* Name Input */}
        {/* Controller Pattern:
            Since Shadcn UI components (Input, Textarea) are custom React components,
            we use <Controller> to "control" them. checking strict type safety and
            passing the necessary props (value, onChange, onBlur) via `...field`.
         */}
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Name</FieldLabel>
              <Input
                {...field}
                id={field.name}
                type="text"
                placeholder="Enter your name"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Email Input */}
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Email</FieldLabel>
              <Input
                {...field}
                id={field.name}
                type="email"
                placeholder="Enter your email address"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Message Textarea */}
        <Controller
          name="message"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Message</FieldLabel>
              <Textarea
                {...field}
                id={field.name}
                rows={5}
                className="resize-none h-24"
                placeholder="Your message here..."
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full group/button relative overflow-hidden"
          size="lg"
        >
          {isSubmitting ? (
            <>
              <LoaderCircleIcon className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : isSubmitSuccessful ? (
            "Message Sent!"
          ) : (
            <>
              Send Message
              <SendIcon className="size-4 transition-transform group-hover/button:translate-x-1" />
            </>
          )}
        </Button>

        {/* Status Messages */}
        {isSubmitSuccessful && (
          <p className="text-sm text-primary text-center">
            Thank you! Your message has been sent successfully.
          </p>
        )}
        {errors.root && (
          <p className="text-sm text-destructive text-center">
            {errors.root.message}
          </p>
        )}
      </FieldGroup>
    </form>
  );
}
