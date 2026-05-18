import { notFound } from "next/navigation";


import WebDevelopmentPage from "@/components/services/WebDevelopmentPage";

type Props = {
  params: {
    slug: string;
  };
};

export default function ServicePage({ params }: Props) {

  switch (params.slug) {

    case "web-development":
      return <WebDevelopmentPage />;



    default:
      notFound();
  }
}