import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-transparent text-white container mx-auto my-5 items-center flex flex-col justify-center">
      {/* Esto se tiene que poner en un NavBar */}
      <p className="w-full text-center mx-auto my-3 p-3 text-xl md:text-3xl">
        Welcome to the <span className="font-bold">Star Wars Starship Catalog!</span> Embark on a journey through the vast galaxy and explore the incredible array of starships that have captured the imaginations of fans across the universe. From the iconic Millennium Falcon to the formidable Star Destroyers, our catalog offers detailed information and stunning visuals of the most famous ships in the Star Wars saga.
      </p>
      <p className="w-full text-center mx-auto text-lg md:text-2xl my-3 p-3">
        To unlock the full experience and gain access to all the features of our catalog, please <span className="underline cursor-pointer" onClick={() => navigate('/signIn')}>register</span>. Join our community of Star Wars enthusiasts and dive deeper into the lore, specifications, and history of these legendary vessels. May the Force be with you as you explore the stars!
      </p>
    </div>
  );
};
