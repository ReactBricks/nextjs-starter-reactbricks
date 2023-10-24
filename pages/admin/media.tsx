import React from 'react'
import Head from 'next/head'
import { Admin, MediaLibrary } from 'react-bricks'

const AdminMediaLibrary: React.FC = () => {
  return (
    <Admin>
      <Head>
        <title>Media Library</title>
      </Head>
      <MediaLibrary />
    </Admin>
  )
}

export default AdminMediaLibrary
