import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       title: "This is the title 1",
  //       content: "THis is the content 1",
  //       authorName: "THis is author 1 ",
  //     },
  //   });

  //   const updateMany = await prisma.post.updateMany({
  //     where: {
  //       id: { in: [3, 4, 5] },
  //     },
  //     data: {
  //       published: true,
  //     },
  //   });

  //   console.log(updateMany);

  const upsertData = await prisma.post.upsert({
    where: {
      id: 1,
    },
    update: {
      title: "update Title",
    },
    create: {
      title: "Title 5",
      content: "content 5",
    },
  });

  console.log(upsertData)
};

updates();
