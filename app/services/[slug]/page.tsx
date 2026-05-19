import { notFound } from "next/navigation";
import WebDevelopmentPage from "@/components/services/WebDevelopmentPage";
import SEOServicePage from "@/components/services/SEOServicePage";
import PPCServicePage from "@/components/services/PPCServicePage";

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

    if (slug === "ppc-service") {
    return <PPCServicePage />;
  }

    if (slug === "ppc-service") {
    return <PPCServicePage />;
  }

  return notFound();
}