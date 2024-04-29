import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const Filter = () => {
  return (
    <Select>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="filter by" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>
            Category
        </SelectLabel>
        <SelectItem value="price">
            Price
        </SelectItem>
        <SelectItem value="date">
            Date
        </SelectItem>
        <SelectItem value="popularity">
            Popularity
        </SelectItem>
        <SelectItem value="rating">
            Rating
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
  )
}

export default Filter







