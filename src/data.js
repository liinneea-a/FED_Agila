const skills = {
  html: { name: "HTML", description: "Lorem ipsum dolor sit amet" },
  css: { name: "CSS", description: "Lorem ipsum dolor sit amet" },
  react: { name: "React", description: "Lorem ipsum dolor sit amet" },
  typescript: { name: "TypeScript", description: "Lorem ipsum dolor sit amet" },
  javaScript: {name: "Javascript", description:""},
  figma: {name: "Figma", description:""},
  p5: {name: "p5", description:""},
  mongodb:{name: "MongoDB", description:""},
  vue:{name:"Vue", description:""},
  csharp:{name:"C#",description:""},
  wordpress:{name:"WordPress",description:""},
  photoshop:{name:"Adobe Photoshop", description:""},
  next:{name:"Next",description:""},
  svelte:{name:"Svelte", description:""}
}

const team = [
  {
    firstname: 'Linnea',
    lastname: 'Albertsson',
    image: './assets/team-pictures/linnea.png',
    role: 'Front-end developer',
    skills: [skills.html, skills.css, skills.react, skills.javaScript, skills.typescript, skills.figma, skills.p5, skills.mongodb, skills.vue],
    contact: { email: 'linnea.albertsson.@gmail.com', phone: 0701234567 },
    presentation:' I am 25 years old and currently living in Gothenburg, Sweden.I am passionate about creating and finding new cool ways to do so.For a long time, my base has been on stage or in front of a camera, acting and singing(I am a huge fan of musicals). But have been doing that for a few years I wanted to try something new. Something that would stimulate my desire for both problem solving and being creative at the same time. And now I am here.Creating interactive and functional stuff with code with a beautiful combination of design, logic and intuition has gotten me completely hooked.'
      ,
  },
  {
    firstname: 'Sabina',
    lastname: 'Andersson',
    image: './assets/team-pictures/sabina.jpg',
    role: 'Front-end developer',
    skills: [skills.html, skills.css, skills.csharp,  skills.React, skills.javaScript, skills.Typescript, skills.figma, skills.p5, skills.mongodb, skills.vue, skills.wordpress, skills.photoshop],
    contact: { email: 'sabinaander@hotmail.com', phone: 0701234567 },
    presentation:
      'I am 30 years old and a student at Medieinstitutet Gothenburg studying the field of Front End Web Development. I am expected to finish my studies in June 2023 with a total of 2 LIA periods in Autumn 2022 and Spring 2023. I am Swedish and live in the heart of Gothenburg, Majorna, with my partner and 2 cats. In my spare time my main interests are gaming, twitch streaming, mountain biking, beer (I attend lots of festivals, obscure beer gatherings and sometimes brew my own beer), photography, coding and digital work.',
  },
  {
    firstname: 'Tomas',
    lastname: 'Andersson',
    image: './assets/team-pictures/tomas.jpg',
    role: 'Front-end developer',
    skills: [skills.html, skills.css, skills.javaScript, skills.typescript, skills.figma, skills.react, skills.next, skills.p5, skills.mongodb, skills.svelte],
    contact: { email: 'linnea.albertsson.@gmail.com', phone: 0701234567 },
    presentation:
      'I started learning web development on my own, while I was working a full-time job at a retailer. After a while, I fell in love with it. I love to learn new things and there is no end to what you can learn in web development it seems. LOVE IT! In 2021 I made the move to study at a school, MedieInstitutet, full-time to develop my skills further. I was born and raised in Helsingborg, Sweden. But since 2010 I live in Gothenburg. I have moved around a lot in my life. I lived in Gran Canaria for five years in my early twenties. It is great to meet people from different cultures and learn new languages. Other than my native language, Swedish, I speak German and some Spanish. Now it is time to learn all the programming languages. Some interests I have includes gaming, working out at the gym and learning new things. I love tech and like to keep up with the latest and greatest.',
  },
  {
    firstname: 'Maximilian',
    lastname: 'Widman',
    image: './assets/team-pictures/placeholder.png',
    role: 'Front-end developer',
    skills: [skills.html, skills.css, skills.javaScript, skills.figma, skills.p5, skills.mongodb, skills.react, skills.typescript],
    contact: { email: 'maximilian.widman@gmail.com', phone: 0701234567 },
    presentation:
      'I am 21 years old and studying Front End Web Development at the school of Medieinstitutet in Gothenburg, Sweden. In my spare time, I have a passion for gaming (some genres include fps, MOBA, MMORPG and sandbox) and watching animated series or movies.',
  },
  {
    firstname: 'Kawan',
    lastname: 'Majeed',
    image: './assets/team-pictures/placeholder.png',
    role: 'Front-end developer',
    skills: [skills.html, skills.css, skills.javaScript, skills.typescript, skills.figma, skills.react, skills.mongodb],
    contact: { email: 'hello@kawium.dev', phone: 0701234567 },
    presentation:
      'My name is Kawan Majeed and I study front-end development at the MedieInstitutet in Gothenburg. I have good knowledge in HTML, CSS (Tailwind CSS) and Javascript, also know React.js (it is easy for me to learn new technologies, so if other frameworks are used, it is nothing I can not learn). In my free time, I like gaming for fps games, coding, and watching Netflix with my cat.',
  }
];


