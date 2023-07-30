interface Props {
  children: React.ReactNode;
}

export const Key = ({children}: Props) => {
  return <span className="rounded-md bg-gray-200 px-2 py-1">{children}</span>;
};
