import './globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll/SmoothScroll';
import CustomCursor from '@/components/CustomCursor/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';
import Navbar from '@/components/Navbar/Navbar';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans-loaded',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono-loaded',
  display: 'swap',
});

export const metadata = {
  title: 'Ankush Panwar — Frontend UI/UX Developer',
  description:
    'Award-winning frontend developer specializing in beautiful, fast, and interactive web experiences with React, Next.js, and modern animation.',
  keywords: [
    'Ankush Panwar',
    'Frontend Developer',
    'UI/UX Developer',
    'React Developer',
    'Next.js Developer',
    'Web Animation',
    'Portfolio',
  ],
  authors: [{ name: 'Ankush Panwar' }],
  openGraph: {
    title: 'Ankush Panwar — Frontend UI/UX Developer',
    description:
      'Beautiful, fast and interactive web experiences crafted with React, Next.js and Framer Motion.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankush Panwar — Frontend UI/UX Developer',
    description:
      'Beautiful, fast and interactive web experiences crafted with React, Next.js and Framer Motion.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Clash Display from Fontshare for the premium display font */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@700,600,500,800&display=swap"
        />
        {/*
          Strip attributes injected by browser extensions (Bitdefender
          TrafficLight `bis_skin_checked`, Grammarly, ColorZilla, etc.)
          before React hydrates. Without this, React throws a hydration
          mismatch error in development.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{
  var BAD_NAMES = ['bis_skin_checked','bis_register'];
  var BAD_PREFIXES = ['__processed_','data-new-gr-','data-gr-','cz-shortcut-'];
  function strip(el){
    if(!el||!el.attributes)return;
    for(var i=el.attributes.length-1;i>=0;i--){
      var n=el.attributes[i].name;
      if(BAD_NAMES.indexOf(n)!==-1){el.removeAttribute(n);continue;}
      for(var j=0;j<BAD_PREFIXES.length;j++){
        if(n.indexOf(BAD_PREFIXES[j])===0){el.removeAttribute(n);break;}
      }
    }
  }
  function stripTree(root){
    strip(root);
    if(!root.querySelectorAll)return;
    var all=root.querySelectorAll('*');
    for(var i=0;i<all.length;i++)strip(all[i]);
  }
  stripTree(document.documentElement);
  var obs=new MutationObserver(function(muts){
    for(var i=0;i<muts.length;i++){
      var m=muts[i];
      if(m.type==='attributes'){strip(m.target);}
      else if(m.addedNodes){
        for(var j=0;j<m.addedNodes.length;j++){
          var n=m.addedNodes[j];
          if(n.nodeType===1)stripTree(n);
        }
      }
    }
  });
  obs.observe(document.documentElement,{attributes:true,childList:true,subtree:true});
}catch(e){}})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <SmoothScroll>
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
