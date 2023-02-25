import { db } from "@/lib/db";

// seed the db with a test user and 5 checklists

async function main() {
  const user = await db.user.upsert({
    where: { email: "testuser@email.com" },
    update: {},
    create: {
      email: "testuser@email.com",
      name: "testUser",
      // password: await hashPassword("password"),
      password: "testPassword",
      checklists: {
        create: new Array(5).fill(1).map((_, i) => ({
          tempField: `tempField ${i}`,
        })),
      },
    },
    include: {
      checklists: true,
    },
  });

  console.log({ user });
}
main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
