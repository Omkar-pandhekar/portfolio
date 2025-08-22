export interface BlogPost {
  id: number;
  title: string;
  category:
    | "Web Development"
    | "Software Engineering"
    | "DSA"
    | "Cloud & DevOps"
    | "AI";
  description: string;
  content: string; // Content is in Markdown format
  date: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "React Hooks: Simplifying State and Side Effects",
    category: "Web Development",
    description:
      "Learn how React Hooks revolutionized functional components by providing state management and side effects capabilities.",
    content: `## React Hooks: Simplifying State and Side Effects ⚛️

Before Hooks, managing state and lifecycle events in React functional components was impossible. We had to rely on Class Components, which could be verbose. Enter **Hooks**! They let you "hook into" React features from function components.

### The \`useState\` Hook

The \`useState\` hook is the most common hook and is used to add state to a component. It returns an array with two elements: the current state value and a function to update it.

\`\`\`javascript
import React from 'react';

function Counter() {
  // Declares a new state variable called "count"
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

### The \`useEffect\` Hook

What about fetching data or setting up a subscription? The \`useEffect\` hook handles side effects. It runs after every render, or you can specify it to run only when certain values change.

\`\`\`javascript
import React from 'react';

function UserGreeting({ userId }) {
  const [userName, setUserName] = React.useState('');

  // This effect runs when the component mounts and whenever 'userId' changes
  React.useEffect(() => {
    fetch(\`https://api.example.com/users/\${userId}\`)
      .then(response => response.json())
      .then(data => setUserName(data.name));
  }, [userId]); // The dependency array

  return <p>Hello, {userName}!</p>;
}
\`\`\`

Hooks like \`useState\` and \`useEffect\` make component logic cleaner, more reusable, and easier to understand by grouping related logic together.`,
    date: "December 15, 2024",
    readTime: "5 min read",
    tags: ["React", "Hooks", "JavaScript", "Frontend"],
  },
  {
    id: 2,
    title: "The Art of the Code Review",
    category: "Software Engineering",
    description:
      "Discover the benefits and best practices of code reviews in software development teams.",
    content: `## The Art of the Code Review: More Than Just Finding Bugs 🧐

A code review is a systematic examination of source code by peers. While its most obvious goal is to find defects, a good code review process offers so much more. It's a cornerstone of a healthy engineering culture.

### Key Benefits

* **Improved Code Quality**: The most apparent benefit. Fewer bugs make it into production.
* **Knowledge Sharing**: When you review someone's code, you learn about parts of the codebase you might not otherwise see. It's also a great way for junior developers to learn from seniors.
* **Enforcing Standards**: Reviews ensure that the code adheres to agreed-upon style guides and best practices, leading to a more consistent and maintainable codebase.
* **Mentorship Opportunity**: Providing constructive, kind feedback is a form of mentorship. Explaining *why* a certain approach is better helps developers grow.

### Tips for a Great Review

1.  **Be Kind and Constructive**: Start with positive comments. Instead of saying "This is wrong," try "What do you think about trying this alternative approach? It might handle X edge case better."
2.  **Automate the Small Stuff**: Use linters and formatters to automatically check for style issues. Save human time for reviewing logic and architecture.
3.  **Keep Pull Requests Small**: Reviewing a 50-line PR is much easier and more effective than reviewing a 1000-line monster.

Code reviews aren't about judging people; they're about collectively raising the quality of the product and the skills of the team.`,
    date: "December 10, 2024",
    readTime: "4 min read",
    tags: ["Code Review", "Best Practices", "Team Work"],
  },
  {
    id: 3,
    title: "REST vs. GraphQL: A Tale of Two APIs",
    category: "Software Engineering",
    description:
      "Compare REST and GraphQL APIs to understand when to use each approach for your projects.",
    content: `## REST vs. GraphQL: A Tale of Two APIs 📡

When building applications, the client (e.g., a web browser) needs to talk to the server to get data. For years, **REST** (Representational State Transfer) has been the standard for designing these APIs. However, **GraphQL** has emerged as a powerful alternative.

### The RESTful Way

REST is an architectural style that uses a predefined set of stateless operations (GET, POST, PUT, DELETE). You access different "resources" via unique URLs (endpoints).

* **Example**: To get a user and their posts, you might make two requests:
    1.  \`GET /api/users/1\` — to get the user's details.
    2.  \`GET /api/users/1/posts\` — to get their posts.

The main problem here is **over-fetching** or **under-fetching**. The \`users\` endpoint might return a lot of data you don't need, and you have to make multiple requests to get related data.

### The GraphQL Way

GraphQL is a query language for your API. Instead of multiple endpoints, you typically have a single endpoint. The client sends a "query" specifying exactly what data it needs.

* **Example**: To get a user and their post titles in one go:

\`\`\`graphql
query {
  user(id: "1") {
    name
    email
    posts {
      title
    }
  }
}
\`\`\`

The server responds with a JSON object that precisely matches the query's structure. This solves the over/under-fetching problem and reduces the number of network requests.

### Which One to Choose?

* **REST** is great for simple APIs, is widely understood, and leverages HTTP caching effectively.
* **GraphQL** shines in complex applications with many related data types (like social networks or e-commerce sites) where mobile clients need to be efficient with data.`,
    date: "December 5, 2024",
    readTime: "6 min read",
    tags: ["API", "REST", "GraphQL", "Backend"],
  },
  {
    id: 4,
    title: "Java DSA: Understanding Stacks and Queues",
    category: "DSA",
    description:
      "Master the fundamental data structures of stacks and queues with practical Java examples.",
    content: `## Java DSA: Understanding Stacks and Queues 🥞

Stacks and Queues are fundamental linear data structures. The main difference between them is how they handle the addition and removal of elements.

### Stacks: Last-In, First-Out (LIFO)

Think of a stack of plates. You add a new plate to the top, and you also remove a plate from the top. The last plate you put on is the first one you take off. This is the **LIFO** principle.

* **\`push()\`**: Adds an item to the top of the stack.
* **\`pop()\`**: Removes and returns the item from the top of the stack.

In Java, you can easily use the \`Stack\` class.

\`\`\`java
import java.util.Stack;

class StackExample {
    public static void main(String[] args) {
        Stack<String> browserHistory = new Stack<>();

        browserHistory.push("google.com");
        browserHistory.push("github.com");
        browserHistory.push("my-portfolio.dev");

        System.out.println("Current Page: " + browserHistory.peek()); // my-portfolio.dev
        
        String lastPage = browserHistory.pop(); // Removes my-portfolio.dev
        System.out.println("Pressed Back. Now at: " + lastPage); // Pressed Back. Now at: my-portfolio.dev
        System.out.println("Current Page: " + browserHistory.peek()); // github.com
    }
}
\`\`\`
*Use cases: Function call stacks, undo/redo features, parsing expressions.*

### Queues: First-In, First-Out (FIFO)

Think of a checkout line at a store. The first person to get in line is the first person to be served. This is the **FIFO** principle.

* **\`add()\` or \`offer()\`**: Adds an item to the end of the queue.
* **\`remove()\` or \`poll()\`**: Removes and returns the item from the front of the queue.

In Java, \`Queue\` is an interface, often implemented with a \`LinkedList\`.

\`\`\`java
import java.util.Queue;
import java.util.LinkedList;

class QueueExample {
    public static void main(String[] args) {
        Queue<String> printerQueue = new LinkedList<>();

        printerQueue.offer("Document1.pdf");
        printerQueue.offer("Image.png");
        printerQueue.offer("Report.docx");

        System.out.println("Printing: " + printerQueue.poll()); // Printing: Document1.pdf
        System.out.println("Next in queue: " + printerQueue.peek()); // Next in queue: Image.png
    }
}
\`\`\`
*Use cases: Task scheduling, printer queues, breadth-first search algorithms.*`,
    date: "November 30, 2024",
    readTime: "7 min read",
    tags: ["Java", "DSA", "Data Structures", "Algorithms"],
  },
  {
    id: 5,
    title: "What is Docker? An Analogy for Beginners",
    category: "Cloud & DevOps",
    description:
      "Understand Docker containers through a simple shipping container analogy.",
    content: `## What is Docker? An Analogy for Beginners 🐳

You've probably heard the classic developer excuse: "But it works on my machine!" This problem arises because the developer's computer has a different setup (OS, libraries, environment variables) than the production server.

**Docker** solves this problem elegantly.

### The Shipping Container Analogy

Imagine you are a manufacturer in the 1800s. You build pianos. To ship one, you need a special crate, specific padding, and instructions for the handlers. If you then want to ship a car, you need a completely different process. It's complicated and error-prone.

Now, imagine the modern shipping container. It's a standardized metal box. It doesn't matter if you put a piano, a car, or bananas inside. The box can be loaded, stacked, and transported by any ship, train, or truck in the world that is equipped to handle these standard containers.

**Docker is the shipping container for your software.**

A **Docker Container** is a standardized package that bundles your application's code with all its dependencies—libraries, frameworks, and runtime environments. This container can then run on *any* machine that has Docker installed, regardless of its underlying operating system or configuration.

* **Dockerfile**: This is the blueprint, like the instructions for what to pack inside the container.
* **Docker Image**: This is the template created from the Dockerfile, like a packed, sealed container ready to be shipped.
* **Docker Container**: This is a running instance of an image. You can have many containers running from the same image.

By "containerizing" your application, you guarantee that it will behave the same way in development, testing, and production. It eliminates the "it works on my machine" problem once and for all.`,
    date: "November 25, 2024",
    readTime: "4 min read",
    tags: ["Docker", "DevOps", "Containers", "Deployment"],
  },
  {
    id: 6,
    title: "CSS Layouts: Flexbox vs. Grid",
    category: "Web Development",
    description:
      "Learn when to use Flexbox and Grid for creating modern CSS layouts.",
    content: `## CSS Layouts: Flexbox vs. Grid 🎨

For a long time, creating complex web layouts in CSS was a challenge. We used hacks like floats and table-based layouts. Today, we have two powerful, native systems for layout: **Flexbox** and **Grid**. The key is knowing when to use each.

### Flexbox: The One-Dimensional Champion

Think of Flexbox as being for **one-dimensional** layouts. It's designed to arrange items in a single row or a single column and give you incredible control over their alignment and spacing.

* **Analogy**: Organizing books on a single bookshelf. You can decide if the books should start from the left, center, or right. You can space them out evenly or bunch them up. You are working along one axis: the shelf itself.

**Use Flexbox for:**
* Navigation bars
* Aligning items within a card component (e.g., an icon and text)
* Centering a single item within a container

### Grid: The Two-Dimensional Master

Think of Grid as being for **two-dimensional** layouts. It's designed for arranging items in both rows AND columns simultaneously.

* **Analogy**: Laying out a newspaper page. You have a grid structure and can place the headline in a wide column at the top, an image spanning two columns, and article text in three columns below it. You have precise control over both the horizontal and vertical axes.

**Use Grid for:**
* Overall page layout (header, sidebar, main content, footer)
* Complex, asymmetrical layouts
* Photo galleries

### The Golden Rule

A simple way to remember:
* **Flexbox** for aligning content along a single line.
* **Grid** for the overall layout of the page.

The best part? They are not mutually exclusive! It's very common to use Grid for the main page structure and then use Flexbox to align the items inside each grid area.`,
    date: "November 20, 2024",
    readTime: "5 min read",
    tags: ["CSS", "Flexbox", "Grid", "Frontend"],
  },
  {
    id: 7,
    title: "The Rise of Meta-Frameworks",
    category: "Web Development",
    description:
      "Explore why meta-frameworks like Next.js are becoming essential for modern web development.",
    content: `## The Rise of Meta-Frameworks: Why We Need More Than Just React

Frameworks like React, Vue, and Svelte are fantastic for building user interfaces. They provide a component-based architecture that makes managing complex UIs a breeze. However, on their own, they are just **UI libraries**.

When you build a full application, you need more than just UI components. You need to handle:
* Routing (navigating between pages)
* Data fetching
* Server-Side Rendering (SSR) or Static Site Generation (SSG) for performance and SEO
* Code-splitting
* Image optimization

This is where **meta-frameworks** come in. They are frameworks built *on top* of UI libraries like React to provide these production-ready features out of the box.

### Popular Examples

* **Next.js** (for React): The most popular meta-framework. It offers flexible rendering strategies (SSR, SSG, ISR), file-based routing, and API routes.
* **Nuxt** (for Vue): Provides a similar feature set to Next.js but for the Vue ecosystem.
* **SvelteKit** (for Svelte): A full-stack framework that embraces server components and provides a seamless development experience.
* **Remix** (for React): Focuses on web fundamentals, with powerful data loading and mutation patterns that integrate deeply with routing.

### Why Use One?

Using a meta-framework saves you an enormous amount of time and effort in configuration. Instead of manually setting up a router, a server, and build tooling, you get a cohesive, opinionated system that is optimized for performance and developer experience. They provide a solid foundation, letting you focus on what makes your application unique.`,
    date: "November 15, 2024",
    readTime: "6 min read",
    tags: ["Next.js", "Meta-Frameworks", "React", "Web Development"],
  },
  {
    id: 8,
    title: "What is a Large Language Model (LLM)?",
    category: "AI",
    description:
      "Understand how Large Language Models work and their applications in modern AI systems.",
    content: `## What is a Large Language Model (LLM)? A Simple Explanation 🤖

You've seen them everywhere: ChatGPT, Gemini, Copilot. These are all powered by **Large Language Models (LLMs)**. But what exactly are they?

At its core, an LLM is a very sophisticated **text prediction engine**.

### The Core Idea: Predicting the Next Word

Imagine the autocomplete on your phone's keyboard. When you type "The weather today is...", it might suggest "sunny," "cloudy," or "going." It does this based on patterns it has learned from countless sentences.

An LLM does the exact same thing, but on a mind-bogglingly massive scale. It has been trained on a huge portion of the text available on the internet—books, articles, websites, code, and more.

* It's "Large" because it has billions (or even trillions) of internal parameters, which are like tiny knobs that get tuned during the training process to capture the patterns of human language.
* It's a "Language Model" because its fundamental job is to model the statistical relationships between words and phrases.

### How Does It Work?

When you give an LLM a prompt (e.g., "Write a short story about a robot who discovers music"), it starts by generating the most probable first word. Then, it looks at your prompt *and* that first word to predict the most probable second word. It repeats this process, word by word, generating text that is coherent, contextually relevant, and often surprisingly creative.

This simple "next-word prediction" capability, when scaled up, allows LLMs to:
* Answer questions
* Summarize long documents
* Translate languages
* Write code
* Create poetry and stories

They aren't "thinking" in the human sense. Rather, they are expert pattern matchers, reassembling and generating text based on the statistical patterns they learned during their extensive training.`,
    date: "November 10, 2024",
    readTime: "5 min read",
    tags: ["AI", "LLM", "Machine Learning", "ChatGPT"],
  },
];
