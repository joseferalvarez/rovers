import { IPhoto } from "../schemas/photo";

export default function Card({photo}: {photo: IPhoto}) {
  return (
    <div className="bg-neutral-500">
        <p>{photo.id}</p>
        <img src={photo.img_src}/>
    </div>
  )
}
