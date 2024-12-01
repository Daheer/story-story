function cleanTitle(title: string): string {
  return title.replaceAll(/[-/\\[\]]/g, " ").replace(/\s+/g, " ").trim();
}

export default cleanTitle;