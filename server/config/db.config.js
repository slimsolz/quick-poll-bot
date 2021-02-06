require("dotenv").config();

export const dbURL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@quickpollbot.trsdc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
