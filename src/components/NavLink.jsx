import Link from 'next/link';
import clsx from 'clsx';

export function NavLink({href, className = '', children, ...props}) {
  return (
    <Link
      href={href}
      className={clsx(
        'inline-block rounded-lg px-3 py-1 text-sm text-slate-700 hover:text-gray-800 hover:shadow-lg',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
