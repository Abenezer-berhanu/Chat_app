import { getUserConversations } from "@/lib/actions/getUserConversations";
import { MessageType } from "@/lib/types";
import { formatRelative, subDays } from "date-fns";

async function ContactConversations({
  receiverId,
  id: ownerId,
}: {
  receiverId: string;
  id: any;
}) {
  const conversations: any = await getUserConversations({
    receiverId,
    ownerId,
  });
  return (
    <div className="h-full w-full rounded-md border shadow-sm shadow-primary p-2 flex flex-col gap-3">
      {conversations.length > 0 ? (
        conversations.map((conversation: MessageType) =>
          conversation.ownerId == ownerId ? (
            <div className="w-fit max-w-[80%] ml-auto">
              <p className="bg-slate-200 rounded-lg text-black  rounded-br-none p-2 text-sm ml-auto">
                {conversation.content}
              </p>
              <p className="text-xs text-slate-400 text-end">
                {
                  formatRelative(
                    subDays(conversation.createdAt, 3),
                    new Date()
                  ).split("at")[1]
                }
              </p>
            </div>
          ) : (
            <div className="w-full">
              <p className="bg-primary rounded-lg text-white w-fit max-w-[80%] rounded-bl-none p-2 text-sm">
                {conversation.content}
              </p>
              <p className="text-xs text-slate-400">
                {
                  formatRelative(
                    subDays(conversation.createdAt, 3),
                    new Date()
                  ).split("at")[1]
                }
              </p>
            </div>
          )
        )
      ) : (
        <div className="text-2xl text-wrap text-black/40 text-center">
          No Message have got!
        </div>
      )}
      {/* contact conversation
      <div className="w-full">
        <p className="bg-primary rounded-lg text-white w-fit max-w-[80%] rounded-bl-none p-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          repellat quia natus. Ullam cupiditate repellendus, officiis sint
          pariatur perferendis blanditiis laudantium dolorum doloremque, harum
          placeat nesciunt? Velit earum nulla mollitia?
        </p>
        <p className="text-xs text-slate-400">10:10 PM</p>
      </div>

      {/* owner conversation */}
      {/* <div className="w-fit max-w-[80%] ml-auto">
        <p className="bg-slate-200 rounded-lg text-black  rounded-br-none p-2 text-sm ml-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          repellat quia natus. Ullam cupiditate repellendus, officiis sint
          pariatur perferendis blanditiis laudantium dolorum doloremque, harum
          placeat nesciunt? Velit earum nulla mollitia?
        </p>
        <p className="text-xs text-slate-400 text-end">10:10 PM</p>
      </div> */}

      {/* input tag */}
    </div>
  );
}

export default ContactConversations;
