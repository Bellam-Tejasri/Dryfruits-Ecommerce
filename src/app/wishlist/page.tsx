/* eslint-disable react/no-children-prop */
import React from 'react'
import WishlistPage from '../components/Wishlist'
import { WishlistProvider } from '../context/WishlistContext'

export default function page() {
  return (
    <div>
      <WishlistPage params={{
              slug: ''
          }} />
          <WishlistProvider children={undefined} />
    </div>
  )
}
