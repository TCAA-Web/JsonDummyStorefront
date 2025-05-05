interface HeadInterface {
  meta: {
    id: string
    title: string
    description: string
    keywords: string
    author: string
  }
}

export const Head = ({ meta }: HeadInterface) => {
  return (
    <>
      <title>{meta.title}</title>
      <meta name='description' content={meta.description} />
      <meta name='keywords' content={meta.keywords} />
      <meta name='author' content={meta.author} />
    </>
  )
}
