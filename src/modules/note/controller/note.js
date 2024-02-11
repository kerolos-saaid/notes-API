import notesModel from "../../../../DB/models/Note.model.js";
import userModel from "../../../../DB/models/User.model.js";

//Add  note
const addNote = async (req, res) => {
    const { title, content, userId } = req.body;
    try {
        await notesModel.create({
            userId,
            title,
            content,
        }).then((note) => {
            if (note) {
                return res.json({ message: 'Note added successfully' });
            } else {
                return res.json({ message: 'User does not exist' });
            }
        });

    } catch (err) {
        return res.json({ message: `Error..................${err.stack}` });
    }
};

//Get all notes
const all = async (req, res) => {
    try {
        await notesModel.findAll(
            { attributes: { exclude: 'userId' } }
        ).then((notes) => {
            if (notes) {
                return res.json({ message: "Done", notes });
            }
        })
    } catch (err) {
        return res.json({ message: `Error..................${err.stack}` });
    }
}

//Get all users & their notes
const allWithUsers = async (_, res) => {
    try {
        const notes = await notesModel.findAll({
            include: {
                model: userModel,
                attributes: { exclude: ['password'] }
            },
        })
        return res.json({ message: "Done", notes });
    } catch (err) {
        return res.json({ message: `Error..................${err.stack}` });
    }
};


//Delete note
const deleteNote = (req, res) => {
    const { id, userId } = req.body;
    console.log(req.body);
    notesModel.destroy({
        where: {
            userId,
            id
        }
    }).then(result => {
        if (result > 0) {
            return res.json({ message: "Done" });
        } else {
            return res.json({ message: `No notes found for this user with noteID: ${id}` });
        }
    })
}

//Update note
const updateNote = async (req, res) => {
    const { id, userId, title, content } = req.body;
    try {
        const search = await notesModel.findOne({ where: { userId, id } });
        const result = await notesModel.update({ title, content }, {
            where: {
                userId,
                id
            },
        }).then(result => {
            console.log(result);
            if (result > 0 || search) {
                return res.json({ message: "Done" });
            } else {
                return res.json({ message: `No notes found for this user with noteID: ${id}` });
            }
        });
    } catch (err) {
        return res.json({ message: `Error..................${err.stack}` });
    }
}


export default { addNote, all, allWithUsers, deleteNote, updateNote };