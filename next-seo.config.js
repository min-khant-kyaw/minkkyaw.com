const title = 'Min Khant Kyaw – Developer, Writer';
const description =
  'Front-end developer, Machine Learning enthusiast, Javascript junkie.';

const SEO = {
  title,
  description,
  canonical: 'https://minkkyaw.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://minkkyaw.com',
    title,
    description,
    images: [
      {
        url: 'https://minkkyaw.com/static/images/banner.svg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@therealUD',
    site: '@therealUD',
    cardType: 'summary_large_image'
  }
};

export default SEO;