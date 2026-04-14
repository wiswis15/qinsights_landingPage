import { TeamStorySection } from '../components/TeamStorySection'
import { TeamHero } from '../components/TeamHero'
import { teamHero, teamStorySection } from '../content/landingPage'

export function TeamPage() {
  return (
    <>
      <TeamHero content={teamHero} />
      <TeamStorySection content={teamStorySection} />
    </>
  )
}
