# Programming 101

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

Incorrect myth:   
Programmers are geniuses that are good at programming because they are so smart.   
Fact:   
Although there are plenty of genius programmers, you don't have to be a genius to program.    

### Dive in
Important terminology:   
> **Scope** the area that certain elements live in. Think of a nested doll, the doll on the inside can't escape to the outside. Scope works the same way, the inner scope cannot escape to the outside scope.   
> **Variable** a symbol that is a reference to a value.   
> **Declaration** the act of telling the compiler to treat a symbol as a variable.   
> **Initialization** the act of assigning a value to a variable.

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
## The Very Basics 
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
As you can see here, once we assigned to x we were able to log x to the console. Console.log didn't print the symbol x, it printed the value that x is a reference to. We could say that x resolves to 6.
Go into your file and add the following:
```typescript
let y;
console.log(y);
```
You should receive _undefined_ in your terminal. This is telling you that the symbol doesn't resolve to anything, because you didn't assign anything to it. If you don't assign a value to a variable it is _undefined_. 






