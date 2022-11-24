import React, { createContext, useEffect, useState } from "react";

export const ClubContext = createContext(null)

export const ClubContextProvider = (props) => {

  const [leagues, setLeagues] = useState({})
  const [clubs, setClubs] = useState({})

  useEffect(() => {

    let nextClubs = [
      {
        name: 'Boston Bears',
        id: 1,
        leagueId: 1,
        location: {
          address: '289 brondby ave',
          city: 'Boston',
          state: 'MA',
          country: 'United States',
          zipcode: '01672',
        },
        events: [
          {
            date: '12/25/2023',
            startTime: '15:00',
            endTime: '18:00',
            title: 'Tryout 1',
            description: 'the first of 2 tryouts to be held at Abington High School'
          }
        ],
        contacts: [
          {
            firstName: 'Leon',
            lastName: 'Djusberg',
            email: 'leondjust@me.com',
            title: 'Manager and Owner',
            isAdmin: true,
          }
        ]
      }
    ]

    let nextLeagues = [
      {
        name: 'National Amateur League',
        id: 1,
        location: {
          address: '289 brondby ave',
          city: 'Boston',
          state: 'MA',
          country: 'United States',
          zipcode: '01672',
        },
        details: {
          startDate: '04/04',
          endDate: '09/16',
          acronym: 'NAL',
          tier: 5,
          classification: 'semi-pro'
        }
      }
    ]
    
    setClubs(nextClubs)
    setLeagues(nextLeagues)

  }, [])

  return (
    <ClubContext.Provider value={{leagues, clubs}}>
      {props.children}
    </ClubContext.Provider>
  )
}