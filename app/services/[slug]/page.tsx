import { notFound } from "next/navigation";
import WebDevelopmentPage from "@/components/services/WebDevelopmentPage";

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  if (params.slug === "web-development") {
    return <WebDevelopmentPage />;
  }

  return notFound();
}