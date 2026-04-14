import { TeamProfilesSection } from '../components/TeamProfilesSection'
import { TeamStorySection } from '../components/TeamStorySection'
import { TeamHero } from '../components/TeamHero'
import { teamHero, teamProfilesSection, teamStorySection } from '../content/landingPage'

export function TeamPage() {
  return (
    <>
      <TeamHero content={teamHero} />
      <TeamStorySection content={teamStorySection} />
      <TeamProfilesSection content={teamProfilesSection} />
    </>
  )
}
