import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70svh] max-w-6xl flex-col justify-center px-5 py-20 sm:px-8">
      <p className="text-sm font-semibold text-green">404</p>
      <h1 className="mt-3 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
        This page is not on the map.
      </h1>
      <div className="mt-8">
        <ButtonLink href="/">Back to EKA</ButtonLink>
      </div>
    </section>
  );
}
