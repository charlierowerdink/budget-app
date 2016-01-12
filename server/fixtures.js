if (Entries.find().count() === 0) {
  Entries.insert({
    _id: "4303013bd675d9c836b7f49e",
    date: new Date(),
    name: 'Meijer',
    amount: 45.65
  });

  Entries.insert({
    _id: "9f6ac305d884d4c3b731cd75",
    date: new Date(),
    name: 'Rishis',
    amount: 80.23
  });
}

if (Categories.find().count() === 0) {
  Categories.insert({
    _id: "1fd72f2b71b272e129f1fef8",
    name: 'Groceries',
    allocation: 200,
    balance: 123,
    entries: ["4303013bd675d9c836b7f49e", "9f6ac305d884d4c3b731cd75"]
  });
}

if (Budgets.find().count() === 0) {
  Budgets.insert({
    _id: new Meteor.Collection.ObjectID(),
    name: 'Introducing Telescope',
    categories: [ "1fd72f2b71b272e129f1fef8" ]
  });
}