import { test, expectTypeOf } from "vitest";
import { fetchPhotos } from "../utils/fetchPhotos";
import { IPhoto } from "../schemas/photo";

test('Return photos array', async () => {
    const photos: IPhoto[] = await fetchPhotos({
        apiURL: import.meta.env.VITE_NASA_URL,
        apiKey: import.meta.env.VITE_NASA_API,
        sol: 1000,
        page: 1
    });

    expectTypeOf({photos: photos}).toEqualTypeOf<{photos: IPhoto[]}>;
});