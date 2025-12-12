import { useState, useEffect } from 'react';

export default function Projects({theme, component5Ref }) {

    const projects = [
        {
            "id": "gamersconnect",
            "name": "GamersConnect",
            "subtitle": "Full-Stack Game Discovery & Social Platform",
            "type": "Web App",
            "summary": "Full-stack game discovery and social platform with playlists, rich profiles, and community features.",
            "features": [
                "Game discovery via IGDB API with trending lists, platform filters, trailers, screenshots, DLCs, similar games, and franchises",
                "Playlists, owned-game statuses (Completed / Playing / Abandoned / Not Completed), and custom user collections",
                "Rich user profiles with genre distribution, platform statistics, game activity, and current progress",
                "Community system for posts, screenshots, comments, likes, and filters (Latest / Popular / Trending)",
                "Twitter-like hashtag system with 24-hour trending tags and hashtag-specific feeds",
                "Social graph with follows, visitable player pages, and personalized feeds",
                "Joinable groups with dedicated group posts for focused community discussions"
            ],
            "techStack": [
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
                "Prisma ORM"
            ],
            "links": {
                "live": "https://gamers-connect-sage.vercel.app",
                "repo": "https://github.com/rishavsanjan/gamers-connect"
            }
        },
        {
            "id": "cinely",
            "name": "Cinely",
            "subtitle": "Movie & TV Show Discovery Mobile App",
            "type": "Mobile App",
            "summary": "React Native app for discovering movies, TV shows, and actors with watchlists and favorites.",
            "features": [
                "Cross-platform mobile app using React Native and TypeScript",
                "TMDB API integration for detailed movies, TV shows, and cast data",
                "State management with Redux Toolkit for watchlists and favorites",
                "Modular architecture with reusable components and custom hooks",
                "Modern UI using NativeWind (Tailwind CSS), LinearGradient, and BlurView",
                "Cloudinary for image hosting and Prisma + PostgreSQL backend via Hono on Cloudflare Workers"
            ],
            "techStack": [
                "React Native",
                "TypeScript",
                "Redux Toolkit",
                "NativeWind",
                "Cloudinary",
                "Prisma",
                "PostgreSQL",
                "Hono"
            ],
            "links": {
                "live": "https://github.com/rishavsanjan/movie-app",
                "repo": "https://expo.dev/accounts/rishavsanjan/projects/movie-app/builds/21f8da2e-5a2d-4b72-acc9-ed403a8b0754"
            }
        },
        {
            "id": "fiteats",
            "name": "Fit Eats",
            "subtitle": "Full-Stack Food Delivery Web App",
            "type": "Web App",
            "summary": "End-to-end food delivery platform with separate user, restaurant, and driver portals.",
            "features": [
                "User, restaurant, and driver portals for a complete food delivery ecosystem",
                "Restaurant onboarding dashboard to register outlets, add dishes, manage menus, and specify nutritional composition",
                "Real-time driver assignment using Socket.IO broadcasting new orders to multiple drivers with one-accept semantics",
                "Live delivery tracking with driver geolocation and order progress updates",
                "Event-driven backend enabling real-time updates between users, restaurants, and drivers"
            ],
            "techStack": [
                "React",
                "Node.js",
                "Express",
                "Socket.IO",
                "SQL/NoSQL"
            ],
            "links": {
                "live": "https://food-web-app-kappa.vercel.app/",
                "repo": "https://github.com/rishavsanjan/food_web_app"
            }
        },
        {
            "id": "urban-reporting-platform",
            "name": "Community-Driven Urban Problem Reporting",
            "subtitle": "and Resolution Platform",
            "type": "Mobile + Web App",
            "summary": "Citizen reporting platform with Aadhaar-verified issues, live tracking, and analytics for authorities.",
            "features": [
                "Aadhaar-verified authentication for genuine civic issue reporting",
                "Geo-tagged reports with photos, videos, and descriptions",
                "Public dashboard to view nearby issues, upvote/downvote, and avoid duplicates",
                "Real-time issue lifecycle tracking (Pending → In Progress → Resolved) with admin responses",
                "Gamification with badges and points to boost participation",
                "Multilingual chatbot (English & Hindi) for reporting, tracking, and FAQs",
                "Authority dashboard with live map view, severity levels, and departmental performance analytics"
            ],
            "techStack": [
                "React",
                "React Native",
                "Node.js",
                "Express",
                "Realtime DB",
                "Map APIs"
            ],
            "links": {
                "live": "https://github.com/rishavsanjan/Crowdsourced-Civic-Issue-Reporting-System",
                "repo": "https://expo.dev/accounts/rishavsanjan/projects/frontend/builds/dbb6db22-76bd-49ae-911c-2230785ac3b0"
            }
        },
        {
            "id": "community-connect",
            "name": "Community Connect",
            "subtitle": "Social Help & Resource Sharing Web App",
            "type": "Web App",
            "summary": "MERN-based platform for requesting and offering help such as food, shelter, and medical resources.",
            "features": [
                "User authentication and profile pages",
                "Create and reply to help threads for food, shelter, and medical needs",
                "Responsive and interactive frontend for all devices",
                "Real-time one-to-one messaging with Socket.IO",
                "RESTful APIs handling auth, posts, and connection requests"
            ],
            "techStack": [
                "MongoDB",
                "Express.js",
                "React.js",
                "Node.js",
                "Socket.IO"
            ],
            "links": {
                "live": "",
                "repo": "https://github.com/rishavsanjan/community-connect"
            }
        },
        {
            "id": "fix-my-campus",
            "name": "Fix My Campus",
            "subtitle": "Campus Issue Reporting Web App",
            "type": "Web App",
            "summary": "Campus-focused issue reporting system with MANIT email login and admin moderation tools.",
            "features": [
                "Issue reporting with descriptive posts and image attachments",
                "Filtering issues by category to prioritize and navigate",
                "Comments and threaded replies for discussions",
                "Mobile-friendly, responsive UI",
                "Upvote/downvote mechanism for relevance and urgency",
                "Secure login via MANIT college email IDs",
                "Admin dashboard to view, moderate, and manage issues and user activity"
            ],
            "techStack": [
                "React",
                "Node.js",
                "Express",
                "SQL/NoSQL",
                "OAuth"
            ],
            "links": {
                "live": "https://ebcabda1.manit-fix.pages.dev/",
                "repo": "https://github.com/rishavsanjan/manit-fix"
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