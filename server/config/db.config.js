require("dotenv").config();

export const dbURL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@quickpollbot.trsdc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&ssl=true`;
// export const dbURL = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@quickpollbot-shard-00-00.trsdc.mongodb.net:27017,quickpollbot-shard-00-01.trsdc.mongodb.net:27017,quickpollbot-shard-00-02.trsdc.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=atlas-tvur56-shard-0&authSource=admin&retryWrites=true&w=majority`;
