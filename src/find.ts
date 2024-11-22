import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // find all
  
  const getAllFromDB = await prisma.post.findMany({
    select: {
      author: true
    }
  })

  // const findFirst = await prisma.post.findFirst({
  //   where: {
  //     id: 1
  //   }
  // })
  // const findFirstOrThrow = await prisma.post.findFirstOrThrow({
  //   where: {
  //     id: 1
  //   }
  // })

  const findUnique = await prisma.post.findUnique({
    where: {
      id: 3 
    },
    select: {
      title: true,
      content: true
    }
  })
  // const findUniqueOrThrow = await prisma.post.findUniqueOrThrow({
  //   where: {
  //     id: 2 
  //   }
  // })

  console.log(getAllFromDB);
  
  
};

main();