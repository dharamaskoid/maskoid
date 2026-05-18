import { notFound } from "next/navigation";
import WebDevelopmentPage from "@/components/services/WebDevelopmentPage";
import SEOServicePage from "@/components/services/SEOServicePage";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === "web-development") {
    return <WebDevelopmentPage />;
  }

  if (slug === "seo-service") {
    return <SEOServicePage />;
  }

  return notFound();
}