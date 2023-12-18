import dynamic from "next/dynamic";

const ZestyApp = dynamic(() => import("./components/ZestyApp"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="container mx-auto mt-2">
      <ZestyApp />
    </div>
  );
}
