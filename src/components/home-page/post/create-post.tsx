import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import PostForm from "./form-post"

export function CreatePost() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
            create post
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            Create Post
          </SheetTitle>
          <SheetDescription>
            Fill the form below to create a new post
          </SheetDescription>
        </SheetHeader>
       <PostForm  />
      </SheetContent>
    </Sheet>
  )
}
