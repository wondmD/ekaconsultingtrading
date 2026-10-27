export type PostBlock =
  | { type: "h2" | "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  topic: string;
  blocks: PostBlock[];
};

type PostRow = {
  slug: string;
  title: string;
  description: string;
  topic: string;
  body: string;
  published_on: string;
};

export async function getPosts(): Promise<Post[]> {
  const rows = await readPosts(
    "select=slug,title,description,topic,body,published_on&published=eq.true&order=published_on.desc",
  );
  return rows.map(rowToPost);
}

export async function getPost(slug: string): Promise<Post | undefined> {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return undefined;
  const rows = await readPosts(
    `select=slug,title,description,topic,body,published_on&published=eq.true&slug=eq.${slug}&limit=1`,
  );
  return rows[0] ? rowToPost(rows[0]) : undefined;
}

async function readPosts(query: string): Promise<PostRow[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new Error("Supabase URL or publishable key is missing");

  const response = await fetch(`${url}/rest/v1/posts?${query}`, {
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      Accept: "application/json",
    },
  });
  if (!response.ok) throw new Error("Could not load posts");
  return response.json();
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date.slice(0, 10)}T00:00:00Z`));
}

export function slugFromTitle(title: string) {
  const base = title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72);
  const slug = base || "post";
  return slug === "write" ? "write-post" : slug;
}

function rowToPost(row: PostRow): Post {
  return {
    slug: row.slug,
    title: row.title,
    description: row.description,
    date: row.published_on.slice(0, 10),
    topic: row.topic,
    blocks: parseBlocks(row.body),
  };
}

function parseBlocks(body: string): PostBlock[] {
  const lines = body.replace(/\r\n/g, "\n").trim().split("\n");
  const blocks: PostBlock[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index] ?? "";
    if (!line.trim()) {
      index += 1;
      continue;
    }
    if (line.startsWith("###")) {
      blocks.push({ type: "h3", text: line.slice(3).trim() });
      index += 1;
      continue;
    }
    if (line.startsWith("##")) {
      blocks.push({ type: "h2", text: line.slice(2).trim() });
      index += 1;
      continue;
    }
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (index < lines.length && (lines[index] ?? "").startsWith("- ")) {
        items.push((lines[index] ?? "").slice(2).trim());
        index += 1;
      }
      blocks.push({ type: "ul", items });
      continue;
    }
    const paragraph: string[] = [];
    while (
      index < lines.length &&
      (lines[index] ?? "").trim() &&
      !(lines[index] ?? "").startsWith("#") &&
      !(lines[index] ?? "").startsWith("- ")
    ) {
      paragraph.push((lines[index] ?? "").trim());
      index += 1;
    }
    if (paragraph.length === 0) {
      blocks.push({ type: "p", text: line.trim() });
      index += 1;
      continue;
    }
    blocks.push({ type: "p", text: paragraph.join(" ") });
  }

  return blocks;
}
