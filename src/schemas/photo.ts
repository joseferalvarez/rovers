import {z} from "zod";

const Camera = z.object({
    id: z.number(),
    name: z.string(),
    rover_id: z.number(),
    full_name: z.number()
});

const Rover = z.object({
    id: z.number(),
    name: z.string(),
    landing_date: z.date(),
    launch_date: z.date(),
    status: z.string(),
    max_sol: z.number(),
    max_date: z.date(),
    total_photos: z.number(),
    cameras: z.array(
        z.object({
            name: z.string(),
            full_name: z.string(),
    }))
});

const Photo = z.object({
    id: z.number(),
    sol: z.number(),
    camera: Camera,
    img_src: z.string(),
    earth_date: z.date(),
    rover: Rover
});

export type IPhoto = z.infer<typeof Photo>;