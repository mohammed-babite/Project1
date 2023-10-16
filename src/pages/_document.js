import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* Custom JS files */}
        <script
          async
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
        ></script>
        {/* theme js */}
        <script async src='/js/scripts.js'></script>
        {/* startbootstrap forms */}
        <script
          async
          src='https://cdn.startbootstrap.com/sb-forms-latest.js'
        ></script>

{/* <!-- JS Global Compulsory  --> */}
    <script  src='/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js'></script>

    {/* <!-- JS Implementing Plugins --> */}
    <script  src='/assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.js'></script>
    <script  src='/assets/vendor/hs-show-animation/dist/hs-show-animation.min.js'></script>
    <script  src='/assets/vendor/hs-go-to/dist/hs-go-to.min.js'></script>
    <script  src='/assets/vendor/hs-nav-scroller/dist/hs-nav-scroller.min.js'></script>
    <script  src='/assets/vendor/typed.js/lib/typed.min.js'></script>
{/* 
    <!-- JS Space --> */}
    <script src='/assets/js/theme.min.js'></script>
    <script  src='/assets/vendor/hs-show-animation/dist/hs-show-animation.min.js'></script>
        
      </body>
    </Html>
  )
}
