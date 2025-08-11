export const stripHtml = (html: string): string => {
    return html.replace(/<\/?[^>]+(>|$)/g, "").trim();
  };