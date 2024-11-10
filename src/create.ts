import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //       username : 'user2',
  //       email: 'user2@ph.com',
  //       role: UserRole.user
  //   }
  // })

  // console.log(createUser);

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: 'This is bio',
  //     userId: 1
  //   }
  // })

  // console.log(createProfile)

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: 'Software engineering'
  //   }
  // })

  // console.log(createCategory)

  const createPost = await prisma.post.create({
    data: {
      title: "This is title",
      content: "This is content of the post",
      authorId: 1,
      postCategory: {
        create: [{ categoryId: 1 }, { categoryId: 2 }, { categoryId: 3 }],
      },
    },
    include: {
      postCategory: true,
    },
  });

  console.log(createPost);

  // const createMany = await prisma.post.createMany({
  //   data: [
  //       {
  //           title: "This is title 15",
  //         content: "This is content....15",
  //         authorName: "Shohaib Hossain"
  //       },
  //       {
  //           title: "This is title 16",
  //         content: "This is content....16",
  //         authorName: "Shohaib Hossain"
  //       },
  //       {
  //           title: "This is title 17",
  //         content: "This is content....17",
  //         authorName: "Shohaib Hossain"
  //       },
  //       {
  //           title: "This is title 18",
  //         content: "This is content....18",
  //         authorName: "Shohaib Hossain"
  //       },
  //       {
  //           title: "This is title 19",
  //         content: "This is content....19",
  //         authorName: "Shohaib Hossain"
  //       },
  //       {
  //           title: "This is title 20",
  //         content: "This is content....20",
  //         authorName: "Shohaib Hossain"
  //       },
  //       {
  //           title: "This is title 20",
  //         content: "This is content....20",
  //         authorName: "Shohaib Hossain"
  //       },
  //       {
  //           title: "This is title 20",
  //         content: "This is content....20",
  //         authorName: "Shohaib Hossain"
  //       },
  //       {
  //           title: "This is title 20",
  //         content: "This is content....20",
  //         authorName: "Shohaib Hossain"
  //       },
  //       {
  //           title: "This is title 20",
  //         content: "This is content....20",
  //         authorName: "Shohaib Hossain"
  //       }
  //   ]
  // })

  // console.log(createMany);

  const getAllFromDB = await prisma.post.findMany();
};

main();

//{
// category: {
// connect: {
//  id: 1
//  }
//  }
// },
