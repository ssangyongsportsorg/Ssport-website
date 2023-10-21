import { allDocs, allMeta } from 'contentlayer/generated'
import { createContentlayer } from 'next-docs-zeta/contentlayer'

export const { tree, getPage, getPageUrl } = createContentlayer(
  allMeta,
  allDocs
)
