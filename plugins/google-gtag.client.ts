declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default defineNuxtPlugin(() => {
  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-7J0JMF03TD';
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }

  gtag('js', new Date());
  gtag('config', 'G-7J0JMF03TD');
});
