## Naive URL Validation
```js
const urlValidation = (str) => {
  const matches = str.match(/^(http:\/\/|https:\/\/)[a-zA-Z0-9\-\.\/]+$/);
  
  if (matches) {
    return matches[0].trim()
    }
  
  return "No url"
}

console.log(urlValidation('http://condense.tech'));
```

## Phone Number Extraction
```js 
const phoneNumExtractor = (str) => str.match(/\(\d{3}\) \d{2}-\d{6}/g) || "No valid phone number";

console.log(phoneNumExtractor(My phone number is (039) 02-121212));
```

## HTML Tag Matching
```js
const tagMatching = (str) => {
  const matches = str.match(/<a[^>]*>([^<]*)<\s*\/\s*a>/);

  if (matches) {
    return matches[1].trim()
    }
  
  return "No tag match found"
}

console.log(tagMatching("<a href='https://example.com'>Visit Example</a>"));
```