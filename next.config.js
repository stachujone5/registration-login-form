/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  //eslint-disable-next-line -- next config - docs example
  async redirects() {
    return [
      {
        source: '/',
        destination: '/register',
        permanent: true
      }
    ]
  }
}
