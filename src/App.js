import React, { useState, useEffect } from 'react';
import './App.css';

const events = [
  { id: 1, title: 'Tech Conference', date: '2024-10-15', category: 'Technology', description: 'Annual tech conference featuring the latest innovations.' },
  { id: 2, title: 'Music Festival', date: '2024-11-01', category: 'Music', description: 'Three-day music festival with various artists.' },
  { id: 3, title: 'Art Exhibition', date: '2024-10-20', category: 'Art', description: 'Showcase of local and international artists.' },
  { id: 4, title: 'Food Fair', date: '2024-11-10', category: 'Food', description: 'Culinary event featuring cuisines from around the world.' },
  { id: 5, title: 'Science Symposium', date: '2024-12-05', category: 'Science', description: 'Gathering of leading scientists to discuss recent breakthroughs.' },
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [activeEvent, setActiveEvent] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const savedCategory = localStorage.getItem('selectedCategory');
    const savedSearchTerm = localStorage.getItem('searchTerm');
    if (savedCategory) setSelectedCategory(savedCategory);
    if (savedSearchTerm) setSearchTerm(savedSearchTerm);
  }, []);

  useEffect(() => {
    filterEvents();
    localStorage.setItem('selectedCategory', selectedCategory);
    localStorage.setItem('searchTerm', searchTerm);
  }, [selectedCategory, searchTerm]);

  const filterEvents = () => {
    let filtered = events;
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(lowercasedTerm) ||
        event.description.toLowerCase().includes(lowercasedTerm)
      );
    }
    setFilteredEvents(filtered);
  };

  const categories = ['All', ...new Set(events.map(event => event.category))];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setActiveEvent(null);
    setIsSidebarOpen(false);
  };

  const handleEventClick = (event) => {
    setActiveEvent(event);
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <header>
        <button className="menu-toggle" onClick={toggleSidebar}>☰</button>
        <h1>Upcoming Events</h1>
      </header>
      <main>
        <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <h2>Filter Events</h2>
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <h3>Category</h3>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="category-select"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </aside>
        <section className="event-list">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <div 
                key={event.id} 
                className={`event-card ${activeEvent === event ? 'active' : ''}`}
                onClick={() => handleEventClick(event)}
              >
                <h3>{event.title}</h3>
                <p className="event-date">{event.date}</p>
                <p className="event-category">{event.category}</p>
              </div>
            ))
          ) : (
            <p className="no-events">No events found. Try adjusting your filters.</p>
          )}
        </section>
        {activeEvent && (
          <section className="event-details">
            <h2>{activeEvent.title}</h2>
            <p className="event-date">{activeEvent.date}</p>
            <p className="event-category">{activeEvent.category}</p>
            <p className="event-description">{activeEvent.description}</p>
          </section>
        )}
      </main>
    </div>
  );
};

export default App;
