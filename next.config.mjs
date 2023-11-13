/** @type {import('next').NextConfig} */
const config = {
  redirects: async () => [
    {
      source: '/NUQS-:code(\\d{3})',
      destination:
        'https://github.com/47ng/next-usequerystate/blob/next/errors/NUQS-:code.md',
      permanent: false,
    },
  ],
}

export default config
