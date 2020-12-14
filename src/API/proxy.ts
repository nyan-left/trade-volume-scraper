let proxyURL;

if (typeof window === 'undefined') {
  proxyURL = '';
} else {
  proxyURL = 'https://thingproxy.freeboard.io/fetch/';
}

export default proxyURL;
