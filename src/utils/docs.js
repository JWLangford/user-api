/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       allOf:
 *         - type: object
 *           properties:
 *             id:
 *               type: string
 *               description: The user ID.
 *               example: 12aws345rw31
 *             username:
 *               type: string
 *               description: The unique username.
 *               minLength: 5
 *               maxLength: 20
 *               example: johnDoe123
 *             email:
 *               type: string
 *               format: email
 *               description: The email address of the user.
 *               example: jdoe@gmail.com
 *             created:
 *                type: string
 *                description: The Date the user was created.
 *                example: Wed Sep 08 2021
 *         - $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /users:
 *  get:
 *    tags: ["users"]
 *    description: Use to request all users
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /users/{id}:
 *  get:
 *    description: Use to request a single user
 *    tags: ["users"]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: ID of the user to retrieve.
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: a successful response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      '400':
 *        description: the specified user ID is invalid.
 *      '404':
 *        description: a user with the specified ID was not found.
 *
 */
