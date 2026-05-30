import Image from "next/image";
import { ArticleQuote } from "@/components/article-quote";
import { CtaBanner } from "@/components/cta-banner";
import { ArticleAuthorAvatarIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import {
  type Article,
  type ArticleBlock,
  getArticleHref,
  articlePublishedToIso,
} from "@/lib/articles";
import {
  ArticleLeadText,
  articleLeadTextBaseClassName,
} from "@/components/article-lead-text";
import { MainHeading } from "@/components/main-heading";
import { ArticleSimpleText } from "@/components/article-simple-text";
import { getArticleJsonLd, getBreadcrumbJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

export type ArticleBreadcrumbItem = { name: string; path: string };

function ArticleBodyBlock({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "paragraph": {
      return (
        <ArticleLeadText
          variant={block.variant === "bold" ? "bold" : "book"}
        >
          {block.text}
        </ArticleLeadText>
      );
    }
    case "heading": {
      return (
        <h2 className="[font-family:var(--font-anton)] text-[22px] font-normal leading-[1.15] tracking-[-0.02em] text-[#0b0300] sm:text-[28px] md:text-[32px] lg:text-[40px] lg:leading-[50px]">
          {block.text}
          {block.accent ? (
            <>
              {" "}
              <span className="text-[var(--color-brand-orange)]">
                {block.accent}
              </span>
            </>
          ) : null}
        </h2>
      );
    }
    case "list": {
      if (block.format === "bullets") {
        return (
          <ul className="flex list-disc flex-col gap-4 pl-6 text-[#0b0300] sm:gap-5 sm:pl-8 lg:gap-6">
            {block.items.map((item, index) => {
              const label = item.heading?.trim() ?? "";
              const body = item.text.trim();
              const afterLabel =
                !label || label.endsWith(":") || label.endsWith(".")
                  ? " "
                  : ": ";
              const line = label ? `${label}${afterLabel}${body}` : body;
              return (
                <li
                  key={`${index}-${line.slice(0, 40)}`}
                  className={cn(
                    articleLeadTextBaseClassName,
                    "font-normal pl-1 marker:text-[#0b0300]",
                  )}
                >
                  {line}
                </li>
              );
            })}
          </ul>
        );
      }

      const prose = block.items
        .map((item) => {
          const label = item.heading?.trim() ?? "";
          const body = item.text.trim();
          if (!label) return body;
          const afterLabel =
            label.endsWith(":") || label.endsWith(".") ? " " : ": ";
          return `${label}${afterLabel}${body}`;
        })
        .join(" ");

      return <ArticleLeadText variant="book">{prose}</ArticleLeadText>;
    }
    case "image": {
      return (
        <div className="relative h-[220px] w-full overflow-hidden sm:h-[260px] lg:h-[293px]">
          <Image
            src={block.src}
            alt={block.alt}
            fill
            sizes="(max-width: 1280px) 100vw, 1400px"
            className="object-cover"
          />
        </div>
      );
    }
    case "quote": {
      return <ArticleQuote text={block.text} author={block.author} />;
    }
    default: {
      const _exhaustive: never = block;
      return _exhaustive;
    }
  }
}

type ArticleDetailViewProps = {
  article: Article;
  breadcrumbs: ArticleBreadcrumbItem[];
};

export function ArticleDetailView({
  article,
  breadcrumbs,
}: ArticleDetailViewProps) {
  const path = getArticleHref(article);
  const publishedIso =
    articlePublishedToIso(article.publishedDate) ?? article.publishedDate;

  const articleJsonLd = getArticleJsonLd({
    title: article.title,
    description: article.description,
    path,
    image: article.imageSrc,
    imageAlt: article.imageAlt,
    authorName: article.author.name,
    publishedDate: publishedIso,
    section: article.categories[0],
  });

  const articleBreadcrumbJsonLd = getBreadcrumbJsonLd(breadcrumbs);

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd id={`ld-article-${article.slug}`} data={articleJsonLd} />
      <JsonLd
        id={`ld-article-breadcrumb-${article.slug}`}
        data={articleBreadcrumbJsonLd}
      />
      <section className="w-full bg-[#F7F7F7] py-16 lg:py-[120px]">
        <div className="mx-auto flex w-full max-w-container flex-col gap-10 px-6 lg:gap-[70px] lg:px-10">
          <div className="relative h-[260px] w-full overflow-hidden sm:h-[360px] lg:h-[505px]">
            <Image
              src={article.imageSrc}
              alt={article.imageAlt}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1400px"
              className="object-cover"
            />
          </div>

          <div className="flex w-full flex-col gap-5 lg:gap-6">
            <header className="flex w-full flex-col gap-5">
              <MainHeading as="h1" className="text-[#0b0300]">
                {article.title}
              </MainHeading>

              <div className="flex min-w-0 flex-wrap items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-2 text-[#4F5B79]">
                  <ArticleAuthorAvatarIcon
                    className="h-[20px] w-[20px] shrink-0 sm:h-[21px] sm:w-[21px] lg:h-[23px] lg:w-[23px]"
                    aria-hidden
                  />
                  <ArticleSimpleText as="span" variant="emphasis">
                    {article.author.name}
                  </ArticleSimpleText>
                </div>

                <ArticleSimpleText variant="meta">
                  {article.publishedDate} | {article.readTime}
                </ArticleSimpleText>
              </div>
            </header>

            <div className="flex w-full flex-col gap-8 border-t border-[#D1D4DB] pt-8 lg:gap-10 lg:pt-10">
              {article.body.map((block, index) => (
                <ArticleBodyBlock key={index} block={block} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {article.cta ? (
        <CtaBanner
          title={article.cta.title}
          description={article.cta.description}
          ctaLabel={article.cta.label}
          ctaHref={article.cta.href}
          backgroundSrc={article.cta.backgroundSrc}
          backgroundAlt=""
          className="min-h-[min(72svh,720px)] sm:min-h-[min(68svh,660px)]"
          contentClassName="gap-5 sm:gap-6 lg:gap-6"
        />
      ) : null}
    </main>
  );
}
