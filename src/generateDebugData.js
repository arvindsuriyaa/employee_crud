const generateDebugData = () => {
  const friends = [];
  for (let i = 1; i < 241; i++) {
    friends.push({
      id: `${i}`,
      name: `${i % 2 ? "Jane" : "John"} Doe ${i}`,
      age: 20 + (i % 5),
      gender: i % 2 ? "Female" : "Male",
      contacts: [
        {
          id: `${i}${i}`,
          name: `${i % 2 ? "Jane" : "John"} Doe ${i}`,
          age: 20 + (i % 5),
          gender: i % 2 ? "Female" : "Male",
          friend: {
            name: `${i - (1 % 2) ? "Jane" : "John"} Doe ${i + 1}`,
            age: 20 + ((i + 1) % 5),
          },
        },
        {
          id: `${i}${i}d`,
          name: `${i % 2 ? "Jane" : "John"} Doe ${i}`,
          age: 20 + (i % 5),
          gender: i % 2 ? "Female" : "Male",
          friend: {
            name: `${i - (1 % 2) ? "Jane" : "John"} Doe ${i + 1}`,
            age: 20 + ((i + 1) % 5),
          },
        },
      ],
      friend: {
        name: `${i - (1 % 2) ? "Jane" : "John"} Doe ${i + 1}`,
        age: 20 + ((i + 1) % 5),
      },
    });
  }
  return friends;
};

export default generateDebugData;
