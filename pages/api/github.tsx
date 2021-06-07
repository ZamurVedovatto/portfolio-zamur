import { Octokit } from '@octokit/rest'

export default async (req, res) => {

  const octokit = new Octokit({
    auth: process.env.GITHUB_KEY
  })
  
  const repos = await octokit.request('/users/ZamurVedovatto/repos')
  const mineRepo = repos.data.filter((repo: { fork: any }) => !repo.fork)
  
  return res.status(200).json({repos: mineRepo})
}
