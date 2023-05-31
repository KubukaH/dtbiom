export const UserProfile = ({ children }) => {
  return (
    <section className="flex flex-wrap bg-white m-1 h-[96vh] border rounded-md p-4 overflow-auto">
      <div className="container mx-auto">
       {children}
      </div>
    </section>
  );
}
