import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArticleDetailView } from "@/components/article-detail-view";
import {
  ARTICLES,
  articlePublishedToIso,
  getArticleBySlug,
  getArticleHref,
} from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";

const SILO_PREFIX = "/dumpster-rental/";

function getSiloArticles() {
  return ARTICLES.filter(
    (a) => a.canonicalPath?.startsWith(SILO_PREFIX),
  );
}

export async function generateStaticParams() {
  return getSiloArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article || !article.canonicalPath?.startsWith(SILO_PREFIX)) {
    return {
      title: "Article Not Found",
      robots: { index: false, follow: false },
    };
  }

  return pageMetadata({
    title: article.seoTitle ?? article.title,
    description: article.description,
    path: getArticleHref(article),
    image: article.imageSrc,
    imageAlt: article.imageAlt,
    keywords: article.categories,
    article: {
      publishedTime: articlePublishedToIso(article.publishedDate),
      authors: [article.author.name],
      section: article.categories[0],
      tags: article.categories,
    },
  });
}

export default async function DumpsterRentalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article || !article.canonicalPath?.startsWith(SILO_PREFIX)) {
    notFound();
  }

  return (
    <ArticleDetailView
      article={article}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Dumpster Rental", path: "/dumpster-rental" },
        { name: article.title, path: getArticleHref(article) },
      ]}
    />
  );
}
