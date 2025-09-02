import React, { useState, useCallback } from 'react';

// Define options data for better maintainability
const SEARCH_OPTIONS = {
  locations: [
    { value: '', label: 'All Locations' },
    { value: 'mohali', label: 'Mohali' },
    { value: 'amritsar', label: 'Amritsar' },
    { value: 'jalandhar', label: 'Jalandhar' }
  ],
  prices: [
    { value: '', label: 'Any Price' },
    { value: '10000', label: '10,000' },
    { value: '20000', label: '20,000' },
    { value: '30000', label: '30,000' }
  ],
  types: [
    { value: '', label: 'All Types' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' }
  ]
};

const Search = React.memo(({ onSearch = () => {} }) => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    price: '',
    type: ''
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInputChange = useCallback((field, value) => {
    setSearchParams(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error for this field when user makes a selection
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  }, [errors]);

  // Validate form
  const validateForm = useCallback(() => {
    const newErrors = {};
    
    // In a real app, you might want to add more validation rules here
    // For now, we'll just ensure the form can be submitted
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, []);

  // Handle form submission
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Pass search parameters to parent component
      onSearch(searchParams);
    }
  }, [searchParams, validateForm, onSearch]);

  // Render select options
  const renderOptions = (options) => {
    return options.map((option) => (
      <option 
        key={option.value} 
        value={option.value}
      >
        {option.label}
      </option>
    ));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md sm:flex-col sm:gap-3 sm:p-3 md:flex-row md:items-center md:gap-4 md:p-4"
      aria-label="Property search filters"
    >
      <div className="flex flex-col gap-3 w-full md:flex-row md:gap-4">
        <div className="flex-1">
          <select
            id="location-select"
            name="location"
            value={searchParams.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            className={`w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.location ? 'border-red-500' : 'border-gray-300'
            }`}
            aria-invalid={!!errors.location}
            aria-describedby={errors.location ? "location-error" : undefined}
          >
            {renderOptions(SEARCH_OPTIONS.locations)}
          </select>
          {errors.location && (
            <span id="location-error" className="text-red-500 text-xs mt-1 block">
              {errors.location}
            </span>
          )}
        </div>

        <div className="flex-1">
          <select
            id="price-select"
            name="price"
            value={searchParams.price}
            onChange={(e) => handleInputChange('price', e.target.value)}
            className={`w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.price ? 'border-red-500' : 'border-gray-300'
            }`}
            aria-invalid={!!errors.price}
            aria-describedby={errors.price ? "price-error" : undefined}
          >
            {renderOptions(SEARCH_OPTIONS.prices)}
          </select>
          {errors.price && (
            <span id="price-error" className="text-red-500 text-xs mt-1 block">
              {errors.price}
            </span>
          )}
        </div>

        <div className="flex-1">
          <select
            id="type-select"
            name="type"
            value={searchParams.type}
            onChange={(e) => handleInputChange('type', e.target.value)}
            className={`w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.type ? 'border-red-500' : 'border-gray-300'
            }`}
            aria-invalid={!!errors.type}
            aria-describedby={errors.type ? "type-error" : undefined}
          >
            {renderOptions(SEARCH_OPTIONS.types)}
          </select>
          {errors.type && (
            <span id="type-error" className="text-red-500 text-xs mt-1 block">
              {errors.type}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-end w-full md:w-auto">
        <button
          type="submit"
          className="w-full md:w-auto px-4 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
});

export default Search;
