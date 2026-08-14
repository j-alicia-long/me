export interface Project {
  name: string;
  repoUrl: string;
  /** Where a visitor can try the project (deployed site, web store, etc.). Optional. */
  liveUrl?: string;
  /**
   * Preview image filename in src/assets/projects/.
   * A placeholder is shown until a file with this name exists.
   */
  image: string;
}

export const projects: Project[] = [
  {
    name: 'Todo Now',
    repoUrl: 'https://github.com/j-alicia-long/todo-now',
    liveUrl: 'https://j-alicia-long.github.io/todo-now/',
    image: 'todo-now.png',
  },
  {
    name: 'AI Carbon Footprint',
    repoUrl: 'https://github.com/j-alicia-long/ai-carbon-footprint',
    liveUrl: 'https://j-alicia-long.github.io/footprint/',
    image: 'ai-carbon-footprint.png',
  },
  {
    name: 'AI Spend Tracker',
    repoUrl: 'https://github.com/j-alicia-long/ai-spend-tracker',
    image: 'ai-spend-tracker.png',
  },
  {
    name: 'Flight to Google Calendar',
    repoUrl: 'https://github.com/j-alicia-long/flight-to-gcal',
    image: 'flight-to-gcal.png',
  },
];
