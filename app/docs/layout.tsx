import { DocsLayout } from 'next-docs-ui/layout'
import type { ReactNode } from 'react'
import { tree } from '../source'
import 'next-docs-ui/style.css'
export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <div>
          <DocsLayout tree={tree} nav={{ title: 'My App' }}>
      {children}
    </DocsLayout>
    </div>
  )
}
