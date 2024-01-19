const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container flex justify-center pt-8">
      <div className="max-w-xs w-full">
        { children }      
      </div>      
    </div>
  );
}

export default AuthLayout;