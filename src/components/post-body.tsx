import Link from "next/link";
import type { ReactNode } from "react";
import type { PostBlock } from "@/lib/posts";

export function PostBody({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className="space-y-5 text-base leading-relaxed text-ink sm:text-lg">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2 key={index} className="pt-2 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              <RichText text={block.text} />
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3 key={index} className="pt-1 text-xl font-semibold tracking-tight">
              <RichText text={block.text} />
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={index} className="grid gap-3">
              {block.items.map((item) => (
                <li key={item} className="flex min-w-0 gap-3 rounded-2xl bg-paper px-4 py-3 text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green" aria-hidden />
                  <span className="min-w-0">
                    <RichText text={item} />
                  </span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={index} className="text-muted">
            <RichText text={block.text} />
          </p>
        );
      })}
    </div>
  );
}

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const label = link[1] ?? "";
      const href = link[2] ?? "";
      if (href.startsWith("/")) {
        return (
          <Link key={index} href={href} className="font-medium text-green underline-offset-4 hover:underline">
            {label}
          </Link>
        );
      }
      if (href.startsWith("https://") || href.startsWith("http://")) {
        return (
          <a
            key={index}
            href={href}
            className="font-medium text-green underline-offset-4 hover:underline"
            rel="noreferrer"
          >
            {label}
          </a>
        );
      }
    }
    return <span key={index}>{part}</span>;
  }) as ReactNode;
}
