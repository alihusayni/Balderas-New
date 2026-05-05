import { Button } from "@/components/ui/button";

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
  return (
    <div className={className}>
      <div className="w-full bg-white p-5 sm:p-6 md:p-[30px]">
        <form className="flex w-full flex-col gap-8 sm:gap-10 md:gap-[52px]">
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
                        defaultValue=""
                        className="h-full w-full appearance-none border-none bg-transparent pr-7 font-maison text-[15px] font-normal text-[#C4C8D3] focus:outline-none sm:pr-8 sm:text-[16px] md:text-[18px]"
                      >
                        <option value="" disabled className="text-[#C4C8D3]">
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
                      <div className="pointer-events-none absolute right-[12px] top-1/2 -translate-y-1/2 text-[#9fa3ab]">
                        <span aria-hidden>⌄</span>
                      </div>
                    </div>
                  ) : field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      rows={field.rows ?? 4}
                      placeholder={field.placeholder}
                      className="h-[100px] w-full resize-none border-none bg-[#F2F2F2] px-3 py-2 font-maison text-[15px] font-normal text-[#2f3745] placeholder:text-[#C4C8D3] focus:outline-none sm:h-[110px] sm:px-[12px] sm:py-[9px] sm:text-[16px] md:h-[120px] md:text-[18px]"
                    />
                  ) : (
                    <input
                      id={field.id}
                      type={field.inputType ?? "text"}
                      placeholder={field.placeholder}
                      className="h-[52px] w-full border-none bg-[#F2F2F2] px-3 py-2 font-maison text-[15px] font-normal text-[#2f3745] placeholder:text-[#C4C8D3] focus:outline-none sm:h-[56px] sm:px-[12px] sm:py-[9px] sm:text-[16px] md:h-[60px] md:text-[18px]"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-full justify-start">
            <Button
              type="submit"
              variant="heroPrimary"
              size="hero"
              className="w-full min-w-0 gap-2 sm:w-auto sm:min-w-[200px] sm:gap-3 md:min-w-[220px]"
            >
              <span className="inline-flex min-h-[20px] items-center justify-center font-maison text-[16px] font-bold leading-[1] tracking-[-0.02em] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
                {submitLabel}
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="white"/>
</svg>

            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
