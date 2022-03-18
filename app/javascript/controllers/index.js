// Load all the controllers within this directory and all subdirectories.
// Controller files must be named *_controller.js.

import { application } from "./application"

import HelloController from "./hello_controller"
application.register("hello", HelloController)
