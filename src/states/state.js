import { State, Actions } from 'jumpsuit'
import profileImage from '../images/github-profile.jpg'

const mainState = State({
  initial: {
    profiles: [
      {
        name: "Brian Barrow",
        badges: [
          {
            name: "github",
            link: 'https://github.com/briancbarrow'
          },
          {
            name: "rocket",
            link: 'not a link'
          }
        ],
        image: {profileImage}
      },
      {
        name: "Nick Coleman",
        badges: [
          {
            name: "github",
            link: 'https://github.com/nickcoleman'
          },
          {
            name: "rocket",
            link: 'not a link'
          }
        ],
        image: {profileImage}
      },
      {
        name: "Alvaro",
        badges: [
          {
            name: "github",
            link: 'https://github.com/nickcoleman'
          },
          {
            name: "rocket",
            link: 'not a link'
          }
        ],
        image: {profileImage}
      }
    ]
  }
})

const state = {
  main: mainState
}

export default state
