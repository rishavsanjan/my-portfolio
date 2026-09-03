import { useState, useEffect } from 'react';

export default function Projects({ theme, component5Ref }) {

    const projects = [
        {
            id: "gamersconnect",
            name: "GamersConnect",
            subtitle: "Full-Stack Game Discovery & Social Platform",
            type: "Web App",
            summary:
                "Full-stack social platform for game discovery, personalized collections, community interaction, and social feeds.",
            features: [
                "Game discovery powered by the IGDB API with trailers, DLCs, franchise data, similar games, screenshots, and platform-based discovery",
                "Playlists, owned-game statuses (Completed / Playing / Abandoned / Not Completed), and custom user collections",
                "Normalized Prisma/PostgreSQL schema for users, posts, comments, games, and follow relationships",
                "Nested Prisma writes and reads supporting personalized feed generation",
                "Rich user profiles with genre statistics and platform-distribution tracking across a user's game history",
                "Community posts, screenshots, comments, likes, and filterable feeds (Latest / Popular / Trending)",
                "Hashtag-based trending feeds with time-based trending tags",
                "Social graph with follows, player profiles, and personalized feeds",
                "Joinable community groups with dedicated posts and personalized group feeds"
            ],
            techStack: [
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
                "Prisma",
                "PostgreSQL",
                "IGDB API"
            ],
            links: {
                live: "https://gamers-connect-sage.vercel.app",
                repo: "https://github.com/rishavsanjan/gamers-connect"
            }
        },

        {
            id: "api-monitoring-saas",
            name: "API Monitoring SaaS",
            subtitle: "Real-time API Monitoring & Alerting Platform",
            type: "Web App",
            summary:
                "Production-style API monitoring platform with scheduled synthetic checks, real-time WebSocket updates, historical performance analytics, and configurable alerting.",
            features: [
                "Go-based synthetic monitoring engine for scheduled HTTP, ping, and keyword-match checks",
                "User-defined monitors with configurable monitoring conditions and schedules",
                "Real-time monitoring results streamed to the frontend using WebSockets",
                "Configurable downtime and latency thresholds with automated alerting",
                "Structured logging taxonomy with info, success, warning, and error levels for easier debugging",
                "Next.js dashboard with monitor CRUD, real-time status, log viewer, and performance analytics",
                "Recharts-based graphs for visualizing historical API performance",
                "Paginated historical performance queries designed to support large datasets",
                "Secure server-side secrets management for per-monitor authentication credentials",
                "Support for JWT propagation across multi-step synthetic checks"
            ],
            techStack: [
                "Go",
                "Gin",
                "GORM",
                "PostgreSQL",
                "WebSockets",
                "Next.js",
                "React",
                "TypeScript",
                "Recharts"
            ],
            links: {
                live: "",
                repo: ""
            }
        },

        {
            id: "cinely",
            name: "Cinely",
            subtitle: "Movie & TV Show Discovery Mobile App",
            type: "Mobile App",
            summary:
                "Cross-platform movie and TV discovery app with watchlists, favorites, actor details, and a serverless backend.",
            features: [
                "Cross-platform mobile app built with React Native and TypeScript",
                "TMDB API integration for movies, TV shows, actors, and media details",
                "Redux Toolkit state management for watchlists and favorites",
                "Prisma + PostgreSQL backend deployed on Cloudflare Workers using Hono",
                "Serverless backend architecture designed for low cold-start latency",
                "Modular reusable component and custom hook architecture",
                "Modern UI using NativeWind, LinearGradient, and BlurView",
                "Cloudinary integration for image hosting and media delivery",
                "Reusable architecture across search, detail, watchlist, and discovery views"
            ],
            techStack: [
                "React Native",
                "TypeScript",
                "Redux Toolkit",
                "NativeWind",
                "Cloudinary",
                "Prisma",
                "PostgreSQL",
                "Hono",
                "Cloudflare Workers",
                "TMDB API"
            ],
            links: {
                live: "https://github.com/rishavsanjan/movie-app",
                repo: "https://expo.dev/accounts/rishavsanjan/projects/movie-app/builds/21f8da2e-5a2d-4b72-acc9-ed403a8b0754"
            }
        },

        {
            id: "urban-reporting-platform",
            name: "Crowd Source Issue Reporting System",
            subtitle: "Mobile App + Web Dashboard",
            type: "Mobile + Web App",
            summary:
                "Three-sided civic issue reporting platform connecting citizens, administrators, and field workers through shared backend services.",
            features: [
                "Citizen mobile app for reporting civic issues with photos, location, and category",
                "Admin web dashboard for issue triage, worker assignment, and issue management",
                "Worker mobile app for receiving assigned issues and updating resolution status",
                "ML-based complaint classification using BERT/DistilBERT to automatically route complaints to the correct civic department",
                "Interactive admin map for geographically visualizing reported issues",
                "Category-based filtering for efficient issue discovery and triage",
                "Secure authentication with role-based access across citizen, admin, and worker applications",
                "Shared backend supporting three separate client applications",
                "Real-time issue lifecycle tracking from reporting through worker assignment and resolution",
                "Community interaction through issue visibility and engagement mechanisms"
            ],
            techStack: [
                "React Native",
                "React",
                "TypeScript",
                "Node.js",
                "Express.js",
                "Prisma",
                "PostgreSQL",
                "BERT",
                "DistilBERT",
                "ML Classification",
                "Map APIs"
            ],
            links: {
                live: "https://github.com/rishavsanjan/Crowdsourced-Civic-Issue-Reporting-System",
                repo: "https://expo.dev/accounts/rishavsanjan/projects/frontend/builds/dbb6db22-76bd-49ae-911c-2230785ac3b0"
            }
        },

        {
            id: "fiteats",
            name: "Fit Eats",
            subtitle: "Full-Stack Food Delivery Web App",
            type: "Web App",
            summary:
                "End-to-end food delivery platform connecting customers, restaurants, and delivery drivers through real-time event-driven communication.",
            features: [
                "Separate user, restaurant, and driver portals for a complete food delivery ecosystem",
                "Restaurant onboarding dashboard for registering outlets and managing menus",
                "Dish management with nutritional composition and menu information",
                "Real-time driver assignment using Socket.IO broadcasting new orders to available drivers",
                "One-accept semantics preventing multiple drivers from accepting the same order",
                "Live delivery tracking using driver geolocation",
                "Real-time order progress updates between users, restaurants, and drivers",
                "Event-driven backend architecture for real-time communication"
            ],
            techStack: [
                "React",
                "Node.js",
                "Express",
                "Socket.IO",
                "SQL",
                "NoSQL"
            ],
            links: {
                live: "https://food-web-app-kappa.vercel.app/",
                repo: "https://github.com/rishavsanjan/food_web_app"
            }
        },

        {
            id: "community-connect",
            name: "Community Connect",
            subtitle: "Social Help & Resource Sharing Web App",
            type: "Web App",
            summary:
                "MERN-based community platform for requesting and offering essential resources such as food, shelter, and medical assistance.",
            features: [
                "User authentication and profile management",
                "Create help requests for food, shelter, and medical resources",
                "Reply to and participate in help threads",
                "Responsive and interactive frontend across devices",
                "Real-time one-to-one messaging using Socket.IO",
                "RESTful APIs for authentication, posts, and connection requests",
                "Community-oriented system for connecting people who need help with people who can provide it"
            ],
            techStack: [
                "MongoDB",
                "Express.js",
                "React.js",
                "Node.js",
                "Socket.IO"
            ],
            links: {
                live: "",
                repo: "https://github.com/rishavsanjan/community-connect"
            }
        },

        {
            id: "fix-my-campus",
            name: "Fix My Campus",
            subtitle: "Campus Issue Reporting Web App",
            type: "Web App",
            summary:
                "Campus-focused issue reporting platform with secure college-email authentication, community voting, discussions, and administrative moderation.",
            features: [
                "Issue reporting with descriptions and image attachments",
                "Category-based issue filtering for easier navigation and prioritization",
                "Comments and threaded replies for issue discussions",
                "Upvote/downvote system for measuring relevance and urgency",
                "Secure authentication restricted to MANIT college email IDs",
                "Responsive mobile-friendly interface",
                "Admin dashboard for viewing, moderating, and managing issues",
                "Administrative monitoring of user activity and reported issues"
            ],
            techStack: [
                "React",
                "Node.js",
                "Express",
                "SQL",
                "NoSQL",
                "OAuth"
            ],
            links: {
                live: "https://ebcabda1.manit-fix.pages.dev/",
                repo: "https://github.com/rishavsanjan/manit-fix"
            }
        }
    ];

    const [expandedProject, setExpandedProject] = useState(null);

    const toggleExpand = (id) => {
        setExpandedProject(expandedProject === id ? null : id);
    };

    return (
        <div ref={component5Ref} className={`min-h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'} transition-colors duration-300 w-full`}>
            <div className="max-w-7xl mx-auto py-8 w-full flex flex-col">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className={`text-5xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                        Projects
                    </h1>
                    <p className="text-blue-500 text-2xl font-medium">What I am working on</p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 w-full overflow-y-auto">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`rounded-2xl overflow-hidden ${theme === 'light' ? 'bg-white shadow-lg' : 'bg-gray-800'
                                } transition-all duration-300 hover:shadow-2xl overflow-y-auto`}
                        >
                            {/* Project Header */}
                            <div className="p-6 border-b border-gray-700">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1">
                                        <h2 className={`text-2xl font-bold mb-1 ${theme === 'light' ? 'text-gray-900' : 'text-white'
                                            }`}>
                                            {project.name}
                                        </h2>
                                        <p className={`text-lg ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                                            }`}>
                                            {project.subtitle}
                                        </p>
                                    </div>
                                    <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full whitespace-nowrap ml-4">
                                        {project.type}
                                    </span>
                                </div>
                                <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} leading-relaxed`}>
                                    {project.summary}
                                </p>
                            </div>

                            {/* Tech Stack */}
                            <div className="p-6 border-b border-gray-700">
                                <h3 className={`text-sm font-semibold mb-3 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                                    }`}>
                                    TECH STACK
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, index) => (
                                        <span
                                            key={index}
                                            className={`px-3 py-1 rounded-lg text-sm ${theme === 'light'
                                                ? 'bg-gray-100 text-gray-800'
                                                : 'bg-gray-700 text-gray-200'
                                                }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Features - Expandable */}
                            <div className="p-6">
                                <button
                                    onClick={() => toggleExpand(project.id)}
                                    className={`flex items-center justify-between w-full text-left font-semibold mb-3 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                                        }`}
                                >
                                    <span className="text-sm">KEY FEATURES</span>
                                    <span className="text-blue-500 text-xl">
                                        {expandedProject === project.id ? '−' : '+'}
                                    </span>
                                </button>

                                {expandedProject === project.id && (
                                    <ul className={`space-y-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                                        } text-sm`}>
                                        {project.features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-blue-500 mr-2 mt-1">•</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* Links */}
                            <div className="p-6 pt-0 flex gap-3">
                                {project.links.live && (
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-center py-3 rounded-lg transition-colors font-medium"
                                    >
                                        View Live
                                    </a>
                                )}
                                {project.links.repo && (
                                    <a
                                        href={project.links.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex-1 ${theme === 'light'
                                            ? 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                                            : 'bg-gray-700 hover:bg-gray-600 text-white'
                                            } text-center py-3 rounded-lg transition-colors font-medium`}
                                    >
                                        Source Code
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}