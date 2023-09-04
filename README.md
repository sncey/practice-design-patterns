# Practice Design Patterns

The objective of this assignment is for you to practice design patterns while building a hotel reservation system.

**Design patterns** are typical solutions to common problems in software design. Each pattern is like a blueprint that you can customize to solve a particular design problem in your code. Design patterns differ by their complexity, level of detail, and scale of applicability. In addition, they can be categorized by their intent and divided into three groups:
**Creational patterns** provide object creation mechanisms that increase flexibility and reuse of existing code.
**Structural patterns** explain how to assemble objects and classes into larger structures, while keeping the structures flexible and efficient.
**Behavioral patterns** take care of effective communication and the assignment of responsibilities between objects.

## Setup

Like always, the first steps for this assignment are:

1. Open your terminal and navigate to your dedicated assignments folder.
2. Then clone this assignment repo on your local machine.
3. Now open the assignment folder on VSCode.

## Starter code

The starter code in the `src` folder includes mongoose schemas for three types of rooms with some default values as well as the guest schema, along with the routes and controllers setup you need to work with.

Run the command `yarn && yarn start`. This will install all the dependencies and run the server.

## Requirements:

The main three patterns we're going to work on are singleton and factory as creational patterns and state as a behavioral pattern. You will be working in `db/connection.js`, `factories`, `controllers`, and `states` folders for the next requirements.

### Part 1: Build mongoose connection using the singleton pattern

We used to build a mongoose connection with a built-in function before but now we're going to build it inside a singleton class and import it to the `app.js` file.

### Part 2: Create a controller function and a factory class to handle creating different types of rooms

There are three different types of room models built for you: `singleRoom`, `doubleRoom`, and `suite`. You'll need to create the controller function to handle the request to add a new room and build a factory class in `./factories/roomFactory.js` to create these rooms according to the type coming in the request query.

### Part 3: Create a controller function to allow the guest to book a room

You'll need to create a controller function to allow the guest to book a room when they initially place a booking request. The room state should be changed from `unreserved` to `pending` and the guest ID should be saved as a reference in the room document.

### Part 4: Build a state pattern to handle the state of the room

Build a state pattern in `./states/roomState.js` to handle the state of the room as follows:

- When the guest books a room, the room state should be changed from `unreserved` to `pending` until the guest verifies the payment. In this state, the guest is allowed to cancel the reservation but check-in to the room.

- When the guest verifies the payment through the endpoint `/verify`, the room state should be changed from `pending` to `reserved`. The guest can still cancel and have a full refund.

- When the guest arrives at the reception for check-in, through the endpoint `/checkin`, the room state should be changed from `reserved` to `checkedin`. Keep in mind the guest can't cancel or verify anymore since they're already confirmed.

- A guest can cancel the reservation through the endpoint `/cancel` at the states `pending` and `reserved` but not at `checkedin` and on cancel the room state should be changed to `canceled`.

## Submission

Once you're ready to submit the assignment, follow these steps on your terminal:

1. Stage your changes to be committed: `git add .`
2. Commit your final changes: `git commit -m "solve assignment"`
3. Push your commit to the main branch of your assignment repo: `git push origin main`

After your changes are pushed, return to this assignment on Canvas for the final step of submission.
