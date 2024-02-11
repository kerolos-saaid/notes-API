import userModel from "../../../../DB/models/User.model.js";
import { Op } from "sequelize"
const SignUp = async (req, res) => {
    const newUser = req.body;
    try {
        await userModel.findOne({
            where: { email: newUser.email }
        }).then(async (result) => {
            if (result) { return res.json({ message: "Email already exist" }); }
            await userModel.create(newUser).then(() => {
                return res.json({ message: "Done" });
            });
        });

    } catch (err) {
        return res.json({ message: `Error..................${err.stack}` });
    }
}

const SignIn = async (req, res) => {
    const { email, password, } = req.body;
    try {
        const result = await userModel.findOne({
            where: { email }
        }).then((result) => {
            if (!result) return res.json({ message: "No user found with this email" });
            else if (result.password == password) {
                delete result.dataValues.password;
                return res.json({ message: "Done", result });
            }
            else {
                return res.json({ message: "Wrong password" });
            }
        });
    } catch (err) {
        return res.json({ message: `Error..................${err.stack}` });
    }

}

const Update = async (req, res) => {
    const { id } = req.params;
    console.log(id, req.body);
    const updatedFields = req.body;
    try {
        const checkUserId = await userModel.findOne({
            where: {
                id
            }
        })



        if (checkUserId) {
            const checkEmailExist = await userModel.findOne({
                where: {
                    email: updatedFields.email,
                    id: {
                        [Op.ne]: id,
                    }
                }
            })
            if (checkEmailExist) {
                return res.json({ message: "Email alredy exists" });
            }
            else {
                const updateUser = await userModel.update(updatedFields, {
                    where: {
                        id
                    }
                });
                return res.json({ message: "Done" });

            }
        } else {
            return res.json({ message: "User id not found" });
        }

    } catch (err) {
        console.log(err);

        return res.json({ message: `Error..................${err.stack}` });
    }
}

const Delete = async (req, res) => {
    const { id } = req.params;
    try {
        await userModel.destroy({ where: { id } }).
            then((result) => {
                console.log(result);
                if (result) {
                    return res.json({ message: "Done" });
                }
                return res.json({ message: `No user with id: ${id}` });
            });
    } catch (err) {
        return res.json({ message: `Error..................${err.stack}` });
    }
}

const Search = async (req, res) => {
    const whereClause = {};
    const { age, ageOp, startWith, between, list, oldest } = req.query;
    if (req.query) {
        const operators = {
            "<=": Op.lte,
            ">=": Op.gte,
            "=": Op.eq,
            "<": Op.lt,
            ">": Op.gt,
        };
        if (age && operators[ageOp]) {
            whereClause.age = { [operators[ageOp]]: age };
        }
        else if (age) {
            whereClause.age = { $gte: age };
        }
        if (list) {
            whereClause.id = { [Op.in]: list.split(",") };
            console.log(whereClause);
        }
        if (startWith) {
            whereClause.name = { [Op.like]: `${startWith}%` };
        }
        if (between) {
            const [start, end] = between.split(",");
            whereClause.age = { [Op.between]: [start, end] };
        }
    }
    try {
        const findWithObj =
        {
            attributes: { exclude: 'password' }
        }
        if (whereClause) {
            findWithObj.where = whereClause;
        }
        if (oldest) {
            findWithObj.order = [['age', 'DESC']];
            findWithObj.limit = Number(oldest);
        }
        await userModel.findAll(findWithObj).then((result) => {
            if (result) return res.json({ message: "Done", result })
        });
    } catch (err) {
        return res.json({ message: `Error..................${err.stack}` });
    }
}

export default { Delete, Search, SignIn, SignUp, Update };