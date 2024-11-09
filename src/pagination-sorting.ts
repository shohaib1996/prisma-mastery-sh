import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async() => {

    // offset pagination

    const offsetData = await prisma.post.findMany({
        skip: 5,
        take: 2
    })

    // cursor based pagination

    const cursorData = await prisma.post.findMany({
        skip: 5,
        take: 5,
        cursor: {
            id: 15
        }
    })

    const sortingData = await prisma.post.findMany({
        // orderBy: {
        //     title: "asc"
        // }

        orderBy: {
            id: 'desc'
        },
        where: {
            title: "Title 5"
        }
    })


    console.log("cursor pagination data: ", sortingData);
    

}

paginationSorting()