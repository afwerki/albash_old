import React from 'react'
import support from '../assets/cyber-bg.png'
import {FaInstagram} from 'react-icons/fa'
const people = [
    {
      name: 'Peter',
      role: 'Co-Founder / CEO',
      imageUrl:'../assets/cyber-bg.png',
    },
    {
        name: 'Pomi',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Afe',
        role: 'role',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Afe',
        role: 'role',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    // More people...
  ]
const About = () => {
    return (
        <div className="about bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Dear new members,

Welcome to our association, where our primary aim is to extend a helping hand to those in need. 

Together, we function as a close-knit family, pooling our resources to make a positive impact.

Our mission revolves around spreading joy through assistance, emphasizing the happiness derived from aiding others. 

Previously, we focused on collecting and sending clothes to Ethiopia, directly contributing to alleviating poverty.

Adapting to challenges, we've shifted our focus to providing learning materials for children, overcoming obstacles and refining our approach based on past experiences.

Moving forward, our collective vision includes:

1. Expanding the association's reach and ensuring the sustainability of our projects.

2. Thoroughly researching and strategically choosing locations within our country where assistance is most needed.

3. Granting our members the flexibility to decide on contributing through direct debit or one-off payments.

4. Establishing a transparent online platform, a website, to document each project.

5. Seeking input from our members for potential additional events and initiatives.

If you have any questions, suggestions, or need clarification, feel free to reach out to me directly or share your thoughts with the group.

Together, let's make a meaningful impact!
              </p>
            </div>
            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                    </div>
                    <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
         
            <FaInstagram />
            </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
}

export default About