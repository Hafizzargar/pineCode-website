import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-[43px] left-0 right-0 z-50 flex items-center justify-between px-[5%] py-4 bg-[var(--cream)]/90 backdrop-blur-md border-b border-[var(--pine)]/10 transition-all">
      <Link href="/" className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[var(--pine)] rounded-xl flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="w-6 h-6">
            <path d="M12 2L17 8H15V16H9V8H7L12 2Z"/>
            <path d="M7 20H17"/>
          </svg>
        </div>
        <span className="font-serif text-xl text-[var(--pine)] font-bold tracking-tight">PineCode</span>
      </Link>

      <ul className="hidden md:flex items-center gap-10">
        <li><Link href="#services" className="text-sm font-medium text-[var(--ink-mid)] hover:text-[var(--pine)] transition-colors">Services</Link></li>
        <li><Link href="#process" className="text-sm font-medium text-[var(--ink-mid)] hover:text-[var(--pine)] transition-colors">Process</Link></li>
        <li><Link href="#products" className="text-sm font-medium text-[var(--ink-mid)] hover:text-[var(--pine)] transition-colors">Products</Link></li>
        <li><Link href="#pricing" className="text-sm font-medium text-[var(--ink-mid)] hover:text-[var(--pine)] transition-colors">Pricing</Link></li>
        <li><Link href="#contact" className="text-sm font-medium text-[var(--ink-mid)] hover:text-[var(--pine)] transition-colors">Contact</Link></li>
      </ul>

      <Link href="#contact" className="btn-primary !py-2.5 !px-6 text-sm">
        Get a free quote
      </Link>
    </nav>
  );
};

export default Navbar;
