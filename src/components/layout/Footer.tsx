import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[var(--ink)] px-[5%] py-16 flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="font-serif text-2xl text-white">
        PineCode Solutions
      </div>

      <div className="flex gap-8">
        <Link href="#services" className="text-sm text-white/40 hover:text-white transition-colors">Services</Link>
        <Link href="#products" className="text-sm text-white/40 hover:text-white transition-colors">Products</Link>
        <Link href="#pricing" className="text-sm text-white/40 hover:text-white transition-colors">Pricing</Link>
        <Link href="#contact" className="text-sm text-white/40 hover:text-white transition-colors">Contact</Link>
      </div>

      <div className="text-sm text-white/20">
        © 2024 PineCode Solutions, Jammu. <br/>
        Contact: pinecode47@gmail.com
      </div>
    </footer>
  );
};

export default Footer;
