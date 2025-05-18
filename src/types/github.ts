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
