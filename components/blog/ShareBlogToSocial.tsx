import { BlogMeta } from '@/additional';
import Twitter from '@/components/icons/Twitter';
import LinkedIn from '@/components/icons/LinkedIn';
import LinkIcon from '@/components/icons/Link';
import Tooltip from '@/components/Tooltip';

export default function ShareBlogToSocial({ blog }: { blog: BlogMeta }) {
  const blogUrl = 'https://www.josetom.com/blog/' + blog.slug;

  const copyLinkToClipboard = async () => {
    await navigator.clipboard.writeText(blogUrl);
  };

  return (
    <div className="w-28 place-items-center sm:place-items-start grid grid-cols-3">
      <Tooltip text="Share to X">
        <a
          aria-label="Share to X"
          href={`https://x.com/intent/tweet?text=${
            'This blog from @_jose_tom_ is worth the read: ' + blog.title
          }&url=${blogUrl}&hashtags=${blog.tags}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Twitter height={18} width={18}></Twitter>
        </a>
      </Tooltip>
      <Tooltip text="Share to LinkedIn">
        <a
          aria-label="Share to LinkedIn"
          href={`https://www.linkedin.com/sharing/share-offsite/?mini=true&url=${blogUrl}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedIn height={18} width={18}></LinkedIn>
        </a>
      </Tooltip>
      <Tooltip text="Copy to clipboard">
        <a onClick={copyLinkToClipboard} className="cursor-pointer">
          <LinkIcon></LinkIcon>
        </a>
      </Tooltip>
    </div>
  );
}
