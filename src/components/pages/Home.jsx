import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-transparent text-white w-3/4 mx-auto">
    {/* Esto se tiene que poner en un NavBar */}
      <h1 className="p-4 my-10 text-center text-2xl font-semibold uppercase">Home</h1>
      <p className="w-2/3 text-center mx-auto my-3 p-3 text-3xl">
      Welcome to the <span className="font-bold">Star Wars Starship Catalog!</span> Embark on a journey through the vast galaxy and explore the incredible array of starships that have captured the imaginations of fans across the universe. From the iconic Millennium Falcon to the formidable Star Destroyers, our catalog offers detailed information and stunning visuals of the most famous ships in the Star Wars saga.
      </p>
      <p className="w-1/2 text-center mx-auto text-2xl my-3 p-3">
      To unlock the full experience and gain access to all the features of our catalog, please <span className="underline cursor-pointer" onClick={() => navigate('/signIn')}>register</span>. Join our community of Star Wars enthusiasts and dive deeper into the lore, specifications, and history of these legendary vessels. May the Force be with you as you explore the stars!
      </p>
    </div>
  );
};
