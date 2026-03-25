"use client";
import { useEffect, useState } from "react";
import { Plus, Trash2, X, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import pb from "@/lib/pb";


export default function BlogsAdmin() {
  const router = useRouter();

  const [blogs, setBlogs] = useState([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const [loading, setLoading] = useState(true);

  // FORM STATES
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState("");

  const [isPublished, setIsPublished] = useState(false);
  const [isFeatured, setIsFeatured] = useState(false);

  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [keywords, setKeywords] = useState("");

  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState("");

  // 🔐 Auth check
  useEffect(() => {
    if (!pb.authStore.isValid) {
      router.replace("/login");
    } else {
      setLoading(false);
    }
  }, []);

  // 📥 Fetch blogs
  const fetchBlogs = async () => {
    const res = await pb.collection("blogs").getFullList({
      sort: "-created",
    });
    setBlogs(res);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // ➕ Open Add
  const openAdd = () => {
    setEditing(null);
    resetForm();
    setOpen(true);
  };

  // ✏️ Open Edit
  const openEdit = (blog) => {
    setEditing(blog);

    setTitle(blog.title || "");
    setSlug(blog.slug || "");
    setContent(blog.content || "");
    setExcerpt(blog.excerpt || "");
    setAuthor(blog.author || "");
    setTags(blog.tags || "");
    setCategory(blog.category || "");

    setIsPublished(blog.isPublished);
    setIsFeatured(blog.isFeatured);

    setMetaTitle(blog.metaTitle || "");
    setMetaDescription(blog.metaDescription || "");
    setKeywords(blog.keywords || "");

    setExistingImage(blog.featuredImage);
    setImage(null);

    setOpen(true);
  };

  // 🔄 Reset
  const resetForm = () => {
    setTitle("");
    setSlug("");
    setContent("");
    setExcerpt("");
    setAuthor("");
    setTags("");
    setCategory("");
    setIsPublished(false);
    setIsFeatured(false);
    setMetaTitle("");
    setMetaDescription("");
    setKeywords("");
    setImage(null);
    setExistingImage("");
  };

  // 💾 Save (Create/Update)
  const handleSave = async () => {
    try {
      let data = {
        title,
        slug,
        content,
        excerpt,
        author,
        tags,
        category,
        isPublished,
        isFeatured,
        metaTitle,
        metaDescription,
        keywords,
      };

      if (image) data.featuredImage = image;

      if (editing) {
        await pb.collection("blogs").update(editing.id, data);
      } else {
        await pb.collection("blogs").create(data);
      }

      setOpen(false);
      resetForm();
      fetchBlogs();
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  // 🗑️ Delete
  const handleDelete = async () => {
    if (!editing) return;

    if (!confirm("Delete this blog?")) return;

    await pb.collection("blogs").delete(editing.id);
    setOpen(false);
    fetchBlogs();
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-2 overflow-x-scroll">
      {/* header */}
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">Blogs</h2>
        <button
          onClick={openAdd}
          className="bg-black cursor-pointer text-white px-3 py-1 rounded flex items-center gap-1"
        >
          <Plus size={16} /> Add Blog
        </button>
      </div>

      {/* table */}
      <div className="border">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 border-b">
            <tr className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              <th className="px-4 py-3 text-center">Image</th>
              <th className="px-4 py-3 text-center">Title</th>
              <th className="px-4 py-3 text-center">Slug</th>
              <th className="px-4 py-3 text-center">Content</th>
              <th className="px-4 py-3 text-center">Exceprt</th>
              <th className="px-4 py-3 text-center">Author</th>
              <th className="px-4 py-3 text-center">Published</th>
              <th className="px-4 py-3 text-center">Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr
                key={blog.id}
                onClick={() => openEdit(blog)}
                className="cursor-pointer hover:bg-gray-100"
              >
                <td className="p-1">
                  {blog.featuredImage && (
                    <img
                      src={pb.files.getURL(blog, blog.featuredImage)}
                      className="w-16 h-10 object-cover"
                    />
                  )}
                </td>
                <td className="text-center px-2">{blog.title}</td>
                <td className="text-center px-2">{blog.slug}</td>
                <td className="text-center px-2">{blog.content}</td>
                <td className="text-center px-2">{blog.excerpt}</td>
                <td className="text-center px-2">{blog.author}</td>
                <td className="text-center px-2">
                  {blog.isPublished ? "Yes" : "No"}
                </td>
                {/* <td className="text-center px-2">{blog.metaTitle}</td>
                <td className="text-center px-2">{blog.metaDescription}</td> */}
                <td className="text-center px-2">{blog.created}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* model */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 w-[600px] max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between">
              <h2 className="mb-3 font-bold">
                {editing ? "Edit Blog" : "Add Blog"}
              </h2>
              <XCircle
                onClick={() => setOpen(!open)}
                className="cursor-pointer"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <div>
                  <label htmlFor="Title" className="text-sm font-semibold">
                    Title
                  </label>
                </div>
                <div>
                  <input
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-1 w-full"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="Slug" className="text-sm font-semibold">
                    Slug
                  </label>
                </div>
                <div>
                  <input
                    placeholder="Slug"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="border p-1 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-1 py-3">
              <label htmlFor="Content" className="text-sm font-semibold">
                Content
              </label>
              <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="border p-1 w-full"
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <div>
                  <label htmlFor="Excerpt" className="text-sm font-semibold">
                    Excerpt
                  </label>
                </div>
                <div>
                  <input
                    placeholder="Excerpt"
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    className="border p-1 w-full"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="Author" className="text-sm font-semibold">
                    Author
                  </label>
                </div>
                <div>
                  <input
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="border p-1 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <div>
                  <label htmlFor="Image" className="text-sm font-semibold">
                    Image
                  </label>
                </div>
                <div>
                  <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="border p-1 w-full"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="Category" className="text-sm font-semibold">
                    Category
                  </label>
                </div>
                <div>
                  <input
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border p-1 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-1 py-3">
              <label>
                <input
                  type="checkbox"
                  checked={isPublished}
                  onChange={() => setIsPublished(!isPublished)}
                />
                <span className="px-2">Publish</span>
              </label>
            </div>
            <div className="grid lg:grid-cols-1">
              <label htmlFor="MetaTitle" className="text-sm font-semibold">
                Meta Title
              </label>
              <input
                placeholder="Meta Title"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                className="border p-1 w-full"
              />
            </div>
            <div className="grid lg:grid-cols-1 py-2">
              <label
                htmlFor="MetaDescription"
                className="text-sm font-semibold"
              >
                Meta Description
              </label>
              <textarea
                placeholder="Meta Description"
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                className="border p-1 w-full"
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <div>
                  <label htmlFor="Tags" className="text-sm font-semibold">
                    tags
                  </label>
                </div>
                <div>
                  <input
                    placeholder="Tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="border p-1 w-full"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="Keywords" className="text-sm font-semibold">
                    Keywords
                  </label>
                </div>
                <div>
                  <input
                    placeholder="Keywords"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    className="border p-1 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-1">
              <label>
                <input
                  type="checkbox"
                  checked={isFeatured}
                  onChange={() => setIsFeatured(!isFeatured)}
                />
                <span className="px-2">Featured</span>
              </label>
            </div>
            {/* Buttons */}
            <div className="flex gap-2 mt-4">
              {editing && (
                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white px-3 py-1"
                >
                  Delete
                </button>
              )}

              <button
                onClick={handleSave}
                className="bg-black text-white px-3 py-1"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
