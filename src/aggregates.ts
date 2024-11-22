import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const aggregates = async () => {
    const avgAge = await prisma.user.aggregate({
        _avg: {
            age: true
        }
    })
    const sumAge = await prisma.user.aggregate({
        _sum: {
            age: true
        }
    })
    // const countAge = await prisma.user.aggregate({
    //     _count: {
    //         age: true
    //     }
    // })
    const countPost = await prisma.post.aggregate({
        _count: {
            title: true
        },
        where: {
            published: true
        }
    })
    const maxAge = await prisma.user.aggregate({
        _max: {
            age: true
        }
    })
    const minAge = await prisma.user.aggregate({
        _min: {
            age: true
        }
    })

    const countData = await prisma.post.count()

    console.log(countPost);
    
}

aggregates()