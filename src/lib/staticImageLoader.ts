// next/image doesn't prepend basePath to unoptimized images, and GitHub Pages
// serves the site from a /<repo> subpath.
export default function staticImageLoader({ src }: { src: string }): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;
}
