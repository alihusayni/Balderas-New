import { notFound, permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import { ArticleDetailView } from "@/components/article-detail-view";
import {
  ARTICLES,
  articlePublishedToIso,
  getArticleBySlug,
  getArticleHref,
} from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description:
        "The resource you’re looking for doesn’t exist or has been moved.",
      robots: { index: false, follow: false },
      alternates: { canonical: `/resources/${slug}` },
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

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  if (article.canonicalPath) {
    permanentRedirect(article.canonicalPath);
  }

  return (
    <ArticleDetailView
      article={article}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources" },
        { name: article.title, path: getArticleHref(article) },
      ]}
    />
  );
}
