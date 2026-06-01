"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/article-card";
import { ArticlesToolbar } from "@/components/articles-toolbar";
import { FaqAccordion, type FaqItem } from "@/components/faq-accordion";
import { HeroHeading } from "@/components/hero/hero-heading";
import { HeroParallaxBackground } from "@/components/hero/hero-parallax-background";
import { MainHeading } from "@/components/main-heading";
import { SimpleText } from "@/components/simple-text";
import { ArticleAuthorAvatarIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  ARTICLES,
  ARTICLE_CATEGORIES,
  getArticleHref,
  type ArticleCategoryId,
} from "@/lib/articles";

type CategoryFilterId = ArticleCategoryId | "all";

const FEATURED_ARTICLE_SLUG =
  "the-high-cost-of-cheap-why-a-licensed-demolition-contractor-is-non-negotionable";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What services does Balderas Demolition Inc. offer?",
    answer:
      "We offer interior and exterior residential demolition, structural demolition, dumpster rentals, and full-service junk removal across Orange County.",
  },
  {
    question: "How quickly can I get a dumpster delivered?",
    answer:
      "In most Orange County cities we can deliver a dumpster within 24–48 hours of booking. Same-day delivery is often available — call us to check current availability.",
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer:
      "Yes. From single-room kitchen tear-outs to commercial site clearance, our licensed C-21 team is equipped to handle projects of every size and scope.",
  },
  {
    question: "What happens to the debris and waste you remove?",
    answer:
      "We sort materials on-site so concrete, wood, metal, and green waste can be diverted to recycling centers. Anything that can’t be recycled is disposed of at permitted facilities.",
  },
  {
    question: "How do I know which dumpster size is right for my project?",
    answer:
      "Tell us a bit about your project — square footage, the type of debris, and your timeline — and we’ll recommend the most cost-effective dumpster size so you don’t pay for space you won’t use.",
  },
  {
    question: "Do you provide demolition services on short notice?",
    answer:
      "Whenever possible, yes. Reach out with your project details and we’ll do our best to fit you into the schedule, including emergency demolition or site clearance.",
  },
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryFilterId>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const featuredArticle = useMemo(
    () =>
      ARTICLES.find((article) => article.slug === FEATURED_ARTICLE_SLUG) ??
      ARTICLES[0],
    [],
  );

  const gridArticles = useMemo(
    () =>
      ARTICLES.filter((article) => article.slug !== featuredArticle.slug),
    [featuredArticle.slug],
  );

  const filteredArticles = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLowerCase();

    return gridArticles.filter((article) => {
      const matchesCategory =
        activeCategory === "all" ||
        article.categories.includes(activeCategory as ArticleCategoryId);

      if (!matchesCategory) return false;

      if (!normalizedQuery) return true;

      return (
        article.title.toLowerCase().includes(normalizedQuery) ||
        article.description.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [activeCategory, gridArticles, searchTerm]);

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <section className="relative -mt-[130px] w-full overflow-hidden">
        <div className="relative h-[420px] w-full sm:h-[480px] lg:h-[530px]">
          <HeroParallaxBackground
            src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/resources/top-bg.png"
            alt="Balderas Demolition Inc. service truck on site"
            priority
            overlayClassName="bg-[#06182C]/60"
          />

          <div className="absolute inset-x-0 bottom-0 z-10">
            <div className="mx-auto flex w-full max-w-container items-end px-6 pb-12 lg:px-10 lg:pb-14">
              <div className="max-w-[760px] text-[var(--color-brand-white)] sm:max-w-[680px] md:max-w-[1100px]">
                <HeroHeading>Latest Articles, Guides &amp; FAQs</HeroHeading>
              </div>
            </div>
          </div>
        </div>

       
      </section>

      <section className="w-full bg-[#F7F7F7] py-20 lg:py-[120px]">
        <div className="mx-auto flex w-full max-w-container flex-col gap-20 px-6 lg:gap-[80px] lg:px-10">
          <div className="flex w-full min-w-0 flex-col gap-10 xl:flex-row xl:items-stretch xl:gap-[39px]">
            <div className="w-full min-w-0 overflow-hidden xl:flex-1 xl:basis-0">
              <div className="relative h-[320px] w-full sm:h-[420px] lg:h-[605px]">
                <Image
                  src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/resources/first-article.jpg"
                  alt={featuredArticle.imageAlt}
                  fill
                  sizes="(max-width: 1280px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex w-full min-w-0 flex-col justify-between gap-10 xl:flex-1 xl:basis-0">
              <div className="flex min-w-0 flex-col gap-5">
                <MainHeading className="text-[#0b0300]">
                  {featuredArticle.title}
                </MainHeading>

                <SimpleText className="text-[#0b0300]">
                  {featuredArticle.description}
                </SimpleText>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex min-w-0 items-center gap-2 text-[#4F5B79]">
                    <ArticleAuthorAvatarIcon
                      className="h-[23px] w-[23px] shrink-0"
                      aria-hidden
                    />
                    <span className="font-maison text-lg font-bold leading-lg tracking-[-0.02em] text-[#4F5B79] lg:text-2xl">
                      {featuredArticle.author.name}
                    </span>
                  </div>

                  <SimpleText className="font-medium leading-lg text-[#4F5B79] lg:text-2xl lg:leading-lg">
                    {featuredArticle.publishedDate} | {featuredArticle.readTime}
                  </SimpleText>
                </div>
              </div>

              <div className="w-full sm:w-[300px]">
                <Button
                  asChild
                  variant="heroPrimary"
                  size="hero"
                  className="h-[56px] w-full gap-3 sm:h-[64px] sm:gap-4 md:h-[72px] lg:h-[80px] lg:gap-5"
                >
                  <Link
                    href={getArticleHref(featuredArticle)}
                    className="font-maison flex items-center gap-3 text-lg font-bold tracking-[-0.02em] sm:gap-4 sm:text-2xl md:text-4xl lg:gap-5 lg:text-5xl xl:text-6xl"
                  >
                    <span>Read Article</span>
                    <span aria-hidden>→</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-10 lg:gap-[40px]">
            <ArticlesToolbar
              categories={ARTICLE_CATEGORIES}
              activeCategoryId={activeCategory}
              onCategoryChange={(id) =>
                setActiveCategory(id as CategoryFilterId)
              }
              searchValue={searchTerm}
              onSearchChange={setSearchTerm}
            />

            {filteredArticles.length === 0 ? (
              <div className="w-full py-16 text-center">
                <SimpleText className="text-[#4F5B79]">
                  No articles match your search. Try a different keyword or
                  category.
                </SimpleText>
              </div>
            ) : (
              <div className="grid w-full grid-cols-1 gap-x-[30px] gap-y-[80px] md:grid-cols-3">
                {filteredArticles.map((article) => (
                  <ArticleCard
                    key={article.slug}
                    href={getArticleHref(article)}
                    imageSrc={article.imageSrc}
                    imageAlt={article.imageAlt}
                    title={article.title}
                    description={article.description}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20 lg:py-[120px]">
        <div className="mx-auto flex w-full max-w-container flex-col items-center gap-12 px-6 lg:gap-16 lg:px-10">
          <div className="flex w-full flex-col items-center gap-4 text-center">
            <MainHeading className="text-[#0b0300]">
              Frequently Asked Questions
            </MainHeading>
            <SimpleText className="max-w-[590px] text-[#0b0300]">
              Find answers to your questions right here, and don&rsquo;t
              hesitate to Contact Us if you couldn&rsquo;t find what
              you&rsquo;re looking for.
            </SimpleText>
          </div>

          <div className="w-full px-5 sm:px-8 md:px-10 lg:px-14 xl:px-[72px]">
            <FaqAccordion
              items={FAQ_ITEMS}
              className="mx-auto w-full max-w-[1300px]"
            />
          </div>

          <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-[10px]">
            <Button
              asChild
              size="hero"
              className="h-[56px] w-full bg-[#D1D4DB] text-[#0b0300] hover:bg-[#bfc3cc] sm:h-[64px] sm:w-[300px] md:h-[72px] lg:h-[80px]"
            >
              <Link
                href="/#contact"
                className="font-maison text-lg font-bold tracking-[-0.02em] sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl"
              >
                Contact Us
              </Link>
            </Button>

            <Button
              asChild
              size="hero"
              className="h-[56px] w-full gap-3 bg-[#0B0300] text-white hover:bg-black sm:h-[64px] sm:gap-4 sm:w-[300px] md:h-[72px] lg:h-[80px] lg:gap-5"
            >
              <Link
                href="/resources"
                className="font-maison flex items-center gap-3 text-lg font-bold tracking-[-0.02em] sm:gap-4 sm:text-2xl md:text-4xl lg:gap-5 lg:text-5xl xl:text-6xl"
              >
                <span>Find More FAQs</span>
                <span aria-hidden>→</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
}
