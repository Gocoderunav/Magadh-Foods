


import React, { useEffect, useState, useRef } from 'react';
import { db } from './Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { FaFilter, FaSearch } from 'react-icons/fa';
import './DataItem.css';

export const DataItems = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsCollection = collection(db, 'items');
        const itemsSnapshot = await getDocs(itemsCollection);
        const itemsList = itemsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        // Set items and filter categories
        setItems(itemsList);

        const uniqueCategories = [...new Set(itemsList.map(item => item.item))];
        setCategories(['All', ...uniqueCategories]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const filtered = items
      .filter(item => 
        item.itemname && item.itemname.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === 'All' || item.item === selectedCategory)
      )
      .sort((a, b) => {
        if (a.imp && !b.imp) return -1;
        if (!a.imp && b.imp) return 1;
        return 0;
      });

    setFilteredItems(filtered);
  }, [items, searchTerm, selectedCategory]);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredItems(items);
    } else {
      const filtered = items.filter(item => item.item === category);
      setFilteredItems(filtered);
    }
    setShowDropdown(false);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="data-items-container">
      <div className="filter-bar">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for items"
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        <div className="filter-dropdown" ref={dropdownRef}>
          <button
            className="filter-button"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FaFilter /> {selectedCategory}
          </button>
          {showDropdown && (
            <div className="dropdown-menu">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleFilter(category)}
                  className={selectedCategory === category ? 'active' : ''}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="items-grid">
        {filteredItems.map(item => (
          <div key={item.id} className={`item-card ${item.imp ? 'important' : ''}`}>
            <img src={item.imgUrl} alt={item.itemname} />
            <h3>{item.itemname}</h3>
            {/* <p className="item-price">${item.price}</p> */}
            <div className="item-description">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
