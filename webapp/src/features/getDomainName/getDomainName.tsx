export function getDomainName(url: string): string {
    const hostname = new URL(url).hostname; // "thegirl.ru"
    return hostname.replace(/^www\./, '').split('.')[0]; // "thegirl"
  }