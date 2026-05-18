import { notFound } from "next/navigation";

import WebDevelopmentPage from "@/components/services/WebDevelopmentPage";
import WebDesignPage from "@/components/services/WebDesignPage";
import SeoServicePage from "@/components/services/SeoServicePage";
import PPCServicePage from "@/components/services/PPCServicePage";
import SocialMediaPage from "@/components/services/SocialMediaPage";

type Props = {
  params: {
    slug: string;
  };
};

export default function ServicePage({ params }: Props) {

  switch (params.slug) {

    case "web-development":
      return <WebDevelopmentPage />;

    case "web-design":
      return <WebDesignPage />;

    case "seo-service":
      return <SeoServicePage />;

    case "ppc-service":
      return <PPCServicePage />;

    case "social-media-marketing":
      return <SocialMediaPage />;

    default:
      notFound();
  }
}