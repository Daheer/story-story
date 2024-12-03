import { Story } from "@/app/types/stories";
import { Page } from "@/app/types/stories";
import cleanTitle from "@/lib/cleanTitle";
import { supabase } from "@/lib/supabase";
import fs from "fs";
import path from "path";

const storiesDirectory = path.join(process.cwd(), "public/stories");

export function getAllStories(): Story[] {
  if (!fs.existsSync(storiesDirectory)) {
    return [];
  }
  const storyFolders = fs.readdirSync(storiesDirectory);
  const stories: Story[] = storyFolders.map((storyFolder) => {
    const storyPath = path.join(storiesDirectory, storyFolder);
    const files = fs.readdirSync(storyPath);

    const pages: Page[] = [];
    const pageMap: { [key: string]: Partial<Page> } = {};

    files.forEach((file) => {
      const filePath = path.join(storyPath, file); 
      const type = path.extname(file).substring(1);
      const pageNumber = file.match(/page(\d+)\./)?.[1];
      if (pageNumber) {
        if (!pageMap[pageNumber]) {
          pageMap[pageNumber] = {};
        }
        if (type === "txt") {
          pageMap[pageNumber]!.txt = fs.readFileSync(filePath, "utf-8");
        } else if (type === "png") {
          pageMap[pageNumber]!.png = `/stories/${storyFolder}/${file}`;
        }
      }
    })
    Object.keys(pageMap).forEach((pageNumber) => {
      if (pageMap[pageNumber].txt && pageMap[pageNumber].png) {
        pages.push(pageMap[pageNumber] as Page);
      }
    })
    return {
      story: cleanTitle(storyFolder),
      pages,
    }
  })
  const storiesWithPages = stories.filter((story) => story.pages.length > 0);
  return storiesWithPages;
}

export async function getAllStoriesv2(): Promise<Story[]> {
  try {
    // Fetch stories with their pages
    const { data: stories, error: storiesError } = await supabase
      .from('stories')
      .select(`
        id,
        historical_figure,
        story_pages (
          page_number,
          chapter,
          illustration_url
        )
      `);

    if (storiesError) throw storiesError;

    // Transform Supabase data to match the Story type
    const formattedStories: Story[] = stories.map(story => ({
      story: story.historical_figure,
      pages: story.story_pages.map(page => ({
        txt: page.chapter, // You'll need to fetch text content separately if not in the initial query
        png: page.illustration_url,
        pageNumber: page.page_number,
        chapter: page.chapter
      }))
    }));

    return formattedStories;

  } catch (error) {
    console.error('Error fetching stories:', error);
    return [];
  }
}

// export const getStory = (story: string): Story | undefined => {
//   const stories = getAllStories();
//   return stories.find((s) => s.story === story);
// };

export const getStory = async (story: string): Promise<Story | undefined> => {
  const stories = await getAllStoriesv2();
  return stories.find((s) => s.story === story);
};