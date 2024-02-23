import {
  PageViewer,
  fetchPage,
  fetchPages,
  cleanPage,
  types,
  renderMeta,
  renderJsonLd,
} from 'react-bricks/frontend'
import { useReactBricksContext } from 'react-bricks/frontend'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'

import config from '../react-bricks/config'
import Layout from '../components/layout'
import ErrorNoHeader from '../components/errorNoHeader'
import ErrorNoFooter from '../components/errorNoFooter'
import ErrorNoKeys from '../components/errorNoKeys'

interface PageProps {
  page: types.Page
  header: types.Page
  footer: types.Page
  errorNoKeys: string
  errorPage: boolean
  errorHeader: boolean
  errorFooter: boolean
}

const Page: React.FC<PageProps> = ({
  page,
  header,
  footer,
  errorNoKeys,
  errorPage,
  errorHeader,
  errorFooter,
}) => {
  // Clean the received content
  // Removes unknown or not allowed bricks
  const { pageTypes, bricks } = useReactBricksContext()
  const pageOk = page ? cleanPage(page, pageTypes, bricks) : null
  const headerOk = header ? cleanPage(header, pageTypes, bricks) : null
  const footerOk = footer ? cleanPage(footer, pageTypes, bricks) : null

  return (
    <Layout>
      {pageOk && !errorPage && !errorNoKeys && (
        <>
          <Head>
            {renderMeta(pageOk)}
            {renderJsonLd(pageOk)}
          </Head>
          {headerOk && !errorHeader ? (
            <PageViewer page={headerOk} />
          ) : (
            <ErrorNoHeader />
          )}
          <PageViewer page={pageOk} main />
          {footerOk && !errorFooter ? (
            <PageViewer page={footerOk} />
          ) : (
            <ErrorNoFooter />
          )}
        </>
      )}
      {errorNoKeys && <ErrorNoKeys />}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  let errorNoKeys: boolean = false

  if (!config.apiKey) {
    errorNoKeys = true
    return { props: { errorNoKeys } }
  }

  const { slug } = context.params

  let errorPage: boolean = false
  let errorHeader: boolean = false
  let errorFooter: boolean = false

  let cleanSlug = ''

  if (!slug) {
    cleanSlug = '/'
  } else if (typeof slug === 'string') {
    cleanSlug = slug
  } else {
    cleanSlug = slug.join('/')
  }

  const [page, header, footer] = await Promise.all([
    fetchPage(cleanSlug, config.apiKey, context.locale, config.pageTypes).catch(
      () => {
        errorPage = true
        return {}
      }
    ),
    fetchPage('header', config.apiKey, context.locale).catch(() => {
      errorHeader = true
      return {}
    }),
    fetchPage('footer', config.apiKey, context.locale).catch(() => {
      errorFooter = true
      return {}
    }),
  ])

  return {
    props: {
      page,
      header,
      footer,
      errorNoKeys,
      errorPage,
      errorHeader,
      errorFooter,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  if (!config.apiKey) {
    return { paths: [], fallback: true }
  }
  const allPages = await fetchPages(config.apiKey)

  const paths = allPages
    .map((page) =>
      page.translations
        .filter(
          (translation) => context.locales.indexOf(translation.language) > -1
        )
        .map((translation) => ({
          params: {
            slug: [...translation.slug.split('/')],
          },
          locale: translation.language,
        }))
    )
    .flat()

  return { paths, fallback: false }
}

export default Page
