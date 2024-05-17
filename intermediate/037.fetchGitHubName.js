async function fetchGitHubName(username) {
  try {
        const resp = await fetch(`https://api.github.com/users/${username}`);
        
        if (!resp.ok) {
            return null;
        }
    
        const user = await resp.json();
        return user.name;
    } catch (err) {
        console.error("Failed to fetch GitHub API", err);
        return null;
    }
  
}

export { fetchGitHubName };
