import { TeamProfilesSection } from '../components/TeamProfilesSection'
import { TeamStorySection } from '../components/TeamStorySection'
import { PageHero } from '../components/PageHero'
import { teamHero, teamProfilesSection, teamStorySection } from '../content/landingPage'

export function TeamPage() {
  return (
    <>
      <PageHero content={teamHero} />
      <TeamStorySection content={teamStorySection} />
      <TeamProfilesSection content={teamProfilesSection} />
    </>
  )
}
