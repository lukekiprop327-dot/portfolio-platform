export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search Projects"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}