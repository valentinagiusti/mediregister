// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      email: 'harry-potter@hogwarts.com',
      firstName: 'Harry',
      lastName: 'Potter',
      address: 'Somewhere in Scotland',
      phoneNumber: '123-456-7890',
      documentPhoto: '/uploads/harry-potter.jpeg',
    },
    {
      email: 'dwight@paper-company.com',
      firstName: 'Dwight',
      lastName: 'Schrute',
      address: '456 Maple Ave Scranton',
      phoneNumber: '987-654-3210',
      documentPhoto: '/uploads/dwight-schrute.jpeg',
    },
    {
      email: 'monica-geller@ny.com',
      firstName: 'Monica',
      lastName: 'Geller',
      address: '889 7th St NY',
      phoneNumber: '987-892-3210',
      documentPhoto: '/uploads/monica.jpeg',
    },
  ];

  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
