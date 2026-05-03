import { Link } from "wouter";
import { Menu, Github, Moon } from "lucide-react";

export default function Header({ onMenu }: { onMenu: () => void }) {
  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center gap-3 px-4 h-14">
        <button onClick={onMenu} className="lg:hidden p-2 -ml-2 text-slate-700 dark:text-slate-200" aria-label="Menu">
          <Menu size={22} />
        </button>
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Moon size={22} className="text-lua-blue dark:text-lua-blue-light" fill="currentColor" />
          <span className="text-lua-blue dark:text-lua-blue-light">Lua: Do Zero ao Avançado</span>
        </Link>
        <div className="ml-auto">
          <a href="https://github.com/Wallysondevs/lua-book" target="_blank" rel="noreferrer"
             className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-300 hover:text-lua-blue">
            <Github size={18} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
