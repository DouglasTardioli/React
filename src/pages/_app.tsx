import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../components/contexts/SidebarDrawerContext'
import { makeserver } from '../Services/mirage'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

if (process.env.NODE_ENV === 'development') {
  makeserver()
}

const queryClient = new QueryClient()


function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider >
  <Component {...pageProps} />
  </SidebarDrawerProvider>
  </ChakraProvider>
  <ReactQueryDevtools/>
  </QueryClientProvider>
  )
}

export default MyApp
