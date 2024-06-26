import Link from "components/ui/Link";
import { links } from "./links";
import { Logo } from "assets/icons";


export function Header() {
  return (
    <header className="container mx-auto px-10  border-b border-secondary py-6">
      <nav className="flex justify-between items-center">
        <a href="/">
          <Logo className="text-primary" />
        </a>
        <ul className="list-disc gap-9 md:flex hidden">
          {links.map((link, key) => (
            <li key={key}>
              <Link className="text-xl" href={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link className="text-xl" variant="primary" href="mailto:hi@dezh.tech">
          Contact us
        </Link>
      </nav>
    </header>
  );
}
