/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { metadata as studioMetadata, NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";
import { Metadata } from "next";

export const dynamic = "force-static";

export { viewport } from "next-sanity/studio";

export const metadata: Metadata = {
  ...studioMetadata,
  title: "Adinda Karya | Admin",
};

export default function StudioPage() {
  return <NextStudio config={config} />;
}