import Link from 'next/link'
import clsx from 'clsx';

export function NavLink({href, className = '', children, ...props}) {
  return (
    <Link
      href={href}
      className={clsx(
        'inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
