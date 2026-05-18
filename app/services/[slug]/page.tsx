import { notFound } from "next/navigation";
import WebDevelopmentPage from "@/components/services/WebDevelopmentPage";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  if (slug === "web-development") {
    return <WebDevelopmentPage />;
  }

  return notFound();
}