import Story from "@/components/Story";
import { getAllStories, getStory } from "@/lib/stories";
import { notFound } from "next/navigation";

type Params = Promise<{
  id: string;
}>;

export default async function StoryPage({ params }: { params: Params }) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);

  const story = await getStory(decodedId);

  if (!story) {
    return notFound();
  }

  return <Story story={story} />;
}

export async function generateStaticParams() {
  const stories = getAllStories();
  const paths = stories.map((story) => ({
    id: story.story,
  }));
  return paths;
}
