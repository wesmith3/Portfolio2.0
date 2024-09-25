import React from 'react';

function About() {
  return (
    <div className='py-20' id="about">
      <h1 className='heading mb-20'>
        About {' '}
        <span className='text-orange font-mono'>ME</span>
      </h1>
      <div className='items-center text-2xl'>
        <p className='mt-5'>
          I&apos;m Wesley, a <span className='text-orange font-bold'>Full Stack Developer</span> with expertise in <span className='text-orange font-bold'>TypeScript</span>, <span className='text-orange font-bold'>React</span>, <span className='text-orange font-bold'>Node.js</span>, <span className='text-orange font-bold'>MongoDB</span>, & <span className='text-orange font-bold'>AWS</span> including frameworks like <span className='text-orange font-bold'>Next.js</span> and <span className='text-orange font-bold'>Express</span>.
        </p>
        <p className='mt-5'>
          My background in <span className='text-orange font-bold'>automotive</span> and <span className='text-orange font-bold'>hospitality</span> industries has honed my soft skills:
        </p>
        <ul className='list-disc list-inside mt-2 ml-5'>
          <li><span className='text-orange font-bold'>Communication</span></li>
          <li><span className='text-orange font-bold'>Time management</span></li>
          <li><span className='text-orange font-bold'>Teamwork</span></li>
          <li><span className='text-orange font-bold'>Critical thinking</span></li>
          <li><span className='text-orange font-bold'>Technical translation</span></li>
        </ul>
        <p className='mt-5'>
          Combining <span className='text-orange font-bold'>technical prowess</span> with strong <span className='text-orange font-bold'>interpersonal abilities</span>, I&apos;m eager to contribute my <span className='text-orange font-bold'>diverse skill set</span> to your development team. Let&apos;s connect and discuss how I can add value to your projects!
        </p>
      </div>
    </div>
  );
}

export default About;