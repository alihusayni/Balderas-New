import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";
import { SimpleText } from "@/components/simple-text";

type NavItem = {
  label: string;
  href: string;
};

const FOOTER_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Project", href: "/project" },
  { label: "Services", href: "/demolition" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

type SocialItem = {
  label: string;
  href: string;
  Icon: (props: SVGProps<SVGSVGElement>) => React.ReactElement;
};

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M9.13046 0C10.3511 0.0435972 11.6153 0.0435972 12.8359 0.0871887C13.9258 0.13078 14.9284 0.305156 15.8875 0.871869C17.1081 1.61296 17.8492 2.7028 18.1108 4.09779C18.2415 4.92606 18.2851 5.79792 18.3287 6.62621C18.3723 8.45713 18.3287 10.2881 18.3287 12.119C18.3287 13.078 18.2851 14.0371 17.98 14.9525C17.3697 16.7399 16.1054 17.8297 14.2745 18.1785C13.4462 18.3528 12.5744 18.3528 11.7461 18.3964C9.91514 18.44 8.1278 18.3964 6.29686 18.3964C5.3378 18.3964 4.37874 18.3528 3.46328 18.0477C1.67593 17.4374 0.586093 16.1732 0.237342 14.3422C0.0629705 13.514 0.0629705 12.6421 0.0193761 11.8138C-0.0242201 9.9829 0.0193761 8.15197 0.0193761 6.32105C0.0193761 5.362 0.0629705 4.40294 0.368125 3.48747C0.978439 1.70014 2.24265 0.610312 4.07358 0.261563C4.90187 0.0871944 5.77374 0.0871944 6.60202 0.0435972C7.4303 0 8.25858 0 9.13046 0ZM16.6722 9.02385C16.6286 9.02385 16.6722 9.02385 16.6722 9.02385C16.6286 8.28276 16.6286 7.58526 16.6286 6.84417C16.6286 6.14668 16.585 5.44918 16.4978 4.75169C16.3234 3.18232 15.4079 2.13608 13.8822 1.83093C13.0975 1.65655 12.2256 1.65655 11.4409 1.65655C9.87155 1.61296 8.34577 1.61296 6.7764 1.65655C5.99171 1.65655 5.20703 1.70014 4.46593 1.83093C3.15812 2.04889 2.24265 2.78998 1.85031 4.09779C1.71953 4.53372 1.67594 4.96965 1.63234 5.40559C1.58875 7.06214 1.58875 8.71869 1.58875 10.3752C1.58875 11.4215 1.63234 12.5113 1.71953 13.5576C1.85031 15.1269 2.80937 16.2168 4.37875 16.4783C5.16343 16.6091 5.99171 16.6527 6.81999 16.6527C8.34577 16.6963 9.87155 16.6527 11.4409 16.6527C12.1384 16.6527 12.8359 16.6091 13.5334 16.5219C14.1873 16.4783 14.7976 16.2604 15.3208 15.8244C16.1926 15.1269 16.4978 14.2115 16.5414 13.1652C16.6286 11.8574 16.6286 10.4624 16.6722 9.02385Z" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M13.8381 9.1983C13.8381 11.8139 11.7456 13.9064 9.13 13.9064C6.51437 13.9064 4.42188 11.8139 4.42188 9.15471C4.42188 6.5827 6.55796 4.49023 9.17359 4.49023C11.7456 4.49023 13.8381 6.5827 13.8381 9.1983ZM9.13 12.2498C10.7866 12.2498 12.1816 10.8548 12.1816 9.1983C12.1816 7.54176 10.7866 6.14677 9.13 6.14677C7.42984 6.14677 6.07843 7.54176 6.07843 9.1983C6.03484 10.8548 7.42984 12.2498 9.13 12.2498Z" fill="white"/>
    <path d="M15.1031 4.27148C15.1031 4.8818 14.6236 5.40492 14.0133 5.40492C13.403 5.40492 12.8798 4.8818 12.9234 4.27148C12.9234 3.66117 13.403 3.18164 14.0133 3.18164C14.6236 3.18164 15.1031 3.66117 15.1031 4.27148Z" fill="white"/>
    </svg>
    
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M18.3481 10.7318V17.5072H14.3916V11.1769C14.3916 9.59436 13.8476 8.50635 12.4134 8.50635C11.3254 8.50635 10.6825 9.24818 10.3857 9.94056C10.2868 10.1878 10.2374 10.534 10.2374 10.8802V17.5072H6.28089C6.28089 17.5072 6.33035 6.77541 6.28089 5.68739H10.2374V7.36887C10.2374 7.36887 10.2374 7.41832 10.1879 7.41832H10.2374V7.36887C10.7814 6.57759 11.6716 5.39065 13.7982 5.39065C16.3699 5.39065 18.3481 7.1216 18.3481 10.7318ZM2.22551 0C0.890204 0 0 0.8902 0 2.02768C0 3.16515 0.84075 4.05536 2.17605 4.05536H2.22551C3.61028 4.05536 4.45102 3.16516 4.45102 2.02768C4.40157 0.8902 3.56082 0 2.22551 0ZM0.197817 17.5072H4.10483V5.68739H0.197817V17.5072Z" fill="white"/>
    </svg>
    
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="9" height="19" viewBox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M8.18468 9.17404H5.62135V18.3481H1.79883V10.675V9.17404H0V5.93615H1.79883V3.82252C1.79883 2.33848 2.51837 0 5.62135 0H8.4545V3.14795H6.43082C6.11603 3.14795 5.62135 3.32784 5.62135 4.04737V5.93615H8.49948L8.18468 9.17404Z" fill="white"/>
    </svg>
    
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_2122_824" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="17">
    <path d="M0 0H17V17H0V0Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_2122_824)">
    <path d="M13.3875 0.796875H15.9946L10.2996 7.32245L17 16.2037H11.7543L7.64271 10.8184L2.94343 16.2037H0.333929L6.42479 9.22159L0 0.798089H5.37929L9.09014 5.71959L13.3875 0.796875ZM12.4707 14.6397H13.9157L4.59 2.27952H3.04057L12.4707 14.6397Z" fill="white"/>
    </g>
    </svg>
    
  );
}

const SOCIALS: SocialItem[] = [
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedinIcon },
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "X", href: "https://x.com", Icon: XIcon },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-[#020a14] text-(--color-brand-white)">
      <Image
        src="/images/footer/bg.webp"
        alt=""
        fill
        priority={false}
        sizes="100vw"
        className="-z-10 object-cover object-center select-none pointer-events-none"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[353px] w-full max-w-[1554px] flex-col justify-between gap-8 px-10 py-12 lg:px-14 lg:py-16">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
          <Link
            href="/"
            className="relative flex h-14 w-[140px] shrink-0 items-center transition-opacity hover:opacity-90"
            aria-label="Go to homepage"
          >
            <Image
              src="/logo.svg"
              alt="Balderas Demolition Inc."
              fill
              sizes="160px"
              className="object-contain object-left"
            />
          </Link>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 font-maison text-[18px] font-medium leading-[22px] tracking-[-0.02em] text-white"
          >
            {FOOTER_NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-(--color-brand-orange)"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <ul className="flex items-center gap-6">
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="inline-flex items-center justify-center text-white transition-colors hover:text-(--color-brand-orange)"
                >
                  <Icon className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="h-px w-full bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-3 font-maison text-[18px] font-medium leading-[22px] tracking-[-0.02em] text-white sm:flex-row">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <Link
              href="/terms"
              className="transition-colors hover:text-(--color-brand-orange)"
            >
              Terms of use
            </Link>
            <Link
              href="/privacy"
              className="transition-colors hover:text-(--color-brand-orange)"
            >
              Privacy &amp; Environmental Policy
            </Link>
          </div>
          <SimpleText className="text-[18px] font-medium leading-[22px] tracking-[-0.02em] text-white">
            Copyright &copy; {year} Balderas Demolition Inc. All Rights
            Reserved.
          </SimpleText>
        </div>
      </div>
    </footer>
  );
}
