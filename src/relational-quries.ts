import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationaQuries = async () => {
//   const result = await prisma.user.findUnique({
//     where: {
//       id: 1,
//     },
//     // include: {
//     //     Post: true
//     // }
//   }).Post();

// Relational filters

const publishedPostUsers = await prisma.user.findMany({
    include: {
        Post: {
            where: {
                published: true
            }
        }
    }
})

//   console.log(publishedPostUsers)
  console.dir(publishedPostUsers, {depth: Infinity});
  
};

relationaQuries();
