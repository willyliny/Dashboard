import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import lineChart1Icon from './assets/images/analytics.gif';
import lineChart2Icon from './assets/images/line-chart.gif';
import codeIcon from './assets/images/code.gif';
import mainMenu from './assets/images/menu.png';
import deleteIcon from './assets/images/delete.gif';


// 示例頁面組件
const SQLitePage = () => <div>SQLite Page</div>;
const MariadbPage = () => <div>Mariadb Page</div>;
const SettingsPage = () => <div>Settings Page</div>;
const HelpPage = () => <div>Help Page</div>;


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const menuItems = [
        { icon: lineChart1Icon, text: 'SQLite', path: '/sqlite' },
        { icon: lineChart2Icon, text: 'Mariadb', path: '/mariadb' },
        { icon: codeIcon, text: 'AP', path: '/ap' },
        // { icon: lineChart2, text: '幫助', path: '/help' },
    ];

    return (
        <Router>
            <div className="relative">
                <button
                    onClick={toggleSidebar}
                    className="fixed top-4 left-4 z-50 p-2 text-white rounded-md"
                >
                    {isOpen ? <img src={deleteIcon} alt= "close" className="w-6 h-6 object-contain rounded-full" /> : <img src={mainMenu} alt= "open" className="w-6 h-6 object-contain border-2 border-white" />}
                </button>
                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-5 transition-transform duration-300 ease-in-out ${
                        isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <nav className="mt-16">
                        <ul>
                            {menuItems.map((item, index) => (
                                <li key={index} className="mb-4">
                                    <Link
                                        to={item.path}
                                        className="flex items-center p-2 hover:bg-gray-700 rounded-full transition-colors duration-200"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <div className="w-10 h-10 mr-3 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md">
                                            <img 
                                                src={item.icon} 
                                                alt={item.text}
                                                className="w-8 h-8 object-cover"
                                            />
                                        </div>
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="ml-64 p-4">
                    <Routes>
                        <Route path="/sqlite" element={<SQLitePage />} />
                        <Route path="/mariadb" element={<MariadbPage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                        <Route path="/help" element={<HelpPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default Sidebar;