import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

const routesToPrerender = [
  '/',
  '/o-nas',
  '/uslugi',
  '/szkolenia',
  '/aktualnosci',
  '/kontakt',
  '/czlonkostwo',
  '/realizacje/modernizacja-drog',
  '/realizacje/projekty-mostowe',
  '/rodo'
]

;(async () => {
  for (const url of routesToPrerender) {
    const appHtml = render(url);
    const html = template.replace('<!--app-html-->', appHtml)

    const filePath = url === '/' ? 'dist/index.html' : `dist${url}/index.html`
    
    const dir = path.dirname(toAbsolute(filePath));
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(toAbsolute(filePath), html)
    console.log('pre-rendered:', filePath)
  }

  // Pre-render 404 page as /404.html for Apache ErrorDocument
  const notFoundHtml = render('/404-not-found');
  const notFoundPage = template.replace('<!--app-html-->', notFoundHtml)
  fs.writeFileSync(toAbsolute('dist/404.html'), notFoundPage)
  console.log('pre-rendered: dist/404.html')
})()
