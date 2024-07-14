import { cn } from "@/lib/utils";
import { HomeIcon, InfoIcon } from "lucide-react";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const items = [
    {
      title: "Posts",
      icon: <HomeIcon/>,
      href: "/posts"
    },
    {
      title: "About Me",
      icon: <InfoIcon />,
      href: "/"
    }
  ]

  return (
    <nav
      className={cn("fixed top-5 inset-x-0 max-w-sm mx-auto z-50 ring ring-current px-4 py-3 rounded-3xl backdrop-blur-2xl bg-opacity-10 bg-zinc-50", className)}
    >
      <ul className="flex gap-8 justify-center items-center">
        {items.map((item, i) => (
        <li key={i}>
          <Link href={item.href} className="flex gap-2 justify-center items-center">{item.icon} {item.title}</Link>
        </li>
        ))}
      </ul>
    </nav>
  );
}
