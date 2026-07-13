import { WhatsAppIcon } from "@/components/icons";
import { links } from "@/lib/site";

type Props = {
  children: React.ReactNode;
  size?: "md" | "lg";
  className?: string;
};

export function WhatsAppButton({ children, size = "md", className = "" }: Props) {
  const sizeClass = size === "lg" ? "h-12 px-7 text-base" : "h-11 px-5 text-[0.95rem]";
  return (
    <a
      href={links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${sizeClass} bg-green text-white shadow-soft hover:bg-green-dark ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {children}
    </a>
  );
}
