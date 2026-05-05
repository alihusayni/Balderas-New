import {
  ArticleBodyText,
  articleBodyTextBaseClassName,
} from "@/components/article-body-text";
import { cn } from "@/lib/utils";

type ArticleQuoteProps = {
  text: string;
  author?: string;
  className?: string;
};

export function ArticleQuote({ text, author, className }: ArticleQuoteProps) {
  return (
    <figure
      className={cn(
        "flex w-full items-stretch gap-4 sm:gap-5 lg:gap-[50px]",
        className,
      )}
    >
      <span
        aria-hidden
        className="block w-[4px] shrink-0 self-stretch bg-[#D1D4DB] sm:w-[5px] lg:w-[50px]"
      />

      <blockquote className="flex flex-1 flex-col gap-3 sm:gap-4">
        <ArticleBodyText className="text-[#0b0300]" variant="book">
          &ldquo;{text}&rdquo;
        </ArticleBodyText>
        {author ? (
          <p
            className={cn(
              articleBodyTextBaseClassName,
              "font-bold text-[#0b0300]",
            )}
          >
            &mdash; {author}
          </p>
        ) : null}
      </blockquote>
    </figure>
  );
}
