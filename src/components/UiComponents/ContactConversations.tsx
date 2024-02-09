async function ContactConversations({ receiverId }: { receiverId: string }) {
  
  return (
    <div className="h-full w-full rounded-md border shadow-sm shadow-primary p-2 flex flex-col gap-3">
      {/* contact conversation */}
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
      <div className="w-fit max-w-[80%] ml-auto">
        <p className="bg-slate-200 rounded-lg text-black  rounded-br-none p-2 text-sm ml-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          repellat quia natus. Ullam cupiditate repellendus, officiis sint
          pariatur perferendis blanditiis laudantium dolorum doloremque, harum
          placeat nesciunt? Velit earum nulla mollitia?
        </p>
        <p className="text-xs text-slate-400 text-end">10:10 PM</p>
      </div>

      {/* input tag */}
    </div>
  );
}

export default ContactConversations;
