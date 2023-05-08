import { getVidByName } from "./assets/vids";

const PageNotFound = () => {

  const vid = new URL(getVidByName('typing-hero').vid, import.meta.url)

  return (
    <div className="w-full h-full absolute overflow-hidden bg-center bg-cover">
      <div className="bg-blend-overlay">
        <video className="w-full h-full" autoPlay muted loop>
          <source src={vid} type="video/mp4" />
        </video>
      </div>
      <div className="hero-content text-neutral-content">
        <div className="max-w-md text-center flex flex-wrap">
          <h1 className="mb-5 text-5xl font-bold">Page Not Found</h1>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;