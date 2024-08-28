import Link from 'next/link'
import React, { Suspense } from 'react'
import List from './_components/List'
import Loading from '../loading'

const PostsPage = async () => {

  return (
    <div className='px-4 sm:px-6 lg:px-8 mt-10'>
        <div className='sm:flex sm:items-center'>
            <div className='sm:flex-auto'>
                {/*  leading = line-height */}
                <h1 className='text-base font-semibold leading-6 text-gray-900'>
                    Posts</h1>
                    <p className='mt-2 text-sm text-gray-700'>
                        A list of all posts from the json file
                    </p>
            </div>
            <div className='mt-4 sm:mt-0 sm:flex-none'>
                <Link href={'/posts/new'} type='button' 
                className='block rounded-md bg-rose-600 px-5 py-2 text-center text-sm
                font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600'>
                    Add Posts
                </Link>
            </div>
        </div>
     
     <Suspense fallback={<Loading/>}>
     <List />
     </Suspense>

    </div>
  )
}

export default PostsPage