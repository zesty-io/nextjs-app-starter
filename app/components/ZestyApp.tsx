"use client";
import { AppLoader, useSDK } from "@zesty-io/react-app-loader";

export default function ZestyApp() {
  return (
    <div className="container mx-auto mt-2">
      <AppLoader
        authServiceUrl={process.env.NEXT_PUBLIC_AUTH_SERVICE_URL || ""}
        authCookie={process.env.NEXT_PUBLIC_AUTH_COOKIE}
      >
        <ZestyChildComponent />
      </AppLoader>
    </div>
  );
}

export const ZestyChildComponent = () => {
  const { token, logout } = useSDK();
  return <div>
    <div>Authenticated: {token}</div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => logout()}>logout</button>
  </div>;
};
