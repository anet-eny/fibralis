"use client";

import { useEffect, useRef, useState } from "react";
import {
  categoryOptions,
  FormErrors,
  normalizeContactFormValues,
  validateContactForm,
} from "@/components/contact/contact-validation";
import { Button } from "@/components/ui/button";

const inputClass =
  "w-full rounded-sm border border-pink/20 bg-surface px-4 py-3 text-sm font-light text-cream outline-none transition-colors placeholder:text-muted focus:border-pink/70";
const labelClass =
  "mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-beige";
const errorClass = "mt-2 text-xs font-normal text-pink";

export default function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const values = normalizeContactFormValues(new FormData(form));
    const nextErrors = validateContactForm(values);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setIsSubmitted(false);
      setSubmitMessage("Please fix the highlighted fields and try again.");
      return;
    }

    setIsSubmitted(true);
    setSubmitMessage(
      "Thanks! This frontend mockup was submitted successfully.",
    );
    form.reset();

    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }

    resetTimeoutRef.current = setTimeout(() => {
      setIsSubmitted(false);
      setSubmitMessage("");
    }, 3000);
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded border border-pink/20 bg-surface p-6 md:p-8"
    >
      <div className="mb-5">
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={80}
          required
          className={inputClass}
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name ? <p className={errorClass}>{errors.name}</p> : null}
      </div>

      <div className="mb-5">
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          required
          className={inputClass}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email ? <p className={errorClass}>{errors.email}</p> : null}
      </div>

      <div className="mb-5">
        <label htmlFor="company" className={labelClass}>
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          maxLength={120}
          className={inputClass}
          aria-invalid={Boolean(errors.company)}
        />
        {errors.company ? <p className={errorClass}>{errors.company}</p> : null}
      </div>

      <div className="mb-5">
        <label htmlFor="category" className={labelClass}>
          What brings you to Fibralis?
        </label>
        <select
          id="category"
          name="category"
          required
          defaultValue=""
          className={`${inputClass} appearance-none`}
          aria-invalid={Boolean(errors.category)}
        >
          <option value="" disabled>
            Select category
          </option>
          {categoryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.category ? (
          <p className={errorClass}>{errors.category}</p>
        ) : null}
      </div>

      <div className="mb-6">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={6}
          className={`${inputClass} resize-y`}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? <p className={errorClass}>{errors.message}</p> : null}
      </div>

      <Button type="submit" variant="primary">
        {isSubmitted ? "Submitted" : "Submit"}
      </Button>

      {submitMessage ? (
        <p
          className={`mt-4 text-sm font-light ${isSubmitted ? "text-beige" : "text-pink"}`}
        >
          {submitMessage}
        </p>
      ) : null}
    </form>
  );
}
