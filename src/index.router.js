import {connectDB} from '../DB/connection.js'
import userRouter from "./modules/user/user.router.js";
import noteRouter from "./modules/note/notes.router.js";

const bootstrap = (app, express, db) => {
    app.use(express.json());
    connectDB();
    app.use("/user", userRouter);
    app.use("/note", noteRouter);
    app.use("*", (_, res) => { return res.json({ message: "In-valid Routing" }) });
}

export default bootstrap;