import mongoose, {Schema} from "mongoose";

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    }
})

const tasks = mongoose.model("task",taskSchema);

export default tasks
