import tasks from "../Models/taskModel";

export const addTask = async (req,res) => {
    try{
        const {task,duration} = req.body;
        if (!task || !duration) {
            return res.status(400).json({
              status: "400",
              message: "Validation error all field required",
              error: "Both 'task' and 'duration' fields are required.",
            });
          }
        const checkTask = await tasks.findOne({task:task})
        console.log(checkTask);
        if(checkTask){
            return res.status(400).json({
                status: "400",
                message: "Task already exist do on it",
        })
    }
        const newTask = await tasks.create({
            task ,
            duration
        });
        return res.status(201).json({
            status : "201",
            message : "Task added successfully",
            data: newTask
        })
    } catch(error){
        return res.status(500).json({
            status: "500",
            message: "Fail to add task",
            error: error.message
        })
    }
}

export const selectTasks = async (req,res) => {
    try {

        const data = await tasks.find();
        return res.status(200).json({
            status: 200,
            message: "Data retrieved successfully",
            data: data
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Fail to retieve data",
            error: error.message
        })
    }
}


//Update task
export const updateTask = async (req,res) => {
    try{
        const {id} = req.params;
        const {task,duration} = req.body;
        const checkTask = await tasks.findOne({task:task});
        if(checkTask){
            if(checkTask._id != id){
                return res.status(409).json({
                    status: 500,
                    message: "Task already exist"

                })
            }
        }
        const checkId = await tasks.findById(id)
        if(!checkId){
            return res.status(404).json({
                status: 404,
                message: "Id not found"
            })
        }

        const updatedTask = await tasks.findByIdAndUpdate(id,{
            task ,
            duration
        })
        return res.status(201).json({
            status: 201,
            message: "data updated successfully",
            data: updatedTask
        })
    } catch(error) {
        res.status(500).json({
            status: 500,
            message: "Fail to update task",
            error: error.message
        })
    }
}

export const deleteTask = async(req,res)=>{
    try{
    const {id} = req.params;
    const checkId = await tasks.findById(id);
    if(!checkId){
        return res.status(404).json({
            status: 404,
            message: "Id not found"
        })
    }
    const deletedTask = await tasks.findByIdAndDelete(id);
    return res.status(404).json({
        status: 200,
        message: "Data deleted successfully"
    })
}
    catch(error){
        res.status(500).json({
            status: 500,
            message: "Fail to delete post",
            error: error.message
        })
    }
}