import { useMDXComponents } from '@/mdx-components'
import { MDXRemote, MDXRemoteOptions } from 'next-mdx-remote-client/rsc'
import remarkGfm from 'remark-gfm';
 
export default async function Mdx({
  content
} : {
  content: string
}) {
  const components = useMDXComponents({});
  const options: MDXRemoteOptions = {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    }
  }

  return (
    <article className='space-y-4'>
      <MDXRemote
        source={content}
        components={components}
        options={options}
      />
    </article>
  )
}