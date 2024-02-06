import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function UsersList() {
  return (
    <div className="border h-full flex gap-2 px-2 py-1">
      <Avatar className="scale-90">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback className="animate-pulse"></AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-center">
        <p className="font-semibold text-sm">Jack P.Angulo</p>
        <p className="text-xs text-slate-500">lorem ipsum ...</p>
      </div>
      <small className="text-xs ml-auto text-blue-300">00:21 PM</small>
    </div>
  );
}

export default UsersList;
