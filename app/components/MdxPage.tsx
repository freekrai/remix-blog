import * as React from 'react'
import {getMDXComponent} from 'mdx-bundler/client'
import {components} from './MdxComponents'

export function MDXPage({code}: {code: string}) {
  const Component = React.useMemo(() => getMDXComponent(code), [code])

  return (
    <main>
      <Component 
        components={components}
      />
    </main>
  )
}

