import {PostMeta} from '@/lib/posts';

interface Props {
  post: PostMeta;
}

export const BlogPostTile = ({
  post: {title, date, slug, authorPic, author, authorTwitterUrl, description},
}: Props) => {
  const href = `/blog/${slug}`;
  const publishDate = new Date(date);
  return (
    <article
  key={href}
  className="flex max-w-xl flex-col items-start justify-between p-4 rounded-lg transition-shadow hover:shadow-2xl hover:scale-110"
>
  <div className="flex items-center gap-x-4 text-xs">
    <time dateTime={publishDate.toString()} className="text-gray-500">
      {publishDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </time>
  </div>
  <div className="group relative">
    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
      <a href={href}>
        <span className="absolute inset-0" />
        {title}
      </a>
    </h3>
    <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{description}</p>
  </div>
  <div className="relative mt-5 flex items-center gap-x-4">
    <img src={authorPic} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
    <div className="text-sm leading-6">
      <p className="font-semibold text-gray-900">
        <a href={authorTwitterUrl} className="hover:underline">
          <span className="absolute inset-0" />
          {author}
        </a>
      </p>
    </div>
  </div>
</article>

  );
};
