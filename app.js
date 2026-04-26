const siteConfig = {
  brand: {
    name: "ss2k website test",
    shortName: "SS2K",
    tagline: "placeholder",
    season: "ss2k year",
    heroTitle: "placeholder.",
    heroCopy:
      "free the kids jeecy, they deserve freedom.",
    footer: "Continental Cup",
  },
  stats: {
    clubs: "?",
    cities: "?",
    prize: "?",
    final: "37",
  },
  featuredMatch: {
    label: "Quarter-final first leg",
    date: "?",
    venue: "Donaldsonville Park",
    home: "?",
    away: "?",
    homeCode: "?",
    awayCode: "?",
    homeColor: "#00b7d7",
    awayColor: "#f2c14e",
    note: "placeholder.",
  },
  matches: [
    {
      round: "Quarter-final",
      date: "?",
      venue: "?",
      home: "?",
      away: "?",
      homeCode: "?",
      awayCode: "?",
      score: "?",
    },
    {
      round: "Quarter-final",
      date: "?",
      venue: "?",
      home: "?",
      away: "?",
      homeCode: "?",
      awayCode: "?",
      score: "?",
    },
    {
      round: "Quarter-finall",
      date: "?",
      venue: "?",
      home: "?",
      away: "?",
      homeCode: "?",
      awayCode: "?",
      score: "?",
    },
    {
      round: "Quarter-final",
      date: "?",
      venue: "?",
      home: "?",
      away: "?",
      homeCode: "?",
      awayCode: "?",
      score: "?",
    },
  ],
  standings: [
    { club: "team A", code: "TMA", played: 6, wins: 5, gd: "+12", pts: 16, color: "#00b7d7" },
    { club: "team B", code: "TMB", played: 6, wins: 4, gd: "+8", pts: 13, color: "#22c55e" },
    { club: "team C", code: "TMC", played: 6, wins: 4, gd: "+5", pts: 12, color: "#f2c14e" },
    { club: "team D", code: "TMD", played: 6, wins: 3, gd: "+2", pts: 10, color: "#ff6b5e" },
    { club: "team E", code: "TME", played: 6, wins: 3, gd: "0", pts: 9, color: "#8b5cf6" },
    { club: "team F", code: "TMF", played: 6, wins: 2, gd: "-1", pts: 7, color: "#38bdf8" },
  ],
  clubs: [
    {
      name: "team A",
      code: "TMA",
      city: "Lynden",
      record: "5W 1D 0L",
      note: "?",
      color: "#00b7d7",
    },
    {
      name: "team B",
      code: "TMB",
      city: "Montclair",
      record: "4W 1D 1L",
      note: "?",
      color: "#22c55e",
    },
    {
      name: "team C",
      code: "TMC",
      city: "Port Azul",
      record: "4W 0D 2L",
      note: "?",
      color: "#f2c14e",
    },
    {
      name: "team D",
      code: "TMD",
      city: "Eastbay",
      record: "3W 1D 2L",
      note: "?",
      color: "#ff6b5e",
    },
  ],
  stories: [
    {
      label: "Preview",
      title: "jeecy fuck you and ur python",
      text: "placeholder",
      color: "linear-gradient(140deg, rgba(0,183,215,0.42), rgba(7,17,31,0.2))",
    },
    {
      label: "Analysis",
      title: "my fingers hurt",
      text: "placeholder",
      color: "linear-gradient(140deg, rgba(34,197,94,0.34), rgba(7,17,31,0.2))",
    },
    {
      label: "Final venue",
      title: "m",
      text: "placeholder",
      color: "linear-gradient(140deg, rgba(242,193,78,0.38), rgba(7,17,31,0.2))",
    },
  ],
};

const qs = (selector) => document.querySelector(selector);

function setText(selector, value) {
  const element = qs(selector);
  if (element) element.textContent = value;
}

function badge(code, color) {
  return `<span class="badge" style="--badge-color: ${color || "#00b7d7"}">${code}</span>`;
}

function renderBrand() {
  setText("[data-brand-mark]", siteConfig.brand.shortName);
  setText("[data-site-title]", siteConfig.brand.name);
  setText("[data-site-tagline]", siteConfig.brand.tagline);
  setText("[data-season]", siteConfig.brand.season);
  setText("[data-hero-title]", siteConfig.brand.heroTitle);
  setText("[data-hero-copy]", siteConfig.brand.heroCopy);
  setText("[data-footer-title]", siteConfig.brand.footer);
  setText("[data-stat-clubs]", siteConfig.stats.clubs);
  setText("[data-stat-cities]", siteConfig.stats.cities);
  setText("[data-stat-prize]", siteConfig.stats.prize);
  setText("[data-stat-final]", siteConfig.stats.final);
}

function renderFeaturedMatch() {
  const match = siteConfig.featuredMatch;
  qs("[data-featured-match]").innerHTML = `
    <span class="ticker-label">${match.label}</span>
    <div class="ticker-teams">
      <div class="ticker-team">
        <span class="ticker-team-name">${badge(match.homeCode, match.homeColor)} ${match.home}</span>
      </div>
      <div class="ticker-team">
        <span class="ticker-team-name">${badge(match.awayCode, match.awayColor)} ${match.away}</span>
      </div>
    </div>
    <h3>${match.date}</h3>
    <p class="venue">${match.venue}</p>
    <p class="venue">${match.note}</p>
  `;
}

function renderMatches() {
  qs("[data-match-list]").innerHTML = siteConfig.matches
    .map(
      (match) => `
        <article class="fixture-card">
          <span class="card-meta">${match.round} / ${match.date}</span>
          <div class="fixture-row">
            <span>${badge(match.homeCode)} ${match.home}</span>
            <span class="score">${match.score}</span>
          </div>
          <div class="fixture-row">
            <span>${badge(match.awayCode)} ${match.away}</span>
          </div>
          <p class="venue">${match.venue}</p>
        </article>
      `
    )
    .join("");
}

function renderStandings() {
  qs("[data-standings]").innerHTML = siteConfig.standings
    .map(
      (team, index) => `
        <tr>
          <td>${index + 1}</td>
          <td>${badge(team.code, team.color)} ${team.club}</td>
          <td>${team.played}</td>
          <td>${team.wins}</td>
          <td>${team.gd}</td>
          <td><strong>${team.pts}</strong></td>
        </tr>
      `
    )
    .join("");
}

function renderClubs() {
  qs("[data-club-list]").innerHTML = siteConfig.clubs
    .map(
      (club) => `
        <article class="club-card">
          <div class="club-top">
            <h3>${club.name}</h3>
            ${badge(club.code, club.color)}
          </div>
          <p>${club.city}</p>
          <p>${club.note}</p>
          <div class="club-record">
            <span>Record</span>
            <span>${club.record}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderStories() {
  qs("[data-news-list]").innerHTML = siteConfig.stories
    .map(
      (story) => `
        <article class="news-card" style="--story-color: ${story.color}">
          <span class="card-meta">${story.label}</span>
          <h3>${story.title}</h3>
          <p>${story.text}</p>
        </article>
      `
    )
    .join("");
}

renderBrand();
renderFeaturedMatch();
renderMatches();
renderStandings();
renderClubs();
renderStories();
