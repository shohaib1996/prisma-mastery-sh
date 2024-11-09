import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //         title: "This is title 2",
  //         content: "This is content....",
  //         authorName: "Shohaib Hossain"
  //     }
  //   })

  const createMany = await prisma.post.createMany({
    data: [
        {
            title: "This is title 15",
          content: "This is content....15",
          authorName: "Shohaib Hossain"
        },
        {
            title: "This is title 16",
          content: "This is content....16",
          authorName: "Shohaib Hossain"
        },
        {
            title: "This is title 17",
          content: "This is content....17",
          authorName: "Shohaib Hossain"
        },
        {
            title: "This is title 18",
          content: "This is content....18",
          authorName: "Shohaib Hossain"
        },
        {
            title: "This is title 19",
          content: "This is content....19",
          authorName: "Shohaib Hossain"
        },
        {
            title: "This is title 20",
          content: "This is content....20",
          authorName: "Shohaib Hossain"
        },
        {
            title: "This is title 20",
          content: "This is content....20",
          authorName: "Shohaib Hossain"
        },
        {
            title: "This is title 20",
          content: "This is content....20",
          authorName: "Shohaib Hossain"
        },
        {
            title: "This is title 20",
          content: "This is content....20",
          authorName: "Shohaib Hossain"
        },
        {
            title: "This is title 20",
          content: "This is content....20",
          authorName: "Shohaib Hossain"
        }
    ]
  })

  console.log(createMany);
  

  const getAllFromDB = await prisma.post.findMany();
};

main();
