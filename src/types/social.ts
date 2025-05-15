export interface Social {
  icon: string
  link: string
  name?: string // optional for accessibility
}
export interface SocialLinkProps {
  socials: Social[]
  isHorizontal?: boolean
}
