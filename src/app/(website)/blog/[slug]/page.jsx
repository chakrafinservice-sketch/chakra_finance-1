
"client"
import { notFound } from "next/navigation";
import { SquarePen } from "lucide-react";
import pb from "@/lib/pb";
import ShareButtons from "./ShareButtons";


export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ FIX

  try {
    const blog = await pb
      .collection("blogs")
      .getFirstListItem(`slug="${slug}" && isPublished=true`);

    return {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription,
      keywords: blog.keywords,
    };
  } catch {
    return {
      title: "Blog Not Found",
    };
  }
}

export default async function BlogDetail({ params }) {
  const { slug } = await params; // ✅ FIX

  try {
    const blog = await pb   //pb
      .collection("blogs")
      .getFirstListItem(`slug="${slug}" && isPublished=true`);

    const imageUrl = pb.files.getURL(blog, blog.featuredImage);

    return (
      <>
      
        <div className="bg-gray-50 py-10 px-4 md:px-0">
          <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-2xl overflow-hidden">
            {/* Featured Image */}
            <div className="relative">
              <img
                src={imageUrl}
                alt={blog.title}
                className="w-full h-72 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              {/* Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                  {blog.title}
                </h1>
                <div className="text-sm mt-2 opacity-80 flex items-center gap-2">
                  {new Date(blog.created).toDateString()}
                 
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-10">
              {/* Excerpt */}
              {blog.excerpt && (
                <p className="text-lg text-gray-600 mb-6 border-l-4 border-blue-500 pl-4 italic">
                  {blog.excerpt}
                </p>
              )}

              {/* Blog Content */}
              <div
                className="prose prose-lg max-w-none prose-img:rounded-xl prose-headings:text-gray-900 prose-p:text-gray-700"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Divider */}
              <div className="border-t mt-10 pt-6 flex justify-between items-center">
                <span className="text-sm text-gray-500 flex gap-2">
                  <SquarePen size={20} /> <span>{blog.author}</span>
                </span>

                <button className="text-blue-600 font-medium hover:underline">
                  <ShareButtons title={blog.title} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error(error);
    notFound(); // ✅ proper 404 page
  }
}
