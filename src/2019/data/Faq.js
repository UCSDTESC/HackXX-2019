import React from 'react';

const faq = [
    {
        question: `What's a Hackathon?`,
        answer: "A hackathon is an technology-focused, design sprint-like event during which participants create new projects in a short amount of time. Participants may work individually or in teams, and you can create any type of project that you would like! "
    },
    {
        question: `Do I need to have a project idea?`,
        answer: `You do not have to have a project idea beforehand, you can brainstorm and get inspiration during the event! We will also hold technical workshops to give you a starting point!`
    },
    {
        question: `Why are you hosting HackXX?`,
        answer: (
            <div>
                There is currently a huge gender disparity within the realm of tech and engineering. At most hackathons, women make up only 20% of the total participants, and only 24% of professional computer scientists are women. This gender gap has actually been growing since the 1980’s, and this needs to change. We believe that HackXX is a step towards achieving better gender representation in the tech space.
                
                <div className="mt-3">
                    <div>
                        <a target="_blank" href="https://medium.com/ladies-storm-hackathons/the-gender-gap-as-told-by-data-71dfce420519" className="text-info">
                            Ladies Storm Hackathons - The Gender Gap, As Told by Data
                        </a>
                    </div>
                    <div className="mt-2">
                        <a target="_blank" href="https://fairygodboss.com/articles/women-in-tech-facts-figures-and-percentages" className="text-info">
                            Fairygodboss - Women In Tech: Facts, Figures And Percentages
                        </a>
                    </div>
                    <div className="mt-2">
                        <a target="_blank" href="https://girlswhocode.com/about-us/ " className="text-info">
                            Girls Who Code
                        </a>
                    </div>

                </div>    
            </div>)
    },
    {
        question: `Who can go to HackXX?`,
        answer: 'All highschool students and college/university students over 18 of any and all gender identities are welcome to attend.'
    },  
    {
        question: 'How long is HackXX?',
        answer: 'The hacking period is 24 hours long.'
    },
    /*{
        question: 'Will there be travel reimbursement?',
        answer: 'We will not be reimbursing travel costs exceeding $50. This cap is intended to cover the cost of local travel. A form will be sent to attendees after the event for requesting reimbursement.'
    },*/
    {
        question: 'I’m not a CS major. Can I still go?',
        answer: 'Yes! We welcome students of all majors and backgrounds.'
    },
    {
        question: `Will there be food?`,
        answer: `Yes! We will provide meals for all hackers as well as snacks throughout the length of the event.`
    },  
    {
        question: 'What is the maximum team size?',
        answer: 'You may hack in teams of up to four. Make sure everyone on the team registers on this website!'
    },
    {
        question: `What if I don't have a team?`,
        answer: 'We will facilitate a team mixer at the beginning of the hackathon for you to find team members! However, if you know you want to hack alone, you are more than welcome to do so.'
    }, 
    {
        question: `Is there a Code of Conduct?`,
        answer: (
            <div>
                Yes! HackXX follows the <a target="_blank" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code Of Conduct</a>
            </div>
        )
    },
    {
        question: `Do you have travel reimbursements?`,
        answer: 'Yes! Once you are accepted, we will send you a form for applying for a travel reimbursement.'
    }
]

export default faq;
