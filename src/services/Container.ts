import { Container } from "inversify";
import { ICalculator, Calculator } from "./Calculator";

// Scope Definition Description
// Singleton (.inSingletonScope())
//A single instance of the dependency is created and reused throughout
//the application.It ensures that there is only one instance of the
//dependency within the container.

// Transient (.inTransientScope())
//A new instance of the dependency is created every time it is requested
//from the container.It ensures that each request gets a separate,
//isolated instance.

// Request (.inRequestScope())
//Typically used in web applications, a single instance is created
//per HTTP request.It ensures that all objects within the same HTTP
//request share the same instance.

export const dicontainer = new Container();
dicontainer.bind<ICalculator>("Calculator").to(Calculator).inTransientScope();
