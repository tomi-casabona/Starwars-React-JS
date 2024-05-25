import { ListPilots } from "./ListPilots"

export const Pilots = ({starship}) => {
  return (
    <div className="w-11/12 mx-auto">
          <h2 className="my-10 font-orbitron p-3 uppercase border-t border-b border-gray-500 text-white text-2xl">
            Pilots
          </h2>
          <ListPilots pilots={starship.pilots} />
        </div>
  )
}
