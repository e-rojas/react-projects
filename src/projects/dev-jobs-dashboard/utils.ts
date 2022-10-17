export function companyUrl(url: string) {
  return url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i)![2];
}
