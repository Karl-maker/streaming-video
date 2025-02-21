import { FooterContentParams } from "@/types/footer.type";

const FooterContent = ({ companyName, links, address, logoSrc }: FooterContentParams) => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-black/80 text-white py-6 px-4 text-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt={`${companyName} Logo`} width={100} height={50} />
        
        <nav className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-300">
          {links.map((link, index) => (
            <a key={index} href={link.url} className="dark:hover:text-white hover:text-black transition">
              {link.title}
            </a>
          ))}
        </nav>

        <p className="text-xs text-gray-400 max-w-sm">{address}</p>

        <p className="text-xs text-gray-500">© {new Date().getFullYear()} {companyName}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterContent;
