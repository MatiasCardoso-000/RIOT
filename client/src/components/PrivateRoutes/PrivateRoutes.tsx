
interface PrivateRoutesParams {
  children: React.ReactNode;
}


export const PrivateRoutes = ({children}:PrivateRoutesParams) => {
  return (
    <div>
      <h1>Private Routes</h1>
      <p>This section is accessible only to authenticated users.</p>
    </div>
  );
}