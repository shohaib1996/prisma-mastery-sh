import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteData = async() => {
    // const singleDelete = await prisma.post.delete({
    //     where: {
    //         id: 2
    //     }
    // })

    // const deleteMany = await prisma.post.deleteMany({
    //     where: {
    //         published: false
    //     }
    // })

    // const deleteEverything = await prisma.post.deleteMany({})

    // console.log(deleteMany)
}

deleteData()