import { defineConfig } from 'astro/config';

// GitHub Actions provides GITHUB_REPOSITORY as "owner/repository".
// This keeps local preview at / and configures the correct Pages path automatically.
const [owner = '', repository = ''] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isGitHubBuild = Boolean(owner && repository);
const isAccountSite = repository.toLowerCase() === `${owner.toLowerCase()}.github.io`;

export default defineConfig({
  site: isGitHubBuild ? `https://${owner}.github.io` : 'http://localhost:4321',
  base: isGitHubBuild && !isAccountSite ? `/${repository}` : '/',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});

