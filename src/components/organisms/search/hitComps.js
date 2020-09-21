import React from 'react'
import { Highlight, Snippet } from 'react-instantsearch-dom'
import { Link } from 'next/link'

export const DestinationHit = (clickHandler) => ({ hit }) => (
  <div>
    <Link
      to={hit.parent && hit.parent.slug ? `/wiki/${hit.parent.slug}/${hit.slug}` : `/wiki/${hit.slug}`}
      onClick={clickHandler}
    >
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </Link>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
)
