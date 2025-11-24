const RequiredMention = ({ children }) => {
  return (
    <div>
      <span className="text-red-500">*</span> {children}
    </div>
  );
};

export default RequiredMention;
