import { useEffect, useState } from "react";
import { fetchPhotos } from "./utils/fetchPhotos";
import { IPhoto } from "./schemas/photo";
import Card from "./components/Card";

function App() {
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  useEffect(() => {
    fetchApiPhotos();
  }, []);

  const fetchApiPhotos = async () => {
    const apiPhotos: IPhoto[] = await fetchPhotos({apiURL: import.meta.env.VITE_NASA_URL, apiKey: import.meta.env.VITE_NASA_API, page: 1, sol: 1000});
    if(!apiPhotos || !apiPhotos.length) return;
    setPhotos(apiPhotos);
  }

  return (
  <div className="grid-cols-3 bg-neutral-500">
    {photos.length && photos.map((photo) => (
      <Card key={photo.id} photo={photo}/>
    ))}
    {!photos.length && <p>No se han encontrado imagenes</p>}
  </div>
  )
}

export default App
