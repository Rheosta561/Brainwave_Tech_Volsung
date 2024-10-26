import React from 'react'
import Ayushi from './Ayushi'
import Footer from './Footer'
import Mh from './mh1.png'
function About() {
  return (
    <div>
      <div className=''>
        <Ayushi/>
        <div className='border h-fit p-4 mt-14 w-2/3 mx-auto rounded-lg shadow-md bg-cyan-100 text- font-semibold'>Imagine an empathetic AI companion that truly understands you. This generative AI-powered chatbot detects minor to medium mental health concerns based on your words and facial expressions. It's not just a cold, analytical machine; it listens, comprehends, and provides personalized solutions tailored just for you. Picture it as a non-judgmental confidant, offering a safe space to pour your heart out, much like writing in a diary but with feedback and guidance. This platform aims to help you navigate your emotions and challenges, offering support that's both compassionate and intelligent, allowing you to achieve mental well-being without feeling judged or misunderstood. It's like having a caring friend who always knows exactly how to help.</div>



      </div>
      <br />
      <br />
      <div className=' h-60'>
        <div className='mx-auto h-full w-60 rounded-full border'>
          <img src={Mh} alt=""  className='scale-150'/>
        </div>

      </div>
      <div className='border h-fit p-4 -mt-16 bg-violet-100 mx-auto w-3/4 rounded lg shadow-md' >
          <div className='h-12 bg-emerald-50 rounded-lg text-xl pt-3 font-bold text-center mb-4'>
            Why Mental Health is An Important Concern
          </div>
          <div className='text-sm font-semibold'>Mental health is crucial to our overall well-being, affecting how we think, feel, and act in daily life. It plays a significant role in managing stress, making decisions, and building healthy relationships. Good mental health fosters resilience, enabling us to cope with life’s challenges and recover from setbacks. Conversely, mental health struggles, such as anxiety, depression, or chronic stress, can impact our physical health, sleep, productivity, and relationships, often leading to a cycle of negative outcomes.

Focusing on mental health helps reduce stigma, allowing people to seek support without fear or shame. Regular mental health check-ins, therapy, mindfulness practices, and social support are essential tools for maintaining emotional stability. Mental health care is as important as physical health care; without it, even daily tasks may feel insurmountable.

By valuing mental well-being, societies can promote healthier lifestyles, improve productivity, and foster more supportive communities. When mental health is prioritized, individuals are better equipped to fulfill their potential, nurture positive connections, and contribute meaningfully to their environments. Investing in mental health is thus an investment in a brighter, more balanced, and compassionate world.</div>
      </div>
      <br />
      <br />
      <div className=' h-60'>
        <div className='mx-auto h-full w-60 rounded-full border'>
          <img src="https://img.freepik.com/free-vector/mental-health-awareness-concept_23-2148514643.jpg?uid=R156956613&ga=GA1.1.1904776371.1723148990&semt=ais_hybrid" alt=""  className='rounded-full h-full w-full '/>
        </div>
        <div className='border h-fit p-4 mt-4 bg-violet-100 mx-auto w-3/4 rounded lg shadow-md ' >
          <div className='h-12 bg-emerald-50 rounded-lg text-xl pt-3 font-bold text-center mb-4'>
            Mental Health Awareness
          </div>
          <div className='text-sm font-semibold'>
          Mental health awareness is essential in promoting understanding, reducing stigma, and encouraging open conversations about mental well-being. It helps people recognize the signs of mental health challenges and know when to seek support, fostering a compassionate environment where individuals feel safe discussing their struggles. Awareness also promotes early intervention, which can prevent more serious issues from developing. Through education, advocacy, and support, mental health awareness encourages healthier communities and empowers individuals to prioritize their mental health, just as they would their physical health. Ultimately, raising awareness can lead to a more empathetic, resilient, and connected society.
          </div>
      </div>

      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <Footer/>

    </div>
  )
}

export default About