(function() {
  const REPO = 'icook/tiny-congress';
  const COMMIT_DISPLAY_COUNT = 5;
  const DAYS_AGO = 30;

  const sinceDate = new Date();
  sinceDate.setDate(sinceDate.getDate() - DAYS_AGO);
  const sinceISO = sinceDate.toISOString();

  async function fetchActivity() {
    await Promise.all([
      fetchCommitCount(),
      fetchMergedPRCount(),
      fetchRecentCommits()
    ]);
  }

  async function fetchCommitCount() {
    const countEl = document.getElementById('commit-count');
    if (!countEl) return;

    try {
      // Fetch commits since 30 days ago (paginate to count all)
      let count = 0;
      let page = 1;
      let hasMore = true;

      while (hasMore) {
        const response = await fetch(
          `https://api.github.com/repos/${REPO}/commits?since=${sinceISO}&per_page=100&page=${page}`
        );
        if (!response.ok) throw new Error(`API returned ${response.status}`);

        const commits = await response.json();
        count += commits.length;
        hasMore = commits.length === 100;
        page++;
      }

      countEl.textContent = count;
    } catch (error) {
      console.error('Failed to fetch commit count:', error);
      countEl.textContent = '?';
    }
  }

  async function fetchMergedPRCount() {
    const countEl = document.getElementById('pr-count');
    if (!countEl) return;

    try {
      // Search for merged PRs in the last 30 days
      const searchQuery = `repo:${REPO} is:pr is:merged merged:>=${sinceISO.split('T')[0]}`;
      const response = await fetch(
        `https://api.github.com/search/issues?q=${encodeURIComponent(searchQuery)}`
      );

      if (!response.ok) throw new Error(`API returned ${response.status}`);

      const data = await response.json();
      countEl.textContent = data.total_count;
    } catch (error) {
      console.error('Failed to fetch PR count:', error);
      countEl.textContent = '?';
    }
  }

  async function fetchRecentCommits() {
    const commitList = document.getElementById('commit-list');
    if (!commitList) return;

    try {
      const response = await fetch(
        `https://api.github.com/repos/${REPO}/commits?per_page=${COMMIT_DISPLAY_COUNT}`
      );

      if (!response.ok) throw new Error(`API returned ${response.status}`);

      const commits = await response.json();

      if (commits.length === 0) {
        commitList.innerHTML = '<li>No commits found</li>';
        return;
      }

      commitList.innerHTML = commits.map(commit => {
        const date = new Date(commit.commit.author.date);
        const relativeTime = formatRelativeTime(date);
        const message = commit.commit.message.split('\n')[0];
        const shortSha = commit.sha.substring(0, 7);

        return `<li>
          <a href="${commit.html_url}" target="_blank" rel="noopener" class="commit-link">
            <code class="commit-sha">${shortSha}</code>
            <span class="commit-message">${escapeHtml(message)}</span>
          </a>
          <time datetime="${date.toISOString()}" class="commit-date">${relativeTime}</time>
        </li>`;
      }).join('');

    } catch (error) {
      console.error('Failed to fetch commits:', error);
      commitList.innerHTML = `<li class="error">
        <a href="https://github.com/${REPO}/commits" target="_blank" rel="noopener">View commits on GitHub</a>
      </li>`;
    }
  }

  function formatRelativeTime(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'today';
    if (diffDays === 1) return 'yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
    }
    if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return months === 1 ? '1 month ago' : `${months} months ago`;
    }
    const years = Math.floor(diffDays / 365);
    return years === 1 ? '1 year ago' : `${years} years ago`;
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fetchActivity);
  } else {
    fetchActivity();
  }
})();
