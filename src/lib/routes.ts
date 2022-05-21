// router common function

/**
 * @description: splite the url and get the path
 */
export function splitUrl(url: string): string[] {
  return url.split('/').filter(item => item);
}

/**
 * @description: replace the lang path or the router
 */
export function setLangPath(path: string, langKey: string): string {
  return path.replace(splitUrl(path)[0], langKey);
}
