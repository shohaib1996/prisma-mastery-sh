import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransaction = async () => {
    const createUser = prisma.user.create({
        data: {
            username: "Shimu",
            email: "shimu@ph.com",
            age: 25,
            role: "user"
        }
    });


    const updateUser = prisma.user.update({
        where: {
            id: 5
        },
        data: {
            age: 30
        }
    });


    const [userData, updateData] = await prisma.$transaction([
        createUser,
        updateUser
    ]);

    console.log(userData, updateData);
    
};

batchTransaction();