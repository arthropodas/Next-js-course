export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      <div>
        {children}
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
                {users}
                {revenue}
            
            </div>
          </div>
          <div style={{display:"flex", flex:1}}>    {notifications} </div>
        </div>
      </div>
    </>
  );
}