import Image from "next/image";
import Link from "next/link";

const assets = {
  mark: { src: "/mark.png", width: 1600, height: 698 },
  lockup: { src: "/logo.png", width: 2000, height: 1074 },
} as const;

export function Logo({
  variant = "mark",
  className,
  priority = false,
  onClick,
}: {
  variant?: keyof typeof assets;
  className?: string;
  priority?: boolean;
  onClick?: () => void;
}) {
  const asset = assets[variant];
  const size =
    className ?? (variant === "mark" ? "h-14 w-auto sm:h-16" : "h-auto w-72");

  return (
    <Link href="/" onClick={onClick} className="inline-flex shrink-0">
      <Image
        src={asset.src}
        alt="EKA Consulting and Trading PLC"
        width={asset.width}
        height={asset.height}
        priority={priority}
        className={size}
      />
    </Link>
  );
}
