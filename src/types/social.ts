export interface Social {
    icon: string
    link: string
    name?: string // optional for accessibility
}

export const SOCIAL_LINKS: Social[] = [
    {
        icon: 'bxl:linkedin-square',
        link: 'https://www.linkedin.com/in/bedlinger',
        name: 'LinkedIn',
    },
    { icon: 'bxl:github', link: 'https://github.com/bedlinger', name: 'GitHub' },
    { icon: 'bxl:gmail', link: 'mailto:beni.edlinger+portfolio@gmail.com', name: 'Email' },
]
