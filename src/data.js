import linneaImage from './assets/team-pictures/linnea.png'
import tomasImage from './assets/team-pictures/tomas.jpg'
import sabinaImage from './assets/team-pictures/sabina.jpg'
import maximilianImage from './assets/team-pictures/maxi.jpg'
import kawanImage from './assets/team-pictures/kawium.png'
// place holder is test image
import placeholder from './assets/team-pictures/placeholder.png'


export const skills = {
  html: { name: "HTML", description: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript." },
  css: { name: "CSS", description: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript." },
  react: { name: "React", description: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality." },
  typescript: { name: "TypeScript", description: "TypeScript is a free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript. As it is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.  " },
  javaScript: {name: "Javascript", description:"JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices. JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM)."},
  figma: {name: "Figma", description:"Figma is a free, online UI tool to create, collaborate, prototype, and handoff."},
  p5: {name: "p5", description:"p5.js is a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else."},
  mongodb:{name: "MongoDB", description:"MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL) which is deemed non-free by several distributions."},
  vue:{name:"Vue", description:"Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members."},
  csharp:{name:"C#",description:"C# is a general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines."},
  wordpress:{name:"WordPress",description:"WordPress is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database with supported HTTPS. Features include a plugin architecture and a template system, referred to within WordPress as Themes."},
  photoshop:{name:"Adobe Photoshop", description:"Photoshop is an image creation, graphic design and photo editing software developed by Adobe. The software provides many image editing features for pixel-based images, raster graphics and vector graphics."},
  next:{name:"Next",description:"Next.js is an open-source web development framework built on top of Node.js enabling React-based web applications functionalities such as server-side rendering and generating static websites."},
  svelte:{name:"Svelte", description:"Svelte is a free and open-source front end compiler created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance; application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e in the browser. The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub."},
  express:{name:"Express", description:"Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."},
  node:{name:"NodeJS", description:"Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser, which was designed to build scalable network applications. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a 'JavaScript everywhere' paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts."},
  mongoose:{name:"Mongoose", description:"Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment. Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box."},
  socketIO:{name:"SocketIO", description:"Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server. It is built on top of the WebSocket protocol and provides additional guarantees like fallback to HTTP long-polling or automatic reconnection."}
}

export const projects = {
  TierCopy: { image: placeholder, link: "https://github.com/sabinaander/tier-copy"},
  Woodlands: { image: placeholder, link: "https://github.com/sabinaander/woodlands"},
  KawanCV: { image: kawanImage, link: "https://github.com/Kawium/kawiumdev"},
  MaximilianCV: { image: placeholder, link: "https://github.com/PettoDavida/Widman-CV"},
  LinneaCV: { image: placeholder, link: "https://github.com/liinneea-a/PORTFOLIO"},
  TomasJobListing: { image: placeholder, link: "https://github.com/spaceflake/job-listings-app"},
  SabinaCalculator: { image: placeholder, link: "https://github.com/sabinaander/change-calculator"},
  TomasChatUp: { image: placeholder, link: "https://github.com/spaceflake/socket-chatt"},
  MaximilianWeatherApp: { image: placeholder, link: "https://github.com/PettoDavida/typescript-miniprojekt"},
}

export const team = [
  {
    firstname: 'Linnea',
    lastname: 'Albertsson',
    image: linneaImage,
    role: 'Front-end developer',
    skills: [skills.html, skills.css, skills.react, skills.javaScript, skills.typescript, skills.figma, skills.p5, skills.mongodb, skills.vue],
    contact: { email: 'linnea.albertsson.@gmail.com' },
    presentation:' I am 25 years old and currently living in Gothenburg, Sweden.I am passionate about creating and finding new cool ways to do so.For a long time, my base has been on stage or in front of a camera, acting and singing(I am a huge fan of musicals). But have been doing that for a few years I wanted to try something new. Something that would stimulate my desire for both problem solving and being creative at the same time. And now I am here.Creating interactive and functional stuff with code with a beautiful combination of design, logic and intuition has gotten me completely hooked.'
      ,
  },
  {
    firstname: 'Sabina',
    lastname: 'Andersson',
    image: sabinaImage,
    role: 'Front-end developer',
    skills: [skills.html, skills.css, skills.csharp,  skills.React, skills.javaScript, skills.Typescript, skills.figma, skills.p5, skills.mongodb, skills.vue, skills.wordpress, skills.photoshop],
    contact: { email: 'sabinaander@hotmail.com' },
    presentation:
      'I am 30 years old and a student at Medieinstitutet Gothenburg studying the field of Front End Web Development. I am expected to finish my studies in June 2023 with a total of 2 LIA periods in Autumn 2022 and Spring 2023. I am Swedish and live in the heart of Gothenburg, Majorna, with my partner and 2 cats. In my spare time my main interests are gaming, twitch streaming, mountain biking, beer (I attend lots of festivals, obscure beer gatherings and sometimes brew my own beer), photography, coding and digital work.',
  },
  {
    firstname: 'Tomas',
    lastname: 'Andersson',
    image: tomasImage,
    role: 'Front-end developer',
    skills: [skills.html, skills.css, skills.javaScript, skills.typescript, skills.figma, skills.react, skills.next, skills.p5, skills.mongodb, skills.svelte],
    contact: { email: 'linnea.albertsson.@gmail.com' },
    presentation:
      'I started learning web development on my own, while I was working a full-time job at a retailer. After a while, I fell in love with it. I love to learn new things and there is no end to what you can learn in web development it seems. LOVE IT! In 2021 I made the move to study at a school, MedieInstitutet, full-time to develop my skills further. I was born and raised in Helsingborg, Sweden. But since 2010 I live in Gothenburg. I have moved around a lot in my life. I lived in Gran Canaria for five years in my early twenties. It is great to meet people from different cultures and learn new languages. Other than my native language, Swedish, I speak German and some Spanish. Now it is time to learn all the programming languages. Some interests I have includes gaming, working out at the gym and learning new things. I love tech and like to keep up with the latest and greatest.',
  },
  {
    firstname: 'Maximilian',
    lastname: 'Widman',
    image: maximilianImage,
    role: 'Front-end developer',
    skills: [skills.html, skills.css, skills.javaScript, skills.figma, skills.p5, skills.mongodb, skills.react, skills.typescript],
    contact: { email: 'maximilian.widman@gmail.com' },
    presentation:
      'I am 21 years old and studying Front End Web Development at the school of Medieinstitutet in Gothenburg, Sweden. In my spare time, I have a passion for gaming (some genres include fps, MOBA, MMORPG and sandbox) and watching animated series or movies.',
  },
  {
    firstname: 'Kawan',
    lastname: 'Majeed',
    image: kawanImage,
    role: 'Front-end developer',
    skills: [skills.html, skills.css, skills.javaScript, skills.typescript, skills.figma, skills.react, skills.mongodb],
    contact: { email: 'hello@kawium.dev'},
    presentation:
      'My name is Kawan Majeed and I study front-end development at the MedieInstitutet in Gothenburg. I have good knowledge in HTML, CSS (Tailwind CSS) and Javascript, also know React.js (it is easy for me to learn new technologies, so if other frameworks are used, it is nothing I can not learn). In my free time, I like gaming for fps games, coding, and watching Netflix with my cat.',
  }
];


