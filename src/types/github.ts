import type { Endpoints } from '@octokit/types'

export type Repos = Endpoints['GET /user/repos']['response']['data']
export type Repo = Endpoints['GET /repos/{owner}/{repo}']['response']['data']
export type User = Endpoints['GET /user']['response']['data']
export type Starred = Endpoints['GET /user/starred']['response']['data']
export interface Language {
    name: string
    value: number
    icon?: string
}

export interface CachedLanguages {
    lastUpdated: string
    languages: Language[]
}

export const LANGUAGE_ICONS: { name: string; icon: string }[] = [
    { name: 'Vue', icon: 'devicon-plain:vuejs' },
    { name: 'C#', icon: 'devicon-plain:csharp' },
    { name: 'Java', icon: 'devicon-plain:java' },
    { name: 'JavaScript', icon: 'devicon-plain:javascript' },
    { name: 'Kotlin', icon: 'devicon-plain:kotlin' },
    { name: 'Python', icon: 'devicon-plain:python' },
    { name: 'CSS', icon: 'devicon-plain:css3' },
    { name: 'Typescript', icon: 'devicon-plain:typescript' },
    { name: 'Go', icon: 'devicon-plain:go' },
    { name: 'Rust', icon: 'devicon-plain:rust' },
    { name: 'Dockerfile', icon: 'devicon-plain:docker' },
    { name: 'HTML', icon: 'devicon-plain:html5' },
]

export interface PrimaryLanguage {
    name: string
    color: string | null
}

export interface RepositoryOwner {
    login: string
}

export interface PinnedRepositoryNode {
    id: string
    name: string
    description: string | null
    url: string
    stargazerCount: number
    forkCount: number
    owner: RepositoryOwner
    primaryLanguage: PrimaryLanguage | null
    openGraphImageUrl: string
}

export interface PinnedItemsGraphQLResponse {
    viewer: {
        login: string
        pinnedItems: {
            nodes: (PinnedRepositoryNode | null)[]
        }
    }
}

export interface PinnedRepo {
    id: string
    name: string
    description: string | null
    url: string
    stars: number
    forks: number
    owner: string
    languageName: string | null
    languageColor: string | null
    imageUrl: string
}
