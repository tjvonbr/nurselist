import { navigationItems } from "@/config/navigation";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full px-10 flex justify-between items-center">
      <div className="flex items-center space-x-10">
        <Link className="text-xl text-black font-bold" href="/">
          NurseList
        </Link>
        <nav className="hidden sm:flex space-x-10">
          {navigationItems.marketing.map((item, idx) => {
            return (
              <Link
                key={idx}
                className="text-sm text-black hover:text-slate-600 font-semibold transition-colors"
                href={item.href}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
