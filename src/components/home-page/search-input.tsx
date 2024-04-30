import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SearchInput() {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input className="rounded-lg" placeholder="Search..." type="search" />
            <Button className="rounded-lg" type="submit">
                <MicroscopeIcon className="w-4 h-4" />
            </Button>
        </div>
    )
}
//@ts-ignore
function MicroscopeIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} color={"#ffffff"} fill={"none"}>
            <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
    )
}