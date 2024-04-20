import "server-only"
import { db } from "./db"


const getMyImages = () => {
    return []
}


export async function getImages() {
    const images = await db.query.art.findMany({
        orderBy: (model, { desc }) => desc(model.createdAt)
    })

    return images;
}