let proxyURL;

if (typeof window === 'undefined') {
  proxyURL = '';
} else {
  proxyURL = 'https://cors-anywhere.herokuapp.com/';
}

export default proxyURL;
