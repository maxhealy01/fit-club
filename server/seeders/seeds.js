const faker = require('faker');

const db = require('../config/connection');
const { User, Goal } = require('../models');

db.once('open', async () => {
  await Goal.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create friends
  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);

    const { _id: userId } = createdUsers.ops[randomUserIndex];

    let friendId = userId;

    while (friendId === userId) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);

      friendId = createdUsers.ops[randomUserIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  }

  // create goals
  // let createdGoals = [];

  // for (let i = 0; i < 100; i += 1) {
  //   const goalType = "Weight Loss";
  //   const startDate = "4/4/2021";
  //   const endDate = "7/7/2021";
  //   const endValue = 170;
  //   progressData = [{date: "5/5/2021", value: 200}];

  //   const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //   const { username, _id: userId } = createdUsers.ops[randomUserIndex];

  //   const createdGoal = await Goal.create({ username, goalType, startDate, endDate, endValue, progressData });

  //   await User.updateOne(
  //     { _id: userId },
  //     { $push: { goals: createdGoal._id } }
  //   );

  //   createdGoals.push(createdGoal);
  // }


  console.log('all done!');
  process.exit(0);
});
