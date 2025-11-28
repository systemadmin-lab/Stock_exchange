"use client";
import { NavItems } from "@/lib/Nav_Items";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NabItems = () => {
  const pathname: string = usePathname();
  const isActive: (path: string) => boolean = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };
  return (
    <div>
      <ul className="flex flex-col sm:flex-row  p-2 gap-3 sm:gap-10 font-medium">
        {NavItems.map(({ href, title }) => {
          console.log(title);
          return (
            <li key={href}>
              <Link
                href={href}
                className={`hover:text-yellow-500 transition-colors ${
                  isActive(href) ? "text-gray-200" : ""
                } `}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NabItems;
