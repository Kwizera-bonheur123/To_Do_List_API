// Get all tasks
/**
 * @swagger
 * /To_Do_List/selectTask:
 *   get:
 *     tags:
 *       - To Do List
 *     description: Returns all Tasks
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of posts
 *         schema:
 *           type: array
 *       500:
 *         description: Internal server error
 */

//Add new task

/**
 * @swagger
 * /To_Do_List/addTask:
 *   post:
 *     tags:
 *       - To Do List
 *     summary: Create a new user with profile picture
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               task:
 *                 type: string
 *                 description: First name of the user
 *               duration:
 *                 type: string
 *                 description: Last name of the user
 *           required:
 *             - task
 *             - duration
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */



// Delete task by Id

/**
 * @swagger
 * /To_Do_List/deleteTask/{id}:
 *   delete:
 *     summary: Delete a post post by ID
 *     tags:
 *       - To Do List
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: post ID to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: post post deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "200"
 *                 message:
 *                   type: string
 *                   example: "post deleted successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     bogImage:
 *                       type: string
 *                       example: http://example.com/post_image.jpg
 *                     postTitle:
 *                       type: string
 *                       example: "Title of the post"
 *                     postContent:
 *                       type: string
 *                       example: "Content of the post post"
 *       404:
 *         description: post post not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "404"
 *                 message:
 *                   type: string
 *                   example: "post post not found"
 */


//Update Task

/**
 * @swagger
 * /To_Do_List/updateTask/{id}:
 *   put:
 *     summary: Update a post post by ID
 *     tags:
 *       - To Do List
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: post ID to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               task:
 *                 type: string
 *               duration:
 *                 type: string  
 *     responses:
 *       200:
 *         description: post post updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "200"
 *                 message:
 *                   type: string
 *                   example: "post post updated successfully"
 *       404:
 *         description: post post not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "404"
 *                 message:
 *                   type: string
 *                   example: "post post not found"
 */
