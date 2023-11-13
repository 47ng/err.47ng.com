/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: '/NUQS-:code(\\d{3})',
      destination:
        'https://github.com/47ng/next-usequerystate/blob/next/errors/NUQS-:code.md',
      permanent: false,
    },
  ],
}

module.exports = nextConfig
