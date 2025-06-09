// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/https://username.github.io/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https://username.github.io/blog/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https://username.github.io/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https://username.github.io/cv/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https://username.github.io/people/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/https://username.github.io/books/the_godfather/";
            },},{id: "news-new-website-is-live",
          title: 'New website is live!',
          description: "",
          section: "News",},{id: "news-workshop-paper-on-adversarial-robustness-accepted-at-icml-2022",
          title: 'Workshop paper on adversarial robustness accepted at ICML 2022.',
          description: "",
          section: "News",},{id: "news-will-be-presenting-my-recent-work-on-cross-domain-imitation-learning-at-neurips-2022",
          title: 'Will be presenting my recent work on Cross-Domain Imitation Learning at NeurIPS 2022....',
          description: "",
          section: "News",},{id: "news-joint-work-with-felipe-on-extracting-reward-functions-from-diffusion-models-accepted-at-neurips-2023",
          title: 'Joint work with Felipe on extracting reward functions from Diffusion Models accepted at...',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-at-iclr-2024-one-work-on-adversarial-robustness-in-rl-the-other-on-imitating-desired-behaviors-from-multi-agent-observations",
          title: 'Two papers accepted at ICLR 2024! One work on adversarial robustness in RL,...',
          description: "",
          section: "News",},{id: "news-linas-work-on-rethinking-out-of-distribution-detection-in-rl-will-be-at-aamas-2024",
          title: 'Linas work on rethinking out-of-distribution detection in RL will be at AAMAS 2024....',
          description: "",
          section: "News",},{id: "news-started-my-internship-at-meta-ai-in-seattle-working-in-the-llama-post-training-safety-team-with-yuning-mao-luke-zettlemoyer-and-madian-khabsa",
          title: 'Started my internship at Meta AI in Seattle. Working in the LLama Post-Training...',
          description: "",
          section: "News",},{id: "news-started-my-internship-at-google-deepmind-in-zurich-working-on-llm-reasoning-in-the-gemini-post-training-team-with-vikas-yadav-eric-malmi-and-aliaksei-severyn",
          title: 'Started my internship at Google DeepMind in Zurich. Working on LLM reasoning in...',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-at-icml-2025",
          title: 'Two papers accepted at ICML 2025!',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/https://username.github.io/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/https://username.github.io/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/https://username.github.io/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/https://username.github.io/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/https://username.github.io/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/https://username.github.io/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/https://username.github.io/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/https://username.github.io/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/https://username.github.io/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
