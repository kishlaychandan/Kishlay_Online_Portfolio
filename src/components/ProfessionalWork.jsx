import { useTheme } from '../context/ThemeContext';
import { useState, useEffect, useRef } from 'react';
import { 
  BsRocketFill, 
  BsCodeSlash, 
  BsPaletteFill, 
  BsFlask, 
  BsCloudFill, 
  BsGearFill, 
  BsCheckCircleFill,
  BsArrowRepeat
} from 'react-icons/bs';

function ProfessionalWork() {
  const { isDark } = useTheme();
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  const professionalWork = [
    {
      id: 1,
      title: 'Project Initialization & Planning',
      company: 'Current Company',
      period: 'Month 1',
      description: 'Kickoff meeting with stakeholders, requirement gathering, and project planning. Created technical specifications and architecture design.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      status: 'completed',
      icon: BsRocketFill,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      title: 'Backend API Development',
      company: 'Current Company',
      period: 'Month 1-2',
      description: 'Developed RESTful APIs with authentication, database integration, and business logic implementation. Implemented error handling and validation.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      status: 'completed',
      icon: BsCodeSlash,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      title: 'Frontend Development - Core Features',
      company: 'Current Company',
      period: 'Month 2-3',
      description: 'Built responsive UI components, implemented state management, and integrated with backend APIs. Created reusable component library.',
      technologies: ['React', 'Redux', 'Tailwind CSS', 'Axios'],
      status: 'completed',
      icon: BsPaletteFill,
      color: 'from-pink-500 to-rose-500',
    },
    {
      id: 4,
      title: 'Advanced Features Implementation',
      company: 'Current Company',
      period: 'Month 3-4',
      description: 'Implemented real-time features, file upload functionality, advanced search and filtering, and dashboard analytics.',
      technologies: ['Socket.io', 'Chart.js', 'React Query'],
      status: 'completed',
      icon: BsFlask,
      color: 'from-indigo-500 to-purple-500',
    },
    {
      id: 5,
      title: 'Testing & Quality Assurance',
      company: 'Current Company',
      period: 'Month 4',
      description: 'Wrote unit tests, integration tests, and performed end-to-end testing. Fixed bugs and optimized performance.',
      technologies: ['Jest', 'React Testing Library', 'Cypress'],
      status: 'completed',
      icon: BsCheckCircleFill,
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 6,
      title: 'Deployment & DevOps',
      company: 'Current Company',
      period: 'Month 4-5',
      description: 'Set up CI/CD pipeline, configured production environment, deployed application, and implemented monitoring and logging.',
      technologies: ['Docker', 'AWS', 'GitHub Actions', 'CloudWatch'],
      status: 'completed',
      icon: BsCloudFill,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      id: 7,
      title: 'Maintenance & Feature Updates',
      company: 'Current Company',
      period: 'Ongoing',
      description: 'Continuous improvement, bug fixes, performance optimization, and implementing new features based on user feedback.',
      technologies: ['React', 'Node.js', 'Various'],
      status: 'in-progress',
      icon: BsGearFill,
      color: 'from-orange-500 to-red-500',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.dataset.id);
            setVisibleItems((prev) => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll('[data-id]');
      items.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${
        isDark
          ? 'bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900'
          : 'bg-gradient-to-b from-white via-purple-50/30 to-white'
      } py-24 transition-colors duration-300 relative overflow-hidden`}
      id="ProfessionalWork"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse ${
          isDark ? 'bg-purple-500' : 'bg-purple-300'
        }`}></div>
        <div className={`absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse delay-1000 ${
          isDark ? 'bg-blue-500' : 'bg-blue-300'
        }`} style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className={`text-5xl md:text-6xl font-extrabold mb-6 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Professional <span className={`bg-gradient-to-r ${
              isDark ? 'from-purple-400 via-pink-400 to-blue-400' : 'from-purple-600 via-pink-600 to-blue-600'
            } bg-clip-text text-transparent animate-gradient`}>Workflow</span>
          </h2>
          <div className={`h-1.5 w-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mb-6`}></div>
          <p className={`text-xl leading-8 max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          } transition-colors duration-300`}>
            Complete journey of projects I've worked on - from conception to deployment
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Vertical Timeline */}
          <div className="relative">
            {/* Animated Timeline Line */}
            <div className={`absolute left-12 top-0 bottom-0 w-1 ${
              isDark ? 'bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500' : 'bg-gradient-to-b from-purple-400 via-pink-400 to-blue-400'
            } opacity-30 rounded-full`}></div>

            <div className="space-y-8">
              {professionalWork.map((work, index) => {
                const Icon = work.icon;
                const isVisible = visibleItems.includes(work.id);
                
                return (
                  <div
                    key={work.id}
                    data-id={work.id}
                    className={`relative flex items-start gap-8 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-1000`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Timeline Node */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-24 h-24 rounded-2xl flex items-center justify-center ${
                        isDark
                          ? `bg-gradient-to-br ${work.color} shadow-2xl shadow-purple-500/30`
                          : `bg-gradient-to-br ${work.color} shadow-2xl shadow-purple-500/20`
                      } transform transition-all duration-500 ${
                        isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                      }`}>
                        <Icon className="text-white text-3xl" />
                      </div>
                      {work.status === 'in-progress' && (
                        <div className="absolute -top-2 -right-2">
                          <BsArrowRepeat className="text-orange-500 text-xl animate-spin" />
                        </div>
                      )}
                    </div>

                    {/* Content Card */}
                    <div className={`flex-1 ${
                      isVisible ? 'translate-x-0' : '-translate-x-10'
                    } transition-all duration-700`}>
                      <div className={`group relative rounded-2xl p-8 ${
                        isDark
                          ? 'bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl ring-1 ring-purple-500/20'
                          : 'bg-white/90 backdrop-blur-xl ring-1 ring-purple-200/50'
                      } shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:ring-purple-500/40`}>
                        {/* Gradient Border on Hover */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${work.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}></div>

                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                          <div className="flex-1">
                            <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                              {work.title}
                            </h3>
                            <div className="flex items-center gap-4 flex-wrap">
                              <span className={`text-sm font-semibold ${
                                isDark ? 'text-purple-400' : 'text-purple-600'
                              }`}>
                                {work.company}
                              </span>
                              <span className={`text-sm ${
                                isDark ? 'text-gray-400' : 'text-gray-600'
                              }`}>
                                {work.period}
                              </span>
                            </div>
                          </div>
                          <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${
                            work.status === 'completed'
                              ? isDark
                                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/50'
                                : 'bg-gradient-to-r from-green-400 to-emerald-400 text-white shadow-lg shadow-green-400/30'
                              : isDark
                              ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/50 animate-pulse'
                              : 'bg-gradient-to-r from-orange-400 to-red-400 text-white shadow-lg shadow-orange-400/30 animate-pulse'
                          } transition-all duration-300`}>
                            {work.status === 'completed' ? '✓ Completed' : '⟳ In Progress'}
                          </span>
                        </div>

                        <p className={`mb-6 leading-7 transition-colors duration-300 ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {work.description}
                        </p>

                        {/* Technologies */}
                        <div>
                          <p className={`text-sm font-semibold mb-3 transition-colors duration-300 ${
                            isDark ? 'text-gray-400' : 'text-gray-700'
                          }`}>
                            Technologies Used:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {work.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                  isDark
                                    ? `bg-gradient-to-r ${work.color} text-white shadow-lg`
                                    : `bg-gradient-to-r ${work.color} text-white shadow-md`
                                } hover:scale-110 hover:shadow-xl transform`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Progress Indicator for In-Progress Items */}
                        {work.status === 'in-progress' && (
                          <div className="mt-6">
                            <div className={`h-2 rounded-full overflow-hidden ${
                              isDark ? 'bg-gray-700' : 'bg-gray-200'
                            }`}>
                              <div className={`h-full bg-gradient-to-r ${work.color} rounded-full animate-pulse`} style={{ width: '75%' }}></div>
                            </div>
                            <p className={`text-xs mt-2 text-right ${
                              isDark ? 'text-gray-500' : 'text-gray-400'
                            }`}>75% Complete</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalWork;
