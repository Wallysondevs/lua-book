import { Link } from "wouter";
import { Home as HomeIcon, Moon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center">
      <Moon size={64} className="mx-auto text-lua-blue dark:text-lua-blue-light mb-4" fill="currentColor" />
      <h1 className="text-4xl font-bold text-lua-blue dark:text-lua-blue-light mb-2">404</h1>
      <p className="text-slate-600 dark:text-slate-300 mb-8">
        Esta página não existe. A lua já se pôs neste caminho.
      </p>
      <Link href="/" className="inline-flex items-center gap-2 bg-lua-blue hover:bg-lua-blue-dark text-white px-5 py-2.5 rounded-lg font-semibold transition-colors">
        <HomeIcon size={18} /> Voltar ao início
      </Link>
    </div>
  );
}
