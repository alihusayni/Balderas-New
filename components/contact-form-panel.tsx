"use client";

import { useState, useEffect, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { useFormSubmit } from "@/hooks/use-form-submit";

type BaseField = {
  id: string;
  label: string;
  placeholder?: string;
  width?: "half" | "full";
};

type TextField = BaseField & {
  type: "text";
  inputType?: "text" | "email" | "tel";
};

type TextAreaField = BaseField & {
  type: "textarea";
  rows?: number;
};

type SelectField = BaseField & {
  type: "select";
  options: Array<{ value: string; label: string }>;
};

export type ContactFormField = TextField | TextAreaField | SelectField;

type ContactFormPanelProps = {
  fields: ContactFormField[];
  submitLabel: string;
  className?: string;
};

function fieldWidthClass(width: ContactFormField["width"] | undefined) {
  return width === "full" ? "md:col-span-2" : "";
}

export function ContactFormPanel({
  fields,
  submitLabel,
  className,
}: ContactFormPanelProps) {
  const { status, submit, reset } = useFormSubmit();
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState(false);

  const [captcha, setCaptcha] = useState<{ a: number; b: number; sum: number } | null>(null);

  useEffect(() => {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    setCaptcha({ a, b, sum: a + b });
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot check
    const form = e.currentTarget;
    const hp = form.elements.namedItem("website") as HTMLInputElement | null;
    if (hp && hp.value) return;

    // Captcha check
    if (!captcha || parseInt(captchaAnswer, 10) !== captcha.sum) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);

    const data: Record<string, string> = {};
    for (const field of fields) {
      const el = form.elements.namedItem(field.id) as
        | HTMLInputElement
        | HTMLTextAreaElement
        | HTMLSelectElement
        | null;
      if (el) data[field.id] = el.value;
    }

    const ok = await submit(data);
    if (ok) form.reset();
  }

  if (status === "sent") {
    return (
      <div className={className}>
        <div className="flex w-full flex-col items-center justify-center gap-4 bg-white p-8 sm:p-10 md:p-[30px] md:min-h-[300px]">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-anton text-xl uppercase tracking-wide text-[var(--color-brand-navy)] sm:text-2xl">
            Message Sent!
          </h3>
          <p className="text-center font-maison text-[15px] text-gray-600 sm:text-base">
            Thank you for reaching out. Abel will get back to you shortly.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-2 font-maison text-sm font-medium text-[var(--color-brand-orange)] underline underline-offset-2 transition-colors hover:text-[var(--color-brand-navy)]"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="w-full bg-white p-5 sm:p-6 md:p-[30px]">
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-8 sm:gap-10 md:gap-[52px]"
        >
          <div className="grid w-full grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
            {fields.map((field) => (
              <div key={field.id} className={fieldWidthClass(field.width)}>
                <div className="w-full">
                  <label
                    htmlFor={field.id}
                    className="font-maison text-[15px] font-normal leading-[22px] tracking-[-0.02em] text-[#2f3745] sm:text-[16px] sm:leading-[24px] md:text-[18px] md:leading-[26px] lg:text-[20px] lg:leading-[29px]"
                  >
                    {field.label}
                  </label>
                </div>
                <div className="mt-2 w-full">
                  {field.type === "select" ? (
                    <div className="relative flex h-[52px] w-full items-center justify-between bg-[#F2F2F2] px-3 py-2 sm:h-[56px] sm:px-[12px] sm:py-[9px] md:h-[60px]">
                      <select
                        id={field.id}
                        name={field.id}
                        defaultValue=""
                        className="h-full w-full appearance-none border-none bg-transparent pr-7 font-maison text-[15px] font-normal text-[#767676] focus:outline-none focus:text-[#2f3745] sm:pr-8 sm:text-[16px] md:text-[18px]"
                      >
                        <option value="" disabled className="text-[#767676]">
                          {field.placeholder ?? "Select an option"}
                        </option>
                        {field.options.map((option) => (
                          <option
                            key={option.value}
                            value={option.value}
                            className="text-[#2f3745]"
                          >
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-[12px] top-1/2 -translate-y-1/2 text-[#595959]">
                        <span aria-hidden>⌄</span>
                      </div>
                    </div>
                  ) : field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      rows={field.rows ?? 4}
                      placeholder={field.placeholder}
                      className="h-[100px] w-full resize-none border-none bg-[#F2F2F2] px-3 py-2 font-maison text-[15px] font-normal text-[#2f3745] placeholder:text-[#C4C8D3] focus:outline-none sm:h-[110px] sm:px-[12px] sm:py-[9px] sm:text-[16px] md:h-[120px] md:text-[18px]"
                    />
                  ) : (
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.inputType ?? "text"}
                      placeholder={field.placeholder}
                      required={field.id === "name" || field.id === "phone"}
                      className="h-[52px] w-full border-none bg-[#F2F2F2] px-3 py-2 font-maison text-[15px] font-normal text-[#2f3745] placeholder:text-[#C4C8D3] focus:outline-none sm:h-[56px] sm:px-[12px] sm:py-[9px] sm:text-[16px] md:h-[60px] md:text-[18px]"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Honeypot — hidden from humans, bots fill it */}
          <div className="absolute left-[-9999px]" aria-hidden="true">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          {/* Simple math captcha */}
          <div className="w-full">
            <label
              htmlFor="captcha"
              className="font-maison text-[15px] font-normal leading-[22px] tracking-[-0.02em] text-[#2f3745] sm:text-[16px] sm:leading-[24px] md:text-[18px] md:leading-[26px] lg:text-[20px] lg:leading-[29px]"
            >
              What is {captcha ? `${captcha.a} + ${captcha.b}` : "…"}?
            </label>
            <div className="mt-2">
              <input
                id="captcha"
                type="text"
                inputMode="numeric"
                value={captchaAnswer}
                onChange={(e) => {
                  setCaptchaAnswer(e.target.value);
                  setCaptchaError(false);
                }}
                placeholder="Your answer"
                required
                className={`h-[52px] w-full max-w-[200px] border-2 bg-[#F2F2F2] px-3 py-2 font-maison text-[15px] font-normal text-[#2f3745] placeholder:text-[#C4C8D3] focus:outline-none sm:h-[56px] sm:px-[12px] sm:py-[9px] sm:text-[16px] md:h-[60px] md:text-[18px] ${
                  captchaError ? "border-red-400" : "border-transparent"
                }`}
              />
              {captchaError && (
                <p className="mt-1 font-maison text-sm text-red-500">
                  Incorrect answer. Please try again.
                </p>
              )}
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-3">
            <Button
              type="submit"
              variant="heroPrimary"
              size="hero"
              disabled={status === "sending"}
              className="w-full min-w-0 gap-2 sm:w-auto sm:min-w-[200px] sm:gap-3 md:min-w-[220px] disabled:opacity-60"
            >
              <span className="inline-flex min-h-[20px] items-center justify-center font-maison text-[16px] font-bold leading-[1] tracking-[-0.02em] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
                {status === "sending" ? "Sending..." : submitLabel}
              </span>
              {status !== "sending" && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="currentColor"/>
                </svg>
              )}
            </Button>
            {status === "error" && (
              <p className="font-maison text-sm text-red-500">
                Something went wrong. Please try again or call us directly.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
