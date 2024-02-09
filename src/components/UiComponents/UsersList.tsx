
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { auth } from "@/lib/auth";
interface UserType {
  _id: string;
  fullName: string;
  email: string;
  image: string;
  country: string;
  bio?: string
}

async function UsersList(props: {user: UserType}) {
  const session = await auth()
  const {user} = props
  return (
    <Link href={`/${session?.user?.email}/${user._id}`}>
    <div className="border h-full flex gap-2 px-2 py-1">
      <Avatar className="scale-90">
        <AvatarImage src={user.image} />
        <AvatarFallback className="animate-pulse bg-slate-800"></AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-center">
        <p className="font-semibold text-sm">{user.fullName}</p>
        <p className="text-xs text-slate-500">{user.bio ? user.bio : user.country}</p>
      </div>
    </div>
    </Link>
  );
}

export default UsersList;
