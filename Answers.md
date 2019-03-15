1. In Jest, what are the differences between describe() and it() globals, and what are good uses for them?
   Describe() creates a block that groups together several related tests, and it() is used to outline the expected behavior of each piece of functionality. I would use describe() to group together a series of it() statements to test an object that should have several key-value pairs.

2. What is the point of Test Driven Development? What do you think about this approach?
   The point of TDD is to force your code to be as clean and functional as possible. There is no better approach to protect against regressions and bugs than developing tests for expected behavior _before_ committing code. While it’s a very time=consuming approach, I find it extremely helpful - not only for its utility in helping your code to be clean and DRY, but in reinforcing mental models of expected behavior from code and gaining a better understanding of the nuts and bolts of the code we’re writing.

3. Mention three types of automated tests.
   Unit testing, Component testing, Integration testing
