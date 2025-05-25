import { Octokit } from 'octokit';
import fs from 'fs/promises';
import path from 'path';
import { LANGUAGE_ICONS } from '../../src/types/github.js';
import { cwd } from 'process';
const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
});
async function computeTopLanguages() {
    console.log(cwd());
    let repos = null;
    try {
        console.info('Fetching user repositories...');
        const response = await octokit.request('GET /user/repos', {
            visibility: 'all',
            sort: 'updated',
        });
        repos = response.data;
        if (!repos || repos.length === 0) {
            throw new Error('No repositories found for the user');
        }
    }
    catch (error) {
        throw new Error(`Error fetching repositories: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
    console.info(`Found ${repos.length} repositories, computing languages...`);
    const repoLanguages = [];
    for (const repo of repos) {
        try {
            const response = await octokit.request('GET /repos/{owner}/{repo}/languages', {
                owner: repo.owner.login,
                repo: repo.name,
            });
            repoLanguages.push(response.data);
        }
        catch {
            console.warn(`Error fetching languages for repository ${repo.name}, skipping...`);
            continue;
        }
    }
    const languages = [];
    for (const repoLanguage of repoLanguages) {
        for (const [language, value] of Object.entries(repoLanguage)) {
            const existingLanguage = languages.find((lang) => lang.name === language);
            if (existingLanguage) {
                existingLanguage.value += value;
            }
            else {
                const icon = LANGUAGE_ICONS.find((lang) => lang.name === language)?.icon;
                languages.push({ name: language, value, icon });
            }
        }
    }
    if (languages.length === 0) {
        throw new Error('No languages found for the user');
    }
    languages.sort((a, b) => b.value - a.value);
    console.info('Languages computed successfully, writing to file...');
    const filePath = path.join(cwd(), '../../public/top-languages.json');
    try {
        await fs.writeFile(filePath, JSON.stringify(languages, null, 2));
        console.info(`Languages written to ${filePath}`);
    }
    catch (error) {
        throw new Error(`Error writing languages to file: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
    console.info('Languages computation completed successfully.');
}
computeTopLanguages()
    .then(() => console.info('Script completed successfully.'))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});
