# Programming 101: The Very Basics

## Caveats

This course assumes you have basic knowledge on how to use a computer, such as how to type or how to download something. It also assumes that you know how to look at settings menus and don't mind looking around to solve problems. The fundamentals of programming will be taught but there might be something extra that comes up and makes things difficult such as a compiler error. Please feel free to reach out or log an issue if you see a problem like that and we will try to help.

## The Setup

Before we can begin to program we will need a few things to get started.

1. We will need some way to edit our code that makes our work easier. The best option for this right now, in my opinion, is VSCode by Microsoft. Head over to the VSCode website to download it here [Download](https://code.visualstudio.com/).
2. Once that is done, download this project from github as a zip folder and unzip it anywhere you'd like.
3. Go ahead and install VSCode, and then open this folder inside of it.
4. If you don't already have NPM installed on your machine you will want to go to [NPM](https://nodejs.org/en/) and install it. Follow all the steps to get it added to your path as well.
5. Go to [TypeScript](https://www.typescriptlang.org/download) and follow all the instructions to get typescript set up. You may want to set it as global for our purposes.
6. Once those two are installed and checked, use VSCode to open up the previously unzipped folder that contains Programming 101.

## The Fundamentals

With that out of the way, we can jump straight to programming.
Before we start go ahead and press Ctrl+~ and see if a screen pops up in the bottom of your VSCode application. If it doesn't, you may have your terminal set to a different key binding. The alternative way to open it is to press Terminal at the top and then new terminal. Your workflow may be different on Windows, you may need to add NPM and TypeScript to your path to be able to run it here, but once it is here you should be able to type in TSC. If you type in TSC and nothing happens, good news, everything worked. If you got an error, google it or reach out to see what may have gone wrong. Now on to the fun part.

Basic symbols you will need to learn when reading code, feel free to right these down for reference later.

```typescript
; // this is a semi-colon, it means the end of a statement.
{ // this is an open squiggly bracket, it means the start of a new scope.
} // this is the closed squiggly bracket, it means the closing of a scope.
( // this is an open parenthesis, it usually means the start of arguments, parameters, or conditions.
) // this is a closing parenthesis, it usually means the closing of arguments, parameters, or conditions.
```

### The Very Basics 1.0 : Output

Important terminology:

> **Scope** the area that certain elements live in. Think of a nested doll, the doll on the inside can't escape to the outside. Scope works the same way, the inner scope cannot escape to the outside scope.  
> **Evaluate** to do determine or fix the value of, in our case usually what a variable or expression resolves to, i.e. 3 + 3 evaluates to 6.  
> **Expression** a mathematical or logical symbol or a meaningful combination of symbols. From [Merriam-Webster](https://www.merriam-webster.com/dictionary/expression).  
> **Variable** a symbol that evaluates to a value.  
> **Declaration** the act of telling the compiler to treat a symbol as a variable.  
> **Initialization** the act of assigning a value to a variable.  
> **Statement** an instruction to the computer, usually one line ending in ;

Writing code can be a simple or complicated exercise depending on several factors:

1. The scope of the project or program.
2. The problem domain.
3. The tools being used.

## Output To The Terminal

Let's start with the most basic program that everyone learns to write for their first time, hello world.
Open this window to one side in VSCode and open a new file in this folder to the other side. You can call that file HelloWorld.ts. The TS extension lets VSCode and our compiler know that it is going to be a typescript file.
In the file write the following code:

```typescript
console.log("Hello, World");
```

This code is extremely simple, it merely outputs the string hello world into our terminal. You can run it by opening the terminal, targeting the folder 'Programming 101' where your file lives, and writing tsc. Then, you can run the file by typing in node (yourfilename).js.
You are running the js file because typescript compiles into js, which is a concept we will cover later. Just know that from now on this is the usual steps you will take to compile and run your code, unless otherwise noted.
Let's go to a new line in your code and write a much more simple statement:

```typescript
console.log(3 + 3);
```

Run this code and you should see the number 6 printed in your terminal. In most online tutorials I've seen they usually don't explain what console.log means so I'd like to take a second to describe exactly what is happening here.

1. Console is what is called a class. That will be discussed down the line but remember that we are "calling" the log method from the console class. That's what it means when we see the . in between the two words there.
2. When we "call" the log method, it is doing something to the items in the parenthesis. The area inside the parenthesis is where we put our "arguments".  
   Take a few moments to write down some notes regarding what we've discussed so far, and then throw it out of your mind, we will go over classes and methods much later.

Anytime you get stuck or confused I highly recommend you google the topic, [W3Schools](https://www.w3schools.com/jsref/obj_console.asp) is a great resource for Javascript and Typescript as well as [MDN](https://developer.mozilla.org/en-US/).

## The Very Basics 1.1 : Variables

```typescript
let x = 3 + 3;
```

If you type the following code into your file and then compile and run it, you will not see any output, and that's correct. In this case, we instructed the computer to assign x to the result of 3 + 3 using the let keyword, and that's it. In this case we have **declared** and **initialized** our variable at the same time. Just as valid for the compiler is the following:

```typescript
let x;
x = 3 + 3;
```

In this case we have **declared** our variable but we didn't assign anything to it until the next line. If our program was running then x would exist inside of it floating around until we decided we needed to use it, and in that time it would still be 6.

```typescript
let x;
x = 3 + 3;
console.log(x);
```

As you can see here, once we assigned to x we were able to log x to the console. Console.log didn't print the symbol x, it printed the value that x is a reference to. We could say that x evaluates to 6.
Go into your file and add the following:

```typescript
let y;
console.log(y);
```

You should receive _undefined_ in your terminal. This is telling you that the symbol doesn't resolve to anything, because you didn't assign anything to it. If you don't assign a value to a variable it is _undefined_.

### Variable Scope

Variables have a place where they live and can be used. They cannot be discovered outside of that place we call the **scope** of the variable.

```typescript
let x = 6 + 6;
/* x has global scope here. 
It can be used anywhere. */
if (x == 6) {
  let y = 23 + x; // y has inner scope only, it can't escape.
} // y is gone.
```

Consider the above code. Firstly, you'll notice a new programming construct we haven't used yet, an if statement. Ignore that for the moment and take a look at the open squiggly bracket {. For our purposes we should consider this the opening of a new **scope**. Inside of that { is a new neighborhood, if you will, and the variables that live in there cannot go outside of it after the closing }. However, the x we declared is on the outside of the inner-neighborhood so it can easily take a trip inside, and then leave. How can we use y properly so that we can have it leave the **scope**?

```typescript
// x and y are global scope, they don't have any { before them.
// You could say they are at the "top" of the program.
let x = 6 + 6;
let y;

if (x == 6) {
  // y is assigned a new value here.
  // This is what is known as mutation.
  y = 23 + x;
}
// Both x and y can be used after here.
```

As you can see, if you want to use a variable you must declare it at the appropriate scope, it will not be allowed to leave it's {**scope**} if it is **declared** inside.
When you see a new { consider it a new scope, and a } is a closing of that scope.

### Primitive Types

Every variable in TypeScript has a **type**. When the **type** is a sort of _lower level_ type we can consider it a **primitive** of the language. Lower level would just mean it's closer to the machine or background API instead of _higher level_ which is more focused with how we are actually writing our program. When programming, we want to focus on the domain, whether that be high or low level or both, that concerns us and do our best to not work on the other domain. Therefore, although we might be able to create our own **primitive types** it's best to just the ones available to us, and create new ones only when it would result in a higher level construct.

There are three primitive types we are concerned with right now:

```typescript
let x: boolean = true; // True or false values only.
let y: number = 23; // Natural numbers and decimal numbers, positive and negative.
let z: string = "Hello, World"; // Words.
```

Although there is more information on these these types, we are only concerned with using them for our current program so we don't need the full breakdown on each of them. Aside from the number type, the string and boolean type are very standard for _high level languages_ and you will most likely see them in other languages you use.
Just like with variable declaration without a type, you are giving an instruction to the compiler that you want to:

1. assign a symbol x to evaluate to a boolean true.
2. assign a symbol y to evaluate to a number 23.
3. assign a symbol z to a **string** "Hello, World".

### Why Do We Care About Types?

If you don't declare the type the compiler will try to figure it out. However, this can lead to complications in your code. Consider a program where you do the following:

```typescript
let x = 23;
x = "Hello, World";
```

No type was assigned to x so it can change to be _any_ type at this point. This could lead to problems down the line because you don't have any guarantees about what x actually is. What if you wanted to add 6 to x later but it is now a string and not a number? If you declare the type, the compiler would catch this mistake and you could fix it. There are more complicated errors you can run into as well down the line as well.
Go ahead and clear your file and try the following:

```typescript
let x: number = 23;
x = "Hello, World";
```

In this case, typescript should have thrown an error and told you it can't compile because x is a number and not a string.

### Variable Use Cases

1. To create some sort of counter, something that accumulates when certain conditions are met.
2. To store a value that you will need later. Think of storing a person's name or age in a variable to be used to pull up their record.
3. There are special variables that cannot change called constants, these are important for keeping track of data you need for the life of the program.

### Variable Exercises

1. Create a variable name which is of type string and evaluates to your name.
2. Create a variable age which is of type number and evaluates to your age.
3. Create a variable isItCold which is of type boolean and evaluates to if it's cold or not where you're at.

## The Very Basics 1.2: Functions

For our purposes, a function is a way to separate our code for readability, as well as encapsulate instructions or operations for easy reuse. One of the most important principals in programming is the DRY principle, don't repeat yourself.
For our purposes, I want you to imagine that anything going into a function cannot be changed by the function, and for whatever inputs you have you should always get the same output.
Think of a black box with a hole on one side, and another hole on the other. When you put a dollar in the hole you always get out four quarters. In another box, when you enter in the numbers 3 and 4 you always get out the number 7 on the other side.

```typescript
function add(x: number, y: number): number {
  return x + y;
}
```

Here we see the above described function, we take two numbers as arguments, and then return a number that is the result of adding the two inputs. We will always get the same output if we get the same input.

### Function Recipe

Here is the basic recipe of a function:

1. We write out the word **function** so the compiler knows we want a new function here:

```typescript
function
```

2. We give the function a name so we can identify and use it later.

```typescript
function add
```

3. Next, we declare the **parameters** of the function. We we are declaring our function the items inside of the parenthesis are called **parameters** when we **call** the function they are called **arguments**. The parameters are separated by commas and you can give them any name you want.

```typescript
function add(x: number, y: number);
```

4. We need to tell the compiler what type it should expect to return from this function.

```typescript
function add(x: number, y: number): number;
```

5. What we have written so far, we can consider our function signature. This is the parameters of the function (or the arguments the function can take when it's called) and what the type of the value the function will return.

6. Next, we will need to define what the function to do inside it's own scope.

```typescript
function add(x: number, y: number): number {
  // New scope
  return x + y; // What the function is actually doing, return lets the compiler know the result should return from this scope.
}
```

7. When you write return, you are instructing the compiler that the value to the right of return should come to the top of the scope and exit it. That means that add literally becomes that value at that time. I will show an example to explain by **calling** the function.

```typescript
let x = add(3, 4);
```

What do you think x will evaluate to? If you answered 7, you are correct.
The reason for this is because when a function evaluates, it temporarily holds the result for assignment to a variable.
Open a new file and write the add function inside and then the following:

```typescript
add(3, 4);
// If you run this program now, nothing will display, you've merely called the function.
let x = add(3, 3);
// Assign x to the return value of the function. At this point, x will become 6 because add(3,3) is holding the result of 3+3 inside of it. Notice that the previous functions value is gone, you won't get 7 anymore because those inputs are no longer present.
console.log(x);
// You should see 6 when you run this code.
```

The concept we have been discussing has a fancy computer science term called _Referential Transparency_ which is just a way to say that a function takes inputs and for those inputs it returns the same output and doesn't effect anything else in the code, in other words there are no **side effects** of calling it.

### Function Exercises

1. Write a function that takes two numbers and returns the first number subtracted from the second number. You can assign the result to a variable or just console.log the whole function like this:

```typescript
console.log(yourFunction(x, y));
// Where your function is the name of the function you created, and x and y are the values you are putting in to test.
let x = yourFunction(3, 4);
console.log(x);
```

2. Write a function that returns a number squared.
3. Write a function that returns a number times 5.
4. Write a function that takes no arguments, that initializes a string inside of it's scope and then returns that string.

## The Very Basics 1.3: Operators

The best way to explain operators is to show how they work. The following are what is called **Arithmetic Operators**

```typescript
3 + 3; // + is an operator that takes two arguments on either side of it and returns the result, just like a function. The difference is, that the arguments aren't in parenthesis and they are not comma separated.
// Other examples of operators:
4 * 4; // Multiplication
4 / 4; // Division
5 - 5; // Subtraction
6 % 6; // Modulus, The difference after division.
```

These expression will evaluate to what you would normally expect when doing regular arithmetic on a calculator. The order of operations is normal, however, you can modify it by adding in parenthesis so that the inner most parenthesis will evaluate first:

```typescript
// 4 + 6 will evaluate first
(3 * (4 + 5)) / 8;
```
Now that we know how arithmetic operators work, let's take a look at logical operators. Logical operators work much the same, however, instead of returning a number they return a boolean.
```typescript
// What these mean:
// is the number on the left **greater than** the number on the right?
3 > 4;
// is the number on the left less than the number on the right?
4 < 6;
// is the number on the left greater than or equal to the number on the right?
7 >= 7;
// is the number on the left less than or equal to the number on the right?
8 <= 8;
// are the two numbers equal?
10 == 10;
```
Arithmetic and logical operators don't only work on numbers, they also can work on other data types but they have different rules than what you might expect, whereas the numbers do pretty much what we would expect from math class.
### Operator Exercises 
1. Write an expression to find the sum of 3 numbers.
2. Write an expression to find the average of 10 numbers, (10,15,23,10,8,9,10,5,9,20). Use parenthesis and the order of operations.
3. Find out if a number is even or odd.
```typescript
// The easiest way to use operators to find if a number is even or odd is to use the modulus operator:
let x = 6 % 2; // should equal 0, which means it is even.
let y = 7 % 2; // should equal 1, which means it is odd.
```
## The Very Basics 1.4: Conditionals

Remember from before we wrote something similar to:

```typescript
if (x == 6) {
  console.log(x);
}
```

To break this down to component parts:

1. We have an if **statement**, that is, if is what we might consider a _special_ form, it isn't a function per se, but it takes arguments and has a scope like a function. What it does is take the arguments it is called with and evaluates if they are true or false. If the arguments evaluate to true, the if allows the program to continue to the next inner scope, and then that inner scope also evaluates. If the arguments evaluate to false, the scope is skipped.
2. When we fall outside of the scope we can't use any items declared in that inner if scope, so if we want to do something with a variable in there we need to declare it outside, scope works here just like anywhere else.

```typescript
if (4 == 3) {
  console.log("Wrong");
}
console.log("Right");
//Or if you have a variable or expression that evaluates to a boolean
if (x) {
  console.log("Right");
}
```

Go ahead and try this in your own file, the console should output the word "Right".
That's because the first argument evaluated to false, so we skip the if's scope and move on to the next statement. This statement is also sometimes called an **if then** statement, because if the statement is true, then we can work on the statement in the if's scope.
Next up is the case where we want to run a statement when something is not true.

```typescript
// The operator in typescript for not is !, this simply means the opposite of what you put it in front of, so !true becomes false.
// This is the same as saying (if 3 does not equal 4) then do the following.
if (3 != 4) {
  console.log("Correct");
}
// Or if you have an expression or variable that evaluates to a boolean then you can do the following
if (!x) {
  console.log("Right");
}
```

Because the top and bottom if arguments both evaluate to false, and we are asking for the opposite, we are actually going to get true and it will trigger the inner scope.
Next we will talk about two if options called **else** and **else if**.
Else just means what we want the program to do if the first if condition evaluated to false and it skipped the block, right after that we would write an else to catch that failure and ask the program to execute another statement.

```typescript
if (3 == 4) {
  console.log("wrong");
} else {
  console.log("right");
}
```

In this case, we catch the failure and work into another scope, you can read this as:
"If condition is true, do the following, else the condition is false, do the following."
Next up is the else if option, we use this when we want to evaluate another logical expression if the first one is false.

```typescript
if (3 == 4) {
  console.log("wrong");
} else if (4 == 4) {
  console.log("right");
} else {
  console.log("skip");
}
```

In this case the first conditional if statement will evaluate to false, so we will move onto the next statement which is else if and evaluate this next conditional expression. If this expression isn't true then we move on to the else.
In this case we will "short circuit" at the else if because it is true, had it not been true we would have moved on to the last statement in the if chain, the else.

### Functions and If statements
Many times you will want some sort of function to take some arguments and decide if those arguments evaluate to a certain value, and if so, return true or false. This is called a **predicate**. A predicate is simply a fancy way to say I want a function that returns true or false depending on it's arguments.
```typescript
// isEven is a predicate that takes a number, determines if it is even, and returns true or false based on that information.
function isEven(x: number): boolean {
   if(x % 2 == 0) { // The if arguments here are an expression using the modulus operator we saw above.
       return true; // This will be our exit point from the function because it's a return statement. 
   } 
   // If the answer isn't 0, we will return false.
   return false;
} // End of the scope and back to the global scope.

console.log(isEven(2));
console.log(isEven(3));
```
Go ahead and write that function into your file and compile it. What do you think the output of the first log will be? How about the second? It should return true and then false. Take a moment to consider the function signature of the isEven predicate. We can write it as follows:
> number -> boolean   

That is, we take a number and give back a boolean. You can actually write any functions signature like this to determine what inputs it will need compared to what the output will be. If you are ever confused about what a function does you can take a high level view of first understanding what it's inputs and outputs are.

### Conditional Exercises
1. Create a predicate like above that returns true if a number is odd instead of even. Even numbers input should cause an output of false.
2. Create a predicate to determine if a number is greater than 3.
3. Create a predicate to determine if a number is negative.

## The Very Basics 1.5: Collections 
So far we've covered some of the building blocks of programming but we haven't yet touched one of the most important parts. We would never write a program like this:
```typescript
// Lets say we needed a program that took a variable and added it to itself and returned the value.
let x = 1;
let y = 2;
let z = 3;

let xResult = x + 1;
let yResult = y + 2;
let zResult = z + 3;
```
For one, you'd get a hand cramp writing this, for two it's inefficient. What you'd want to use instead is something called a collection. Collections take many forms, and the one we will talk about right now is called an array. There are also other kinds such as HashMaps, Stacks, LinkedLists, ArrayLists, and more.
Arrays are what we call a **data structure** and the first one we will be talking about.
The basic principle of an array is that it is a collection of cells and you can fill those cells with values just like you would a variable, except that the array is one variable with multiple values.
Let's look at an example:
```typescript
// Supposed we wanted to store grades for an average, we wouldn't want to use a separate variable for each students grade, rather we'd want all of their grades together in one continuous block to work on.
let grades: number[] = [];
// Just like a variable we declare our array, but instead of writing just the type, we need to write [] after the type to let the compiler know this is going to be an array. After that we assign the value of an empty array to it.
// Just as easily we could declare and initialize our array at the same time:
let grades: number[] = [1,2,3,4,5,6];
```
The data in the array at assignment is comma separated and an array can be of any type. Once you declare it of a certain type it will hold values of that type. A string array will hold string, a number array numbers etc.
So we know how to declare and add values to an array, but how do we get the data inside? If you read the array from left to right you can actually count the elements in it. For instance, in our example above, the first element of the array holds the number 1. Arrays are 0 indexed, however, so 1 is actually at element 0. The count of the array is actually 6, but the index range is 0 -> 5.
```typescript
let grades: number[] = [1,2,3,4,5,6];
let tomsGrade: number = grades[1];
// Get the data from a grade by indexing into it using the [] brackets from before. Whatever number you put into the brackets will be the element the array returns for you. If you try to pick an element outside the bounds of the array, in our case 0 -> 5, you will get an error.
```
In your file go ahead and clear everything and try the following
```typescript
let grades: number[] = [1,2,3,4,5,6];
let tomsGrade: number = grades[6];
```
You should get an error that says that the index is outside the bounds of the array. To **debug** this, that is to correct the error, recount your array carefully to determine the bounds. Remember, arrays start with their first element as 0. So an array with 6 elements will count up from 0 to 5, with 5 being the 6th element.

### Array exercises:
1. Create an array of numbers and assign it to a variable called numberList, make sure there are 5 numbers in the array.
2. Assign the 2nd element of numberList to a variable called secondNumber.
3. Print the variable secondNumber to the console.

## 1.6 Loops
Loops are very important to a program because without them your program will run through the code once and then stop. But what if you needed your code to run forever? If it's the code on a server displaying your website you do not want it to stop. That's where loops come in, they are there so that you can write some code and have it execute a set number of times (or forever).

Loops are also very important so that they can be used to cycle through the elements of an array. Consider this lesson and the one before almost the same lesson, because there's a high chance you will be cycling through the data in an array many times.

```typescript
// A loop that will print Hello to the terminal 10 times.
for(let i = 0; i < 10; i++) {
  console.log("Hello");
}
```