'use client'
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
export default function PostForm() {
    const [file, setFile] = useState<string | null>(null);
    const handelFileUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(URL.createObjectURL(e.target.files[0]));
        }
    };
    return (
        <div className=" w-full mx-auto px-4 py-12 md:px-6 md:py-16">
            <form
            method="POST"
            action="/api/posts"
            className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="title">
                                Post Title
                            </label>
                            <Input

                                id="title"
                                placeholder="Enter post title"
                                type="text"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="price">
                                Post Price
                            </label>
                            <Input

                                id="price"
                                placeholder="Enter post price"
                                type="number"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="description">
                                Post Description
                            </label>
                            <Textarea
                                id="description"
                                placeholder="Enter post description"
                                rows={3}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="published">
                                Published
                            </label>
                            <Switch aria-label="Published" id="published" />
                        </div>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Cover Image</label>
                    <div className="mt-1 overflow-hidden relative flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6 dark:border-gray-600">
                        {file  && (<div className="size-6 bg-white absolute top-1 right-1 z-50 rounded-md border flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill={"none"}>
                                <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        )}
                        {file && (
                            <img alt="Cover Image" className=" w-full top-0 h-auto rounded-md absolute z-20 object-contain" src={file} />
                        )}

                        <div className="space-y-1 text-center">
                            <svg
                                aria-hidden="true"
                                className="mx-auto h-12 w-12 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 48 48"
                            >
                                <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                />
                            </svg>
                            <div className="flex text-sm text-gray-600 dark:text-gray-400">
                                <label
                                    className=" absolute top-0 z-50 w-full h-full cursor-pointer"
                                    htmlFor="file-upload"
                                >
                                </label>
                                <span>Upload a file</span>
                                <input
                                    onChange={handelFileUpload}
                                    className="sr-only" id="file-upload" name="file-upload" type="file" />
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, GIF up to 10MB</p>
                            <input type="file" className="hidden" />
                        </div>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Image Gallery</label>
                    <div className="mt-1 grid grid-cols-3 gap-3">
                        <div className="aspect-square rounded-md border border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-800">
                            <img alt="Image 4" className="h-full w-full rounded-md object-cover" src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" />
                        </div>
                        <div className="aspect-square rounded-md border border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-800">
                            <img alt="Image 5" className="h-full w-full rounded-md object-cover" src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" />
                        </div>
                        <div className="aspect-square rounded-md border border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-800">
                            <img alt="Image 6" className="h-full w-full rounded-md object-cover" src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button type="submit">
                        Create Post
                    </Button>
                </div>
            </form>
        </div>
    )
}