import NotesModule from "./controller/note.js";
import { Router } from "express";

const router = Router();

router.get('/', NotesModule.all);
router.get('/Get-U&N', NotesModule.allWithUsers);
router.delete('/', NotesModule.deleteNote)
router.put('/', NotesModule.updateNote)
router.post('/', NotesModule.addNote)

export default router;