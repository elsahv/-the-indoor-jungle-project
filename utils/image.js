import ImageUrlBuilder from "@sanity/image-url";
import client from "./client";

function urlForThumbnail(source) {
  return ImageUrlBuilder(client).image(source).width(1200).url();
}

function urlFor(source) {
  return ImageUrlBuilder(client).image(source).width(600).url();
}

export { urlFor, urlForThumbnail };
