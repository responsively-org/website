// src/components/NavLink.jsx
import Link from 'next/link';
import clsx from 'clsx';

export function NavLink({href, className = '', children, ...props}) {
  const isHashLink = href.startsWith('/#');

  const handleClick = async e => {
    if (isHashLink) {
      e.preventDefault();

      const targetId = href.split('#')[1];
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const {default: Lenis} = await import('lenis');

        if (!window.lenisInstance) {
          window.lenisInstance = new Lenis();
          function raf(time) {
            window.lenisInstance.raf(time);
            requestAnimationFrame(raf);
          }
          requestAnimationFrame(raf);
        }

        window.lenisInstance.scrollTo(targetElement, {
          duration: 2,
        });
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={clsx(
        'inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-emerald-600 hover:text-white',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
