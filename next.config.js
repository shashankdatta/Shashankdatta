/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path. This is usually the slug of your repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: "/Shashankdatta",

  assetPrefix: "./",
  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * Disable or use one of the loaders like akamai, cloudinary, imgix, static, etc.
   * https://nextjs.org/docs/basic-features/image-optimization
   *
   * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
   */
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
